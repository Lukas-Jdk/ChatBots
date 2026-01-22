import ChatShell from "@/components/support-bot/ChatShell";

export default function FaqDemoPage() {
  return (
    <main className="page">
      <div className="bgWrap" aria-hidden="true">
        <div className="bgBase" />
        <div className="bgGrid" />
        <div className="bgLines" />
        <div className="bgParticles" />
        <div className="bgVignette" />
      </div>

      <section className="section">
        <div className="container">
          <ChatShell title="FAQ Demo" subtitle="Coming next — quick FAQ answers with categories.">
            <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 13, lineHeight: 1.7 }}>
              This page is a placeholder. Next step: build the FAQ bot demo flow.
            </div>
          </ChatShell>
        </div>
      </section>
    </main>
  );
}
