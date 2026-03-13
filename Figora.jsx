import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import founderImg from "./assets/fignew.png";
import video1 from "./assets/feature1.mp4";
import video2 from "./assets/feature2.mp4";
import video3 from "./assets/feature3.mp4";
import heVid from "./assets/he.mp4";

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17, flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Product+Sans:wght@400;500;700&family=Poppins:wght@400;500;600;700&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0c0c0c;
  --bg1:#111111;
  --bg2:#161616;
  --bg3:#1a1a1a;
  --green:#c8ff00;
  --purple:#5b21b6;
  --purple-bright:#7c3aed;
  --white:#ffffff;
  --off-white:#e8e8e8;
  --grey:#888888;
  --grey2:#555555;
  --border:#242424;
  --border2:#2e2e2e;
}
html{scroll-behavior:smooth}
body{
  background:var(--bg);
  color:var(--white);
  font-family:'Poppins',sans-serif;
  font-size:15px;
  line-height:1.6;
  overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:var(--bg)}
::-webkit-scrollbar-thumb{background:var(--border2)}

nav{
  position:fixed;top:0;left:0;right:0;z-index:999;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 40px;height:56px;
  background:#0c0c0c;
  border-bottom:1px solid var(--border);
  backdrop-filter:blur(20px);
}
.nav-logo{font-family:'Product Sans',sans-serif;font-weight:700;font-size:20px;letter-spacing:0.04em;color:var(--white);text-transform:uppercase;}
.nav-links{display:flex;gap:32px;list-style:none}
.nav-links a{color:var(--grey);text-decoration:none;font-size:15px;font-weight:400;letter-spacing:0.02em;transition:color .2s}
.nav-links a:hover{color:var(--white)}
.nav-btn, .wa-btn, .p-cta, .liquid-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: 'Product Sans', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px; /* Fully curved edges */
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 1;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  cursor: pointer;
}
.nav-btn::before, .wa-btn::before, .p-cta::before, .liquid-btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 50%; height: 100%;
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
  transform: skewX(-25deg);
  transition: left 0.5s ease;
  z-index: -1;
}
.nav-btn:hover, .wa-btn:hover, .p-cta:hover, .liquid-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  /* Removed purple box-shadow hover animation color */
  transform: translateY(-2px);
}
.nav-btn:active, .wa-btn:active, .p-cta:active, .liquid-btn:active {
  transform: scale(0.95);
}
.nav-btn:hover::before, .wa-btn:hover::before, .p-cta:hover::before, .liquid-btn:hover::before {
  left: 200%;
  transition: left 0.7s ease;
}
.nav-btn { padding: 8px 18px; font-size: 12px; }
.wa-btn { padding: 11px 22px; font-size: 13px; gap: 8px; }
.liquid-btn { padding: 16px 40px; font-size: 16px; font-weight: 700; letter-spacing: 0.08em; }

.ham-btn{display:none}

.hero{min-height:100svh;width:100%;padding:0;position:relative;overflow:hidden;}
.hero-video-container{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;}
.hero-video-container video{width:100%;height:100%;object-fit:cover;object-position:center;}
.hero::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.3);pointer-events:none;z-index:0;}
.hero-bottom-content{position:absolute;bottom:0;left:0;width:100%;display:flex;justify-content:center;padding-bottom:40px;z-index:1;}
.hero-left{max-width:840px;width:100%;}
.hero-h1{font-family:'Product Sans',sans-serif;font-weight:700;font-size:clamp(52px,6.5vw,80px);line-height:1.0;letter-spacing:-0.025em;color:var(--white);margin-bottom:0;}
.hero-h1 .green{color:var(--green);display:block}
.hero-sub{color:var(--grey);font-size:15px;line-height:1.7;font-weight:400;max-width:650px;margin:20px auto 36px;}
.micro{margin-top:14px;font-size:11px;color:var(--grey2);font-style:italic;letter-spacing:0.01em}

.stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
.stat-box{background:#000000;border:1px solid var(--border);padding:28px 24px;text-align:center;}
.stat-box.green-box{background:#000000}
.stat-num{font-family:'Barlow',sans-serif;font-weight:900;font-size:44px;line-height:1;letter-spacing:-0.03em;color:#D0FF00;}
.green-box .stat-num{color:#D0FF00}
.stat-label{font-size:13px;color:var(--grey);margin-top:8px;font-weight:400;line-height:1.4}
.green-box .stat-label{color:rgba(255,255,255,0.7)}

.logo-strip{background:#0c0c0cf2;overflow:hidden;padding:18px 0;}
.logo-track{display:flex;gap:56px;width:max-content;animation:marquee 28s linear infinite;}
.logo-track span{font-family:'Product Sans',sans-serif;font-weight:500;font-size:14px;color:var(--grey2);letter-spacing:0.12em;text-transform:uppercase;white-space:nowrap;}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

.sec{padding:90px 40px;position:relative}
.sec-label{font-size:13px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:var(--green);margin-bottom:18px;}
.sec-title{font-family:'Product Sans',sans-serif;font-weight:700;font-size:clamp(42px,5vw,72px);line-height:1.0;letter-spacing:-0.025em;}
.sec-title .green{color:var(--green)}
.sec-title .grey{color:var(--grey)}

.problem{background:#0c0c0cf2}
.problem-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
.problem-left .big{font-family:'Product Sans',sans-serif;font-weight:700;font-size:clamp(36px,4vw,56px);line-height:1.1;letter-spacing:-0.02em;}
.problem-left .big .green{color:var(--green)}
.problem-right p{color:var(--grey);font-size:17px;line-height:1.8;font-weight:400;margin-bottom:16px;}
.problem-right p strong{color:var(--off-white);font-weight:600}

.proof{background:#0c0c0cf2}
.proof-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:3px;margin-top:44px}
.proof-box{background:#0c0c0cf2;border:1px solid var(--border);padding:40px 28px;transition:transform .35s cubic-bezier(0.22,1,0.36,1),box-shadow .35s cubic-bezier(0.22,1,0.36,1),border-color .35s ease;cursor:pointer;}
.proof-box:hover{transform:translateY(-8px);box-shadow:0 18px 32px rgba(0,0,0,.3);border-color:#D0FF00;}
.proof-box:hover .proof-num{color:#D0FF00;}
.proof-num{font-family:'Product Sans',sans-serif;font-weight:700;font-size:68px;line-height:1;letter-spacing:-0.03em;color:var(--green);}
.proof-desc{font-size:15px;color:var(--grey);margin-top:10px;font-weight:400;line-height:1.5}

.testi{background:#0c0c0cf2}
.testi-header{margin-bottom:40px}
.dont-line{font-family:'Product Sans',sans-serif;font-weight:700;font-size:clamp(36px,4.5vw,64px);line-height:1.1;letter-spacing:-0.025em;color:var(--grey);}
.take-line{font-family:'Product Sans',sans-serif;font-weight:700;font-size:clamp(36px,4.5vw,64px);line-height:1.1;letter-spacing:-0.025em;color:var(--white);}
.take-line .green{color:var(--green)}
.testi-grid{display:grid;grid-template-columns:1fr 1fr;gap:3px}
.testi-card{background:#0c0c0cf2;border:1px solid var(--border);padding:40px;position:relative;}
.testi-card::before{content:'\u201C';position:absolute;top:16px;right:24px;font-family:'Product Sans',sans-serif;font-weight:700;font-size:96px;line-height:1;color:var(--border2);}
.testi-text{color:var(--grey);font-size:16px;line-height:1.75;font-style:italic}
.testi-author{margin-top:20px;font-size:14px;color:var(--green);font-weight:600;letter-spacing:0.04em}

.show-before{background:#0c0c0cf2}
.show-title{font-family:'Product Sans',sans-serif;font-weight:700;font-size:clamp(42px,5vw,70px);line-height:1.05;letter-spacing:-0.025em;margin-bottom:50px;}
.show-title .green{color:var(--green)}
.show-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px}
.show-card{background:#0c0c0cf2;border:1px solid var(--border);aspect-ratio:16/10;position:relative;overflow:hidden;display:flex;align-items:flex-end;padding:16px;transition:transform .35s cubic-bezier(0.22,1,0.36,1),box-shadow .35s ease,border-color .35s ease;cursor:pointer;}
.show-card:hover{transform:translateY(-5px);box-shadow:0 14px 25px rgba(0,0,0,.35);border-color:#D0FF00;}
.show-card video{transition:transform .5s ease,filter .35s ease;transform:scale(1);filter:grayscale(100%);}
.show-card:hover video{transform:scale(1.08);filter:grayscale(0%);}
.show-card::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(0,0,0,0.7) 100%);}
.show-card-tag{position:relative;z-index:1;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--grey);border:1px solid var(--border2);padding:5px 12px;}
.show-card .bg-anim{position:absolute;inset:0;background:linear-gradient(135deg,var(--bg3) 0%,var(--bg1) 100%);}
.show-card:nth-child(2) .bg-anim{background:linear-gradient(135deg,#0d0d1a 0%,#12102a 100%);}
.show-card:nth-child(3) .bg-anim{background:linear-gradient(135deg,#0d1209 0%,#101a0d 100%);}

.services{background:#0c0c0cf2}
.services-intro-grid{display:grid;grid-template-columns:0.8fr 1.2fr;gap:60px;align-items:start;margin-bottom:50px;}
.services-body{color:var(--grey);font-size:17px;line-height:1.75;font-weight:400}
.services-body strong{color:var(--white);font-weight:600}
.service-sub-label{font-family:'Product Sans',sans-serif;font-weight:700;font-size:22px;color:var(--white);margin-bottom:8px;letter-spacing:-0.01em;}

.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:8px}
.p-card{background:#0c0c0cf2;border:1px solid var(--border);border-radius:24px;padding:32px 28px;position:relative;transition:border-color .25s;display:flex;flex-direction:column;}
.p-card:hover{border-color:var(--border2)}
.p-card.featured{background:#0c0c0cf2;border-color:var(--border2);transform:scaleY(1.01);z-index:2;}
.badge-container { position: absolute; top: -14px; left: 0; width: 100%; text-align: center; }
.badge{display:inline-block;background:linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);color:#fff;font-size:12px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;padding:5px 12px;margin:0;border-radius:20px;box-shadow:0 4px 10px rgba(0,0,0,0.5);}
.p-name{font-family:'Product Sans',sans-serif;font-weight:700;font-size:24px;letter-spacing:-0.01em;color:var(--white);margin-bottom:4px;}
.p-tagline{font-size:14px;color:var(--grey);font-style:italic;line-height:1.45;margin-bottom:20px;}
.p-card.featured .p-tagline{color:rgba(255,255,255,0.5)}
.p-price{font-family:'Product Sans',sans-serif;font-weight:700;font-size:48px;line-height:1;letter-spacing:-0.025em;color:var(--green);margin-bottom:3px;}
.p-cycle{font-size:13px;color:var(--grey);letter-spacing:0.02em;margin-bottom:22px}
.p-card.featured .p-cycle{color:rgba(255,255,255,0.4)}
.p-divider{border:none;margin-bottom:18px}
.p-card.featured .p-divider{border-color:rgba(255,255,255,0.12)}
.p-desc{font-size:15px;color:var(--grey);line-height:1.7;margin-bottom:22px;font-weight:400}
.p-card.featured .p-desc{color:rgba(255,255,255,0.65)}
.p-features{list-style:none}
.p-feat{font-size:14px;color:var(--grey);padding:5px 0 5px 18px;position:relative;font-weight:400;line-height:1.45;}
.p-feat::before{content:'→';position:absolute;left:0;color:var(--green);font-size:13px}
.p-card.featured .p-feat{color:rgba(255,255,255,0.75)}
.p-cta-container { margin-top: auto; padding-top: 26px; }
.p-cta { display: flex; width: 100%; padding: 15px; font-size: 14px; margin: 0; }

.pb-band{background:#0c0c0cf2;border:1px solid var(--border);margin-top:44px;padding:60px 50px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
.pb-title{font-family:'Product Sans',sans-serif;font-weight:700;font-size:clamp(34px,3.6vw,54px);line-height:1.1;letter-spacing:-0.025em;margin-bottom:18px;}
.pb-title .green{color:var(--green)}
.pb-body{color:var(--grey);font-size:16px;line-height:1.8;margin-bottom:30px;font-weight:400}
.pb-right-inner{background:#0c0c0cf2;border:1px solid var(--border);padding:32px;font-size:15px;color:var(--grey);line-height:1.8;font-weight:400;}
.pb-best{margin-top:18px;font-size:13px;color:var(--green);font-weight:600;letter-spacing:0.03em}

.process{background:#0c0c0cf2}
.before-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;margin:48px 0}
.before-step{background:#0c0c0cf2;border:1px solid var(--border);padding:30px 28px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;}
.before-step:hover{transform:translateY(-8px);box-shadow:0 16px 30px rgba(0,0,0,.35);border-color:#D0FF00;}
.before-step:hover .before-h{color:#D0FF00;}
.before-num{font-size:12px;font-weight:700;color:var(--green);letter-spacing:0.12em;text-transform:uppercase;margin-bottom:14px;}
.before-h{font-family:'Product Sans',sans-serif;font-weight:700;font-size:20px;letter-spacing:-0.01em;margin-bottom:10px;transition:color .25s ease,transform .25s ease;cursor:pointer;}
.before-h:hover{transform:translateX(3px);}
.before-p{font-size:15px;color:var(--grey);line-height:1.7}
.phases{border-left:2px solid var(--border2);padding-left:0;margin-top:8px}
.phase-item{padding:28px 0 28px 40px;position:relative;transition:transform .35s cubic-bezier(0.22,1,0.36,1), box-shadow .35s cubic-bezier(0.22,1,0.36,1);}
.phase-item:hover{transform:translateY(-6px);box-shadow:0 18px 35px rgba(0,0,0,.25);}
.phase-item:last-child{border-bottom:none;padding-bottom:0}
.phase-item::before{content:'';position:absolute;left:-5px;top:36px;width:8px;height:8px;background:var(--green);border-radius:50%;}
.phase-chip{display:inline-block;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--green);margin-bottom:10px;}
.phase-h{font-family:'Product Sans',sans-serif;font-weight:700;font-size:22px;letter-spacing:-0.01em;margin-bottom:10px;transition:color .3s ease, transform .3s ease; cursor:pointer;}
.phase-h:hover{color:#D0FF00;transform:translateX(4px);}
.phase-p{font-size:16px;color:var(--grey);line-height:1.75;max-width:720px}

.founder{background:#0c0c0cf2}
.founder-grid{display:grid;grid-template-columns:1.1fr 0.9fr;gap:80px;align-items:center;margin-top:44px}
.founder-img{background:#0c0c0cf2;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;min-height:440px;}
.founder-img-letter{font-family:'Product Sans',sans-serif;font-weight:700;font-size:120px;color:var(--border2);letter-spacing:-0.05em;}
.founder-img::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(200,255,0,0.05),transparent);}
.founder-quote{font-family:'Product Sans',sans-serif;font-weight:700;font-size:clamp(36px,4vw,60px);line-height:1.1;letter-spacing:-0.025em;margin-bottom:28px;text-align:right;}
.founder-quote .green{color:var(--green)}
.founder-bio{color:var(--grey);font-size:17px;line-height:1.8;max-width:550px;margin-bottom:28px;text-align:right}
.founder-name strong{display:block;font-size:18px;font-weight:700;color:var(--white);margin-bottom:3px;text-align:right}
.founder-name span{font-size:14px;color:var(--grey);letter-spacing:0.02em;text-align:right;display:block}

.about{background:#0c0c0cf2}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;margin-top:44px}
.about-body{color:var(--grey);font-size:17px;line-height:1.8;font-weight:400}
.about-body p{margin-bottom:16px}
.about-body p:last-child{margin-bottom:0}
.values{display:flex;flex-direction:column;gap:15px}
.val{background:#0c0c0cf2;border:1px solid var(--border);padding:24px 30px;display:flex;gap:20px;align-items:flex-start;transition:transform .25s cubic-bezier(0.22,1,0.36,1),box-shadow .25s ease,border-color .25s ease;transform:scale(0.98);opacity:0;animation:popIn .4s forwards ease-out;}
.val:hover{transform:scale(1.02);box-shadow:0 14px 26px rgba(0,0,0,.35);border-color:#D0FF00;}
.val-num{font-size:12px;font-weight:700;color:var(--green);letter-spacing:0.08em;padding-top:2px;flex-shrink:0;}
.val-title{font-family:'Product Sans',sans-serif;font-size:17px;font-weight:700;color:var(--white);margin-bottom:4px;letter-spacing:-0.01em;transition:color .25s ease;cursor:pointer;}
.val-title:hover{color:#D0FF00;transform:translateX(4px);}
.val-desc{font-size:14px;color:var(--grey);line-height:1.5}

@keyframes popIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}

.final-cta{background:#0c0c0cf2;padding:120px 40px;text-align:center;position:relative;overflow:hidden;}
.final-cta::before{content:'';position:absolute;bottom:-150px;left:50%;transform:translateX(-50%);width:800px;height:500px;background:radial-gradient(ellipse,rgba(200,255,0,0.1) 0%,transparent 65%);pointer-events:none;}
.cta-label-small{font-size:13px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:var(--grey);margin-bottom:18px}
.cta-big{font-family:'Product Sans',sans-serif;font-weight:700;font-size:clamp(36px,5vw,70px);line-height:1.0;letter-spacing:-0.03em;max-width:860px;margin:0 auto 24px;}
.cta-big .green{color:var(--green)}
.cta-sub{color:var(--grey);font-size:14px;max-width:500px;margin:0 auto 46px;line-height:1.7}

footer{background:#0c0c0cf2;padding:60px 40px 40px;display:grid;grid-template-columns:1.2fr 1fr 1fr 1fr;gap:80px;align-items:start;}
.footer-left{display:flex;flex-direction:column;gap:24px;}
.foot-logo{font-family:'Product Sans',sans-serif;font-weight:700;font-size:32px;letter-spacing:0.04em;text-transform:uppercase;color:var(--white);}
.foot-desc{font-size:15px;color:var(--grey);line-height:1.75;font-weight:400;max-width:300px;}
.foot-social{display:flex;gap:16px;}
.social-icon{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border:1px solid var(--border);border-radius:50%;color:var(--grey);transition:all .25s;font-size:14px;padding:0;}
.social-icon svg{width:20px;height:20px;}
.social-icon:hover{color:var(--green);border-color:var(--green);}
.footer-bottom{background:var(--bg);padding:28px 40px;text-align:center;}
.footer-bottom-content{display:flex;flex-direction:column;gap:8px;}
.scroll-top{position:fixed;bottom:28px;right:28px;z-index:1000;width:44px;height:44px;border-radius:50%;background:#7c3aed;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(124,58,237,0.4);opacity:0;pointer-events:none;transform:translateY(12px);transition:opacity .3s,transform .3s;}
.scroll-top.visible{opacity:1;pointer-events:auto;transform:translateY(0)}
.scroll-top:hover{background:#6d28d9}
.footer-tagline{font-family:'Product Sans',sans-serif;font-size:15px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--grey);margin:0;}
@media(max-width:768px){
  .footer-bottom{padding:20px 20px}
}
.footer-section{display:flex;flex-direction:column;gap:16px;}
.footer-section h4{font-family:'Product Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--white);margin-bottom:10px;}
.footer-section ul{list-style:none;display:flex;flex-direction:column;gap:12px;}
.footer-section a{font-size:15px;color:var(--grey);text-decoration:none;transition:color .2s;}
.footer-section a:hover{color:#D0FF00;}
.foot-links{display:flex;gap:28px;list-style:none}
.foot-links a{font-size:12.5px;color:var(--grey);text-decoration:none;transition:color .2s}
.foot-links a:hover{color:var(--white)}
@media(max-width:1200px){
  footer{grid-template-columns:1fr 1fr;gap:60px;padding:50px 30px 40px}
}
@media(max-width:768px){
  footer{grid-template-columns:1fr;gap:40px;padding:40px 20px}
}

.reveal{opacity:0;transform:translateY(28px);transition:opacity .65s ease,transform .65s ease}
.reveal.in{opacity:1;transform:translateY(0)}

@media(max-width:860px){
  nav{padding:0 20px}
  .nav-links{display:none}
  .ham-btn{display:flex;flex-direction:column;justify-content:center;align-items:center;width:36px;height:36px;background:none;border:none;cursor:pointer;gap:5px;padding:0}
  .ham,.ham::before,.ham::after{content:'';display:block;width:22px;height:2px;background:var(--white);transition:transform .25s,opacity .25s}
  .ham{position:relative}
  .ham::before{position:absolute;top:-7px}
  .ham::after{position:absolute;top:7px}
  .ham-x{background:transparent}
  .ham-x::before{transform:rotate(45deg);top:0}
  .ham-x::after{transform:rotate(-45deg);top:0}
  .nav-links.nav-open{display:flex;flex-direction:column;position:absolute;top:56px;left:0;right:0;background:#0c0c0c;border-bottom:1px solid var(--border);padding:20px 24px;gap:0;z-index:998}
  .nav-links.nav-open li{border-bottom:1px solid var(--border)}
  .nav-links.nav-open li:last-child{border-bottom:none}
  .nav-links.nav-open a{display:block;padding:14px 0;font-size:16px;color:var(--grey)}
  .hero{min-height:100svh;padding:0;}
  .hero-bottom-content{padding-bottom:30px;}
  .sec,.show-before,.founder,.about,.services,.final-cta{padding:70px 20px}
  .problem-grid,.testi-grid,.about-grid,.founder-grid,.pb-band,.services-intro-grid{grid-template-columns:1fr;gap:36px}
  .proof-grid,.pricing-grid,.before-grid,.show-grid{grid-template-columns:1fr 1fr}
  .pb-band{padding:40px 24px}
  footer{flex-direction:column;gap:18px;text-align:center;padding:24px 20px}
}
@media(max-width:540px){
  .proof-grid,.pricing-grid,.show-grid{grid-template-columns:1fr}
  .before-grid{grid-template-columns:1fr}
  .hero-bottom-content{padding-bottom:20px;}
  .liquid-btn { padding: 14px 28px; font-size: 14px; }
  .cta-big{font-size:28px}
}
`;

const MARQUEE_ITEMS = Array(3).fill(["Branding", "SEO", "Social Media", "Performance", "Influencer", "Production"]).flat();

export default function Figora() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = STYLES;
    document.head.appendChild(styleEl);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

    const counters = document.querySelectorAll(".proof-box .proof-num");
    counters.forEach((el) => {
      if (!el.dataset.original) {
        el.dataset.original = el.textContent.trim();
        const suffixMatch = el.dataset.original.match(/^[0-9]+(.+)$/);
        const suffix = suffixMatch ? suffixMatch[1] : "";
        el.textContent = `0${suffix}`;
      }
    });

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const numEl = entry.target.querySelector(".proof-num");
          if (!numEl || numEl.dataset.animated === "true") return;

          const original = numEl.dataset.original || numEl.textContent.trim();
          const match = original.match(/^(\d+)([^0-9]*)$/);
          if (!match) return;

          const target = Number(match[1]);
          const suffix = match[2];
          const duration = 1400;
          const startTime = performance.now();

          const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const value = Math.floor(target * ease);
            numEl.textContent = `${value}${suffix}`;
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              numEl.textContent = `${target}${suffix}`;
              numEl.dataset.animated = "true";
            }
          };

          requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".proof-box").forEach((box) => countObserver.observe(box));

    setTimeout(() => {
      document.querySelectorAll(".hero .reveal").forEach((el) =>
        el.classList.add("in")
      );
    }, 80);

    return () => {
      document.head.removeChild(styleEl);
      obs.disconnect();
      countObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* ── HEADER ── */}
      <Header />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-video-container">
          <video src={heVid} autoPlay muted loop playsInline />
        </div>
        <div className="hero-bottom-content reveal">
          <a href="#services" className="liquid-btn">
            Get Started
          </a>
        </div>
      </section>

      {/* ── LOGO STRIP ── */}
      <div className="logo-strip">
        <div className="logo-track">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i}>{item}{i % 2 === 0 ? "" : " •"}</span>
          ))}
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={`b${i}`}>{item}{i % 2 === 0 ? "" : " •"}</span>
          ))}
        </div>
      </div>

      {/* ── PROBLEM ── */}
      <section className="sec problem">
        <div className="problem-grid">
          <div className="problem-left reveal">
            <p className="big">
              Social media that<br />looks alive but does<br />
              <span className="green">nothing for<br />the business.</span>
            </p>
          </div>
          <div className="problem-right reveal" style={{ transitionDelay: ".1s" }}>
            <p>Two types of founders come to us…</p>
            <p>The ones who tried doing it themselves — <strong>posted for a while, got inconsistent, got nowhere.</strong></p>
            <p>And the ones who hired an agency — <strong>got a beautiful feed, a detailed report, and zero leads.</strong></p>
            <p>Different stories. Same ending. Social media that looks alive but does nothing for the business.</p>
            <p>That's exactly what Figora exists to fix. Brand strategy, execution, and lead generation — not as three separate things, but as one team. Built to do one thing — <strong>make creative content that sells.</strong></p>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="sec proof">
        <div className="sec-label reveal">What the work has actually produced</div>
        <div className="proof-grid">
          {[
            { num: "10M+", desc: "Views generated for brands", delay: "" },
            { num: "40+", desc: "Campaigns executed", delay: ".08s" },
            { num: "100%", desc: "Lead guarantee", delay: ".16s" },
            { num: "8+", desc: "Brands that now treat social media as a revenue channel", delay: ".24s" },
          ].map(({ num, desc, delay }) => (
            <div className="proof-box reveal" key={num} style={delay ? { transitionDelay: delay } : {}}>
              <div className="proof-num">{num}</div>
              <div className="proof-desc">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="clients" className="sec testi">
        <div className="testi-header reveal">
          <div className="sec-label">Don't take our word for it.</div>
          <div className="dont-line">Don't take our word for it.</div>
          <div className="take-line">Take <span className="green">theirs.</span></div>
        </div>
        <div className="testi-grid">
          {[0, 1].map((i) => (
            <div className="testi-card reveal" key={i} style={i ? { transitionDelay: ".1s" } : {}}>
              <p className="testi-text" style={{ fontStyle: "normal", color: "var(--grey2)" }}>
                [Testimonial to be added — real words from a real client who saw real growth through Figora's work.]
              </p>
              <div className="testi-author">— Client Name &nbsp;·&nbsp; Brand</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SHOW BEFORE WE TELL ── */}
      <section className="sec show-before">
        <div className="show-title reveal">
          We show <span className="green">before</span> we tell.
        </div>
        <div className="show-grid">
          {[
            { src: video1, tag: "Reel · Campaign", delay: "" },
            { src: video2, tag: "Brand Content", delay: ".08s" },
            { src: video3, tag: "Paid Ads", delay: ".16s" },
          ].map(({ src, tag, delay }) => (
            <div className="show-card reveal" key={tag} style={delay ? { transitionDelay: delay } : {}}>
              <video src={src} autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div className="show-card-tag" style={{ position: "relative", zIndex: 1 }}>{tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <Services />

      {/* ── PROCESS ── */}
      <Process />

      {/* ── FOUNDER ── */}
      <section className="sec founder">
        <div className="sec-label reveal">From the founder</div>
        <div className="founder-grid">
          <div className="founder-img reveal">
            <img src={founderImg} alt="Founder" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div className="reveal" style={{ transitionDelay: ".12s" }}>
            <div className="founder-quote">
              "When you lose sleep<br />over your business,<br /><span className="green">so do we."</span>
            </div>
            <p className="founder-bio">
              I started Figora because too many good businesses were being let down by agencies that were great at billing and average at everything else. Every client we take on, we take personally. Your growth isn't a KPI to us. It's the point.
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <About />

      {/* ── FINAL CTA ── */}
      <Contact />

      {/* ── FOOTER ── */}
      <Footer />

      {/* ── SCROLL TO TOP ── */}
      <button
        className={`scroll-top${showTop ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#FEFEFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
