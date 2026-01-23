// src/app/demo/leads/page.tsx
import ChatShell from "@/components/support-bot/ChatShell";

export default function LeadsDemoPage() {
  return (
    <main className="page">
   

      <section className="section">
        <div className="container">
          <ChatShell title="Leads Demo" subtitle="Coming next — qualify leads & collect contact details.">
            <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 13, lineHeight: 1.7 }}>
              This page is a placeholder. Next step: build the Leads bot flow.
            </div>
          </ChatShell>
        </div>
      </section>
    </main>
  );
}
