const WA_ICON_SM = (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Services() {
  return (
    <section className="sec services" id="services">
      <div className="sec-label reveal">What we do</div>
      <div className="sec-title reveal" style={{ marginBottom: 50 }}>
        Two services. <span className="green">One goal.</span><br />Your business growing.
      </div>

      <div className="services-intro-grid">
        <div className="reveal">
      <div className="service-sub-label" style={{fontFamily: "'Product Sans', sans-serif"}}>Social Media Marketing<br />for Brands</div>
        </div>
        <div className="reveal" style={{ transitionDelay: ".08s" }}>
          <p className="services-body">
            Most agencies sell you content. Then charge you separately for leads. We don't separate the two — because they were never meant to be separate. Every package we offer is built around creative content that converts. Leads aren't an add-on. <strong>They're the point.</strong>
          </p>
        </div>
      </div>

      <div className="pricing-grid">
        {/* Starter */}
        <div className="p-card reveal">
          <div className="p-name">Build the Foundation</div>
          <div className="p-tagline">For businesses that want to test us before they trust us.</div>
          <div className="p-price">₹40,000</div>
          <div className="p-cycle">per month</div>
          <hr className="p-divider" />
          <p className="p-desc">The lowest-commitment way to experience what Figora does. We handle your content, your strategy, and your brand presence — so you can see the quality before going all in.</p>
          <ul className="p-features">
            {["Social media strategy","Competitor research","Social media brand book","Socially optimized scripts","12–15 creatives per month","One day production per month","End-to-end post-production","Special campaign management","Community management"].map(f => (
              <li className="p-feat" key={f}>{f}</li>
            ))}
          </ul>
          <div className="p-cta-container">
            <a href="https://wa.me/" className="p-cta liquid-btn" target="_blank" rel="noreferrer">Get started →</a>
          </div>
        </div>

        {/* Growth (featured) */}
        <div className="p-card featured reveal" style={{ transitionDelay: ".1s" }}>
          <div className="badge-container">
            <div className="badge">Recommended</div>
          </div>
          <div className="p-name" style={{ color: "#fff" }}>The One Most Businesses Need</div>
          <div className="p-tagline">For businesses ready to turn social media into a lead channel.</div>
          <div className="p-price">₹90,000</div>
          <div className="p-cycle">per month</div>
          <hr className="p-divider" />
          <p className="p-desc">Same creative quality as Starter — with paid lead generation built in at no extra cost. This is where social media stops being a cost and starts being an investment.</p>
          <ul className="p-features">
            {["Everything in Starter","Paid ads — Meta & Instagram — included","Lead generation system, guaranteed","Monthly performance review","Daily tracker sheet"].map(f => (
              <li className="p-feat" key={f}>{f}</li>
            ))}
          </ul>
          <div className="p-cta-container">
            <a href="https://wa.me/" className="p-cta liquid-btn" target="_blank" rel="noreferrer">Get started →</a>
          </div>
        </div>

        {/* Scale */}
        <div className="p-card reveal" style={{ transitionDelay: ".2s" }}>
          <div className="p-name">Dominate Your Space</div>
          <div className="p-tagline">For brands serious about maximum volume and results.</div>
          <div className="p-price">₹1,60,000</div>
          <div className="p-cycle">per month</div>
          <hr className="p-divider" />
          <p className="p-desc">95 million posts are uploaded every day. The brands winning are the ones showing up the most, and the best. This package gives you both — maximum volume, maximum results.</p>
          <ul className="p-features">
            {["Everything in Growth","28–30 creatives per month","Multi-format — reels, carousels, statics, stories","Priority support & strategy calls"].map(f => (
              <li className="p-feat" key={f}>{f}</li>
            ))}
          </ul>
          <div className="p-cta-container">
            <a href="https://wa.me/" className="p-cta liquid-btn" target="_blank" rel="noreferrer">Get started →</a>
          </div>
        </div>
      </div>

      {/* Personal Branding */}
      <div className="pb-band reveal">
        <div>
      <div style={{marginTop: 18, marginBottom: 6, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--grey2)", fontFamily: "'Product Sans', sans-serif"}}>Service 02</div>
          <div className="pb-title">
            You're building a business.<br />But <span className="green">you are the brand.</span>
          </div>
          <p className="pb-body">
            Your philosophy, your values, your story — these aren't things to keep private. They're the things that build trust faster than any ad ever could. Founders who show up personally close faster, attract better clients, and build businesses that outlast any algorithm.
          </p>
          <a href="https://wa.me/" className="wa-btn" target="_blank" rel="noreferrer" style={{ fontSize: 12, padding: "11px 22px" }}>
            {WA_ICON_SM}
            Enquire about Personal Branding
          </a>
        </div>
        <div className="reveal" style={{ transitionDelay: ".1s" }}>
          <div className="pb-right-inner">
            <p>We build your positioning, your content strategy, your voice, and your presence from the ground up. Then we execute it — so you show up like the authority you already are, without it consuming your life.</p>
            <p className="pb-best">Best for: D2C founders and business owners who want their name to mean something in their space.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
