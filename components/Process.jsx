export default function Process() {
  return (
    <section className="sec process" id="process">
      <div className="sec-label reveal">How it works</div>
      <div className="sec-title reveal">Simple. <span className="green">No surprises.</span></div>

      <div style={{ marginTop: 16, marginBottom: 4, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--grey2)", fontFamily: "'Product Sans', sans-serif" }} className="reveal">
        Before we begin
      </div>

      <div className="before-grid">
        {[
          { num: "Step 01", h: "Brand Understanding Meeting", p: "No commitment. No pitch. Just an honest conversation where we learn about your brand, where your marketing is today, and where you want to take it. If we're a fit, you get 110% of our effort.", delay: "" },
          { num: "Step 02", h: "Proposal Discussion", p: "We walk you through our process, deliverables, and commercials. Everything is transparent. We move forward only when it works for both sides.", delay: ".1s" },
          { num: "Step 03", h: "Onboarding", p: "You meet the team. We ask you a lot of questions — more than you'd expect. We want to understand your brand the way you do. This is where the collaboration officially begins.", delay: ".2s" },
        ].map(({ num, h, p, delay }) => (
          <div className="before-step reveal" key={num} style={delay ? { transitionDelay: delay } : {}}>
            <div className="before-num">{num}</div>
            <div className="before-h">{h}</div>
            <p className="before-p">{p}</p>
          </div>
        ))}
      </div>

      <div className="phases reveal">
        {[
          { chip: "Phase 1 · Days 1–15", h: "— Strategy & Foundation", p: "Everything starts here. By day 10, you receive a complete research document, competitor analysis, brand book, content strategy, and your first 7 pieces of content. Days 11–13 are production. By day 15, your brand presence is built, your content calendar is live, and we're moving." },
          { chip: "Phase 2 · Months 1–6", h: "— Experimentation", p: "This is where we find what works. We test formats, messaging, hooks, and ad creative — iterating every 30 days based on real data. Most agencies skip this phase entirely. We treat it as the most important one, because the insights here are what everything else is built on." },
          { chip: "Phase 3 · Month 6 onwards", h: "— Scaling", p: "Once we know what works, we scale it. More volume, more reach, more leads — built on a foundation of proven content and a strategy that's already delivering. This is where the compounding begins and social media becomes your most reliable growth channel." },
        ].map(({ chip, h, p }) => (
          <div className="phase-item" key={chip}>
            <div className="phase-chip">{chip}</div>
            <div className="phase-h">{h}</div>
            <p className="phase-p">{p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
