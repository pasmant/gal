import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import { getCrmAdapter } from "@/lib/crm";
import type { ContactLead } from "@/types";

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const { ok: rateLimitOk } = rateLimit(ip);
  if (!rateLimitOk) {
    return NextResponse.json(
      { error: "יותר מדי בקשות. אנא נסו שוב מאוחר יותר." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "בקשה לא תקינה" },
      { status: 400 }
    );
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "נתונים לא תקינים", details: result.error.flatten() },
      { status: 422 }
    );
  }

  const data = result.data;

  if (data.website && data.website.length > 0) {
    return NextResponse.json({ success: true });
  }

  const lead: ContactLead = {
    fullName: data.fullName,
    phone: data.phone,
    email: data.email,
    subject: data.subject,
    message: data.message,
    timestamp: new Date().toISOString(),
    source: "website",
  };

  console.log("[LEAD]", JSON.stringify(lead));

  const crm = getCrmAdapter();
  if (crm) {
    const crmResult = await crm.sendLead(lead);
    if (!crmResult.ok) {
      console.error("[CRM_ERROR]", crmResult.error);
    }
  }

  return NextResponse.json({ success: true });
}
