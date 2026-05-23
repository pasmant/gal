import type { ContactLead } from "@/types";

export interface CrmAdapter {
  sendLead(lead: ContactLead): Promise<{ ok: boolean; error?: string }>;
}

export class WebhookCrmAdapter implements CrmAdapter {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async sendLead(lead: ContactLead): Promise<{ ok: boolean; error?: string }> {
    try {
      const res = await fetch(this.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });

      if (!res.ok) {
        return { ok: false, error: `Webhook returned ${res.status}` };
      }

      return { ok: true };
    } catch (err) {
      return {
        ok: false,
        error: err instanceof Error ? err.message : "Unknown error",
      };
    }
  }
}

export function getCrmAdapter(): CrmAdapter | null {
  const url = process.env.CRM_WEBHOOK_URL;
  if (!url) return null;
  return new WebhookCrmAdapter(url);
}
