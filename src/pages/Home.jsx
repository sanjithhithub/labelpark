import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import barcodeImg     from '../assets/images/barcode_plain.jpg';
import holographicImg from '../assets/images/holographic.jpg';
import jewelryImg     from '../assets/images/jewelry.jpg';
import ribbonImg      from '../assets/images/ribbon.jpg';

function Counter({ target, suffix='' }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const steps=60, dur=1800, inc=target/steps;
        let cur=0;
        const t = setInterval(() => { cur=Math.min(cur+inc,target); setN(Math.floor(cur)); if(cur>=target)clearInterval(t); }, dur/steps);
      }
    }, { threshold:0.5 });
    if(ref.current) obs.observe(ref.current);
    return ()=>obs.disconnect();
  }, [target]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function Home() {
  useScrollReveal();

  const featured = [
    { img:barcodeImg,     name:'Barcode Stickers',       tag:'Auto ID'     },
    { img:holographicImg, name:'Holographic Labels',      tag:'Premium'     },
    { img:jewelryImg,     name:'Jewelry Labels',          tag:'Precision'   },
    { img:ribbonImg,      name:'Thermal Ribbon',          tag:'Consumables' },
  ];

  const industries = [['👗','Garments'],['🍺','Breweries'],['💄','Cosmetics'],['🍽️','Food & Bev'],['💊','Pharma'],['🚗','Automotive'],['🏭','Mfg.'],['🛒','Retail']];

  return (
    <div className="page-enter">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{
        marginTop:'var(--nav-h,82px)', minHeight:'92vh',
        background:'linear-gradient(135deg,#04200a 0%,#083d10 22%,#0e6b1b 52%,#1b9e2d 75%,#2ec94a 100%)',
        display:'flex', flexDirection:'column', alignItems:'stretch',
        position:'relative', overflow:'hidden',
      }}>
        <div className="barcode-bg" style={{ position:'absolute', inset:0 }} />
        <div style={{ position:'absolute', right:'-4%', top:'50%', transform:'translateY(-50%)', width:'clamp(260px,50vw,720px)', height:'clamp(260px,50vw,720px)', borderRadius:'50%', border:'1px solid rgba(255,255,255,0.07)', animation:'float 8s ease-in-out infinite' }} />
        <div style={{ position:'absolute', right:'4%',  top:'50%', transform:'translateY(-50%)', width:'clamp(160px,36vw,500px)', height:'clamp(160px,36vw,500px)', borderRadius:'50%', border:'1px solid rgba(255,255,255,0.10)', animation:'float 6s ease-in-out infinite 1s' }} />

        <div style={{ maxWidth:1360, margin:'0 auto', padding:'clamp(60px,10vw,100px) var(--pad-x,40px)', width:'100%', position:'relative', zIndex:2, flex:1 }}>
          <div style={{ maxWidth:'min(720px, 100%)' }}>
            {/* Badge */}
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.25)', borderRadius:32, padding:'8px 20px', marginBottom:26, backdropFilter:'blur(8px)' }}>
              <span style={{ width:8, height:8, borderRadius:'50%', background:'#3dd958', display:'inline-block', boxShadow:'0 0 8px #3dd958' }} />
              <span style={{ fontSize:'clamp(10px,1.2vw,12px)', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:'rgba(255, 255, 255, 0.9)' }}>Tiruppur Leading Label Manufacturer</span>
            </div>

            <h1 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(48px,9vw,108px)', fontWeight:900, lineHeight:.9, color:'#ffffff', textTransform:'uppercase', letterSpacing:'-2px', marginBottom:22, animation:'fadeUp .7s ease both' }}>
              Precision<br />
              <span style={{ color:'rgba(255,255,255,0.3)' }}>Labels &</span><br />
              Auto ID<br />
              <span style={{ color:'#3dd958', textShadow:'0 0 40px rgba(61,217,88,0.4)' }}>Solutions</span>
            </h1>

            <p style={{ fontSize:'clamp(14px,1.8vw,18px)', fontWeight:300, lineHeight:1.8, color:'rgba(255,255,255,0.84)', maxWidth:500, marginBottom:38, animation:'fadeUp .7s .15s ease both' }}>
              Manufacturing superior quality barcode labels, multicolor stickers, hot foil & self-adhesive labels for garment, pharma, food & beverage, and automobile industries.
            </p>

            <div className="hero-btns" style={{ display:'flex', gap:14, flexWrap:'wrap', animation:'fadeUp .7s .25s ease both' }}>
              <Link to="/products"><button className="btn-white">Explore Products</button></Link>
              <Link to="/contact"><button className="btn-ghost-white">Get a Free Quote →</button></Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero-stats-bar" style={{ position:'absolute', bottom:0, right:0, display:'flex' }}>
          {[['10+','Years Experience'],['6+','Industries'],['100%','Customer Focus']].map(([n,l]) => (
            <div key={l} style={{ background:'rgba(0,0,0,0.35)', backdropFilter:'blur(10px)', borderLeft:'1px solid rgba(255,255,255,0.07)', padding:'clamp(14px,3vw,28px) clamp(18px,4vw,48px)', textAlign:'center' }}>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(28px,4vw,50px)', fontWeight:900, color:'#fff', lineHeight:1 }}>{n}</div>
              <div style={{ fontSize:'clamp(9px,1vw,11px)', letterSpacing:'2px', color:'rgba(255,255,255,0.6)', textTransform:'uppercase', marginTop:5 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT STRIP ─────────────────────────────────── */}
      <section className="lp-section" style={{ background:'#fff' }}>
        <div className="lp-container">
          <div className="lp-grid-2" style={{ alignItems:'center' }}>
            <div className="reveal-left">
              <div className="section-eyebrow">Who We Are</div>
              <h2 className="section-title" style={{ fontSize:'clamp(28px,4vw,60px)', marginBottom:18 }}>
                South India's Premier<br /><span style={{ color:'#1b9e2d' }}>Auto ID Partner</span>
              </h2>
              <p style={{ fontSize:'clamp(14px,1.5vw,16px)', lineHeight:1.88, color:'#555', marginBottom:14 }}>
                LABEL PARK is one of the leading manufacturers and exporters of barcode labels, multicolor labels, hot foil stickers, and self-adhesive labels. Incorporated in Chennai, we are the leading <strong>Retail & Auto ID Solution</strong> provider in South India.
              </p>
              <p style={{ fontSize:'clamp(14px,1.5vw,16px)', lineHeight:1.88, color:'#555', marginBottom:30 }}>
                For over a decade, we listen closely to our customers to provide the most cost-effective solutions — from custom labels to printers, scanners and ribbons.
              </p>
              <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                <Link to="/about"><button className="btn-green">Learn About Us</button></Link>
                <Link to="/contact"><button className="btn-outline">Contact Us</button></Link>
              </div>
            </div>

            <div className="advantages-grid reveal-right" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
              {[
                { icon:'🏆', title:'10+ Years Excellence', desc:'A decade of superior quality labels for South India.' },
                { icon:'⚙️', title:'Total Solution',       desc:'Labels, printers, scanners & ribbons — one roof.' },
                { icon:'💰', title:'Best Pricing',         desc:'Maximum efficiency, competitive prices for you.' },
                { icon:'🤝', title:'Customer First',       desc:'Your success is our vision — every single order.' },
              ].map((f,i) => (
                <div key={f.title} className={`reveal delay-${i+1}`} style={{ background:'#f4f4f2', borderRadius:10, padding:'clamp(14px,2vw,22px) clamp(12px,1.5vw,18px)', borderLeft:'4px solid #1b9e2d', transition:'transform .3s,box-shadow .3s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(0,0,0,0.09)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}>
                  <div style={{ fontSize:'clamp(22px,2.5vw,28px)', marginBottom:8 }}>{f.icon}</div>
                  <h4 style={{ fontWeight:700, fontSize:'clamp(12px,1.2vw,14px)', color:'#111', marginBottom:5 }}>{f.title}</h4>
                  <p style={{ fontSize:'clamp(11px,1vw,13px)', color:'#666', lineHeight:1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ─────────────────────────── */}
      <section className="lp-section" style={{ background:'#f4f4f2' }}>
        <div className="lp-container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:38, flexWrap:'wrap', gap:14 }}>
            <div className="reveal">
              <div className="section-eyebrow">What We Make</div>
              <h2 className="section-title" style={{ fontSize:'clamp(26px,4vw,56px)' }}>Featured <span style={{ color:'#1b9e2d' }}>Products</span></h2>
            </div>
            <Link to="/products" className="reveal"><button className="btn-outline">View All →</button></Link>
          </div>
          <div className="lp-grid-4">
            {featured.map((p,i) => (
              <Link key={p.name} to="/products" className={`card reveal delay-${i+1}`} style={{ display:'block', color:'inherit' }}>
                <div style={{ height:'clamp(130px,16vw,200px)', overflow:'hidden', background:'#e0e0de' }}>
                  <img src={p.img} alt={p.name} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .5s ease' }}
                    onMouseEnter={e=>e.target.style.transform='scale(1.08)'}
                    onMouseLeave={e=>e.target.style.transform='scale(1)'} />
                </div>
                <div style={{ padding:'clamp(10px,1.5vw,18px) clamp(12px,1.5vw,20px) clamp(12px,1.5vw,22px)' }}>
                  <span style={{ fontSize:10, fontWeight:800, letterSpacing:'1px', textTransform:'uppercase', color:'#0e6b1b', background:'#e6f7e8', padding:'3px 10px', borderRadius:20 }}>{p.tag}</span>
                  <h3 style={{ marginTop:8, fontWeight:700, fontSize:'clamp(13px,1.4vw,16px)', color:'#0a0a0a' }}>{p.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────── */}
      <section className="lp-section" style={{ background:'#0a0a0a', paddingTop:'clamp(36px,6vw,64px)', paddingBottom:'clamp(36px,6vw,64px)' }}>
        <div className="lp-container">
          <div className="lp-grid-4" style={{ gap:2 }}>
            {[{ n:10,s:'+',l:'Years in Business' },{ n:8,s:'+',l:'Product Categories' },{ n:6,s:'+',l:'Industries Served' },{ n:100,s:'%',l:'Customer Satisfaction' }].map(s => (
              <div key={s.l} style={{ textAlign:'center', padding:'clamp(24px,4vw,44px) 16px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)', borderRadius:4 }}>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(36px,6vw,64px)', fontWeight:900, color:'#3dd958', lineHeight:1 }}>
                  <Counter target={s.n} suffix={s.s} />
                </div>
                <div style={{ fontSize:'clamp(9px,1vw,12px)', letterSpacing:'2px', color:'rgba(255,255,255,0.55)', textTransform:'uppercase', marginTop:8 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────── */}
      <section className="lp-section" style={{ background:'#f4f4f2' }}>
        <div className="lp-container">
          <div style={{ textAlign:'center', marginBottom:40 }}>
            <div className="section-eyebrow reveal">Industries We Serve</div>
            <h2 className="section-title reveal" style={{ fontSize:'clamp(26px,4vw,56px)' }}>Our Labels Work <span style={{ color:'#1b9e2d' }}>Everywhere</span></h2>
          </div>
          <div className="lp-grid-8">
            {industries.map(([icon,label]) => (
              <div key={label} className="industry-item">
                <div style={{ fontSize:'clamp(22px,3vw,32px)', marginBottom:8 }}>{icon}</div>
                <div style={{ fontSize:'clamp(9px,1vw,11px)', fontWeight:700, letterSpacing:'.5px', textTransform:'uppercase', color:'#000000' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────── */}
      <section className="lp-section" style={{ background:'#fff' }}>
        <div className="lp-container">
          <div className="reveal cta-flex" style={{ background:'linear-gradient(135deg,#0e6b1b 0%,#1b9e2d 60%,#2ec94a 100%)', borderRadius:18, padding:'clamp(32px,5vw,64px) clamp(24px,5vw,72px)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:28, position:'relative', overflow:'hidden' }}>
            <div className="barcode-bg" style={{ position:'absolute', inset:0, opacity:.5 }} />
            <div style={{ position:'relative', zIndex:2 }}>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(26px,4vw,56px)', fontWeight:900, textTransform:'uppercase', color:'#fff', lineHeight:1.05, marginBottom:10 }}>
                Ready to Order<br />Custom Labels?
              </h2>
              <p style={{ fontSize:'clamp(14px,1.5vw,17px)', color:'rgba(255,255,255,0.82)', fontWeight:300 }}>Get in touch for a free quote tailored to your requirements.</p>
            </div>
            <div className="cta-btns" style={{ display:'flex', gap:14, position:'relative', zIndex:2, flexWrap:'wrap' }}>
              <Link to="/contact"><button className="btn-white">Get a Free Quote</button></Link>
              <Link to="/products"><button className="btn-ghost-white">View Products</button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
