export default function Hero() {
  return (
    <section className="sec hero">
      <div className="hero-content">
        <h1 className="hero-title reveal">
          We make creative<br />
          content that gets<br />
          you leads,<br />
          not just views.<br />
          <span className="green">Guaranteed.</span>
        </h1>
        <p className="hero-subtitle reveal" style={{ transitionDelay: ".08s" }}>
          Specialized social media marketing for brands and founders — backed by a lean team that's driven crores in revenue and 10M+ views for brands.
        </p>
        <div className="hero-cta reveal" style={{ transitionDelay: ".16s" }}>
          <a href="https://wa.me/" className="cta-button" target="_blank" rel="noopener noreferrer">
            Let's talk on WhatsApp
          </a>
          <span className="cta-subtext">No commitment. One honest conversation.</span>
        </div>
      </div>
      
      <div className="stat-grid reveal" style={{ transitionDelay: ".24s" }}>
        <div className="stat-box">
          <div className="stat-num">10M+</div>
          <div className="stat-label">Views generated<br />for brands</div>
        </div>
        <div className="stat-box">
          <div className="stat-num">40+</div>
          <div className="stat-label">Campaigns<br />executed</div>
        </div>
        <div className="stat-box">
          <div className="stat-num">100%</div>
          <div className="stat-label">Lead<br />guarantee</div>
        </div>
        <div className="stat-box">
          <div className="stat-num">8+</div>
          <div className="stat-label">Brands using social<br />as revenue channel</div>
        </div>
      </div>
    </section>
  );
}
