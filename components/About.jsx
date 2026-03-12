export default function About() {
  return (
    <section className="sec about" id="about">
      <div className="sec-title reveal">
        A small team with<br /><span className="green">one obsession.</span>
      </div>
      <div className="about-grid">
        <div className="about-body reveal" style={{ transitionDelay: ".08s" }}>
          <p>Figora is a founder-led agency built for business owners who've run out of patience for agencies that overpromise and underdeliver.</p>
          <p>We're not the biggest. We don't want to be. We want to be the agency you recommend to other founders and brands — because the results were real and working with us felt different from day one.</p>
        </div>
        <div className="values reveal" style={{ transitionDelay: ".16s" }}>
          {[
            { n: "01", t: "Results over reports.", d: "Growth and experimentation are the only metrics that matter." },
            { n: "02", t: "Honesty before everything.", d: "You'll always know where things stand." },
            { n: "03", t: "Your win is our win.", d: "We don't grow unless you do." },
          ].map(({ n, t, d }) => (
            <div className="val" key={n}>
              <span className="val-num">{n}</span>
              <div>
                <div className="val-title">{t}</div>
                <div className="val-desc">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
