import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

import barcodeImg    from '../assets/images/barcode_plain.jpg';
import holographicImg from '../assets/images/holographic.jpg';
import jewelryImg    from '../assets/images/jewelry.jpg';
import ribbonImg     from '../assets/images/ribbon.jpg';

/* Animated counter */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const steps = 60;
        const inc = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + inc, target);
          setCount(Math.floor(current));
          if (current >= target) clearInterval(timer);
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  useScrollReveal();

  const featured = [
    { img: barcodeImg,     name: 'Barcode Stickers',       tag: 'Auto ID',     to: '/products' },
    { img: holographicImg, name: 'Holographic Labels',      tag: 'Premium',     to: '/products' },
    { img: jewelryImg,     name: 'Jewelry Labels',          tag: 'Precision',   to: '/products' },
    { img: ribbonImg,      name: 'Thermal Transfer Ribbon', tag: 'Consumables', to: '/products' },
  ];

  const industries = [
    ['👗', 'Garments'], ['🍺', 'Breweries'], ['💄', 'Cosmetics'],
    ['🍽️', 'Food & Bev'], ['💊', 'Pharma'], ['🚗', 'Automotive'],
    ['🏭', 'Manufacturing'], ['🛒', 'Retail'],
  ];

  return (
    <div className="page-enter">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
        marginTop: 82, minHeight: '93vh',
        background: 'linear-gradient(135deg, #04200a 0%, #083d10 22%, #0e6b1b 52%, #1b9e2d 75%, #2ec94a 100%)',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Animated barcode overlay */}
        <div className="barcode-bg" style={{ position: 'absolute', inset: 0 }} />

        {/* Floating rings */}
        <div style={{ position: 'absolute', right: '-4%', top: '50%', transform: 'translateY(-50%)', width: 720, height: 720, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.07)', animation: 'float 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', right: '4%', top: '50%', transform: 'translateY(-50%)', width: 500, height: 500, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', animation: 'float 6s ease-in-out infinite 1s' }} />
        <div style={{ position: 'absolute', right: '12%', top: '50%', transform: 'translateY(-50%)', width: 300, height: 300, borderRadius: '50%', background: 'rgba(61,217,88,0.06)', animation: 'float 5s ease-in-out infinite 0.5s' }} />

        {/* Pulse dot */}
        <div style={{ position: 'absolute', top: '18%', right: '22%' }}>
          <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#3dd958', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -6, borderRadius: '50%', border: '2px solid #3dd958', animation: 'pulse-ring 2s ease-out infinite' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '28%', right: '35%' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.5)', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -5, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', animation: 'pulse-ring 2.5s ease-out infinite 0.8s' }} />
          </div>
        </div>

        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '90px 60px', width: '100%', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: 720 }}>

            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 32, padding: '8px 22px', marginBottom: 32,
              animation: 'fadeUp 0.6s ease both',
              backdropFilter: 'blur(8px)',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3dd958', display: 'inline-block', boxShadow: '0 0 8px #3dd958' }} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.92)' }}>
                Tiruppur Leading Label Manufacturer
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(60px, 9vw, 108px)',
              fontWeight: 900, lineHeight: 0.88,
              color: '#fff', textTransform: 'uppercase',
              letterSpacing: '-2px', marginBottom: 30,
              animation: 'fadeUp 0.7s 0.1s ease both',
            }}>
              Precision<br />
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>Labels &</span><br />
              Auto ID<br />
              <span style={{
                color: '#3dd958',
                textShadow: '0 0 40px rgba(61,217,88,0.4)',
              }}>Solutions</span>
            </h1>

            <p style={{
              fontSize: 19, fontWeight: 300, lineHeight: 1.8,
              color: 'rgba(255,255,255,0.82)', maxWidth: 520, marginBottom: 48,
              animation: 'fadeUp 0.7s 0.2s ease both',
            }}>
              Manufacturing superior quality barcode labels, multicolor stickers, hot foil & self-adhesive labels for garment, pharma, food & beverage, and automobile industries.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', animation: 'fadeUp 0.7s 0.3s ease both' }}>
              <Link to="/products"><button className="btn-white">Explore Products</button></Link>
              <Link to="/contact"><button className="btn-ghost-white">Get a Free Quote →</button></Link>
            </div>
          </div>
        </div>

        {/* Stats ribbon */}
        <div style={{ position: 'absolute', bottom: 0, right: 0, display: 'flex', animation: 'fadeIn 1s 0.5s ease both' }}>
          {[['10+', 'Years Experience'], ['6+', 'Industries'], ['100%', 'Customer Focus']].map(([n, l]) => (
            <div key={l} style={{
              background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(10px)',
              borderLeft: '1px solid rgba(255,255,255,0.07)',
              padding: '28px 48px', textAlign: 'center',
            }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 50, fontWeight: 900, color: '#fff', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 11, letterSpacing: '2px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────────── */}
      <section style={{ padding: '90px 60px', background: '#fff' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 88, alignItems: 'center' }}>
          <div className="reveal-left">
            <div className="section-eyebrow">Who We Are</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(38px,4vw,60px)', marginBottom: 22 }}>
              South India's Premier<br /><span style={{ color: '#1b9e2d' }}>Auto ID Partner</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.88, color: '#555', marginBottom: 16 }}>
              LABEL PARK is one of the leading manufacturers and exporters of barcode labels, multicolor labels, hot foil stickers, and self-adhesive labels. Incorporated in Tiruppur, we are the leading <strong>Retail & Auto ID Solution</strong> provider in South India.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.88, color: '#555', marginBottom: 36 }}>
              For over a decade, we listen closely to our customers and partners to provide the most cost-effective solutions — from custom labels to printers, scanners and ribbons.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/about"><button className="btn-green">Learn About Us</button></Link>
              <Link to="/contact"><button className="btn-outline">Contact Us</button></Link>
            </div>
          </div>

          <div className="reveal-right" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { icon: '🏆', title: '10+ Years Excellence', desc: 'A decade of superior quality labels for South India.' },
              { icon: '⚙️', title: 'Total Solution', desc: 'Labels, printers, scanners & ribbons — one roof.' },
              { icon: '💰', title: 'Best Pricing', desc: 'Maximum efficiency, competitive prices for you.' },
              { icon: '🤝', title: 'Customer First', desc: 'Your success is our vision — every single order.' },
            ].map((f, i) => (
              <div key={f.title} className={`reveal delay-${i + 1}`} style={{
                background: '#f4f4f2', borderRadius: 10, padding: '24px 20px',
                borderLeft: '4px solid #1b9e2d', cursor: 'default',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.09)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
                <h4 style={{ fontWeight: 700, fontSize: 14, color: '#111', marginBottom: 6 }}>{f.title}</h4>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────── */}
      <section style={{ padding: '80px 60px', background: '#f4f4f2' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 50 }}>
            <div className="reveal">
              <div className="section-eyebrow">What We Make</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(36px,4vw,56px)' }}>
                Featured <span style={{ color: '#1b9e2d' }}>Products</span>
              </h2>
            </div>
            <Link to="/products" className="reveal" style={{ display: 'inline-block' }}>
              <button className="btn-outline">View All Products →</button>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 }}>
            {featured.map((p, i) => (
              <Link key={p.name} to={p.to} className={`card reveal delay-${i + 1}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ height: 200, overflow: 'hidden', background: '#e0e0de', position: 'relative' }}>
                  <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }} />
                </div>
                <div style={{ padding: '18px 20px 22px' }}>
                  <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#0e6b1b', background: '#e6f7e8', padding: '3px 10px', borderRadius: 20 }}>{p.tag}</span>
                  <h3 style={{ marginTop: 9, fontWeight: 700, fontSize: 16, color: '#0a0a0a' }}>{p.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE STATS ───────────────────────────────────────── */}
      <section style={{ padding: '80px 60px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
          {[
            { num: 10, suffix: '+', label: 'Years in Business' },
            { num: 8,  suffix: '+', label: 'Product Categories' },
            { num: 6,  suffix: '+', label: 'Industries Served' },
            { num: 100, suffix: '%', label: 'Customer Satisfaction' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center', padding: '44px 30px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 4 }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 64, fontWeight: 900, color: '#3dd958', lineHeight: 1 }}>
                <Counter target={s.num} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 12, letterSpacing: '2px', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', marginTop: 10 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────── */}
      <section style={{ padding: '80px 60px', background: '#f4f4f2' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <div className="section-eyebrow reveal">Industries We Serve</div>
            <h2 className="section-title reveal" style={{ fontSize: 'clamp(36px,4vw,56px)' }}>
              Our Labels Work <span style={{ color: '#1b9e2d' }}>Everywhere</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 3 }} className="reveal">
            {industries.map(([icon, label]) => (
              <div key={label} className="industry-item">
                <div style={{ fontSize: 32, marginBottom: 10 }}>{icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: '#fff' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section style={{ padding: '80px 60px', background: '#fff' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>
          <div className="reveal" style={{
            background: 'linear-gradient(135deg, #0e6b1b 0%, #1b9e2d 60%, #2ec94a 100%)',
            borderRadius: 18, padding: '64px 72px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 32, position: 'relative', overflow: 'hidden',
          }}>
            <div className="barcode-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(34px,4vw,56px)', fontWeight: 900, textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, marginBottom: 12 }}>
                Ready to Order<br />Custom Labels?
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.82)', fontWeight: 300 }}>
                Get in touch for a free quote tailored to your exact requirements.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 14, position: 'relative', zIndex: 2, flexWrap: 'wrap' }}>
              <Link to="/contact"><button className="btn-white">Get a Free Quote</button></Link>
              <Link to="/products"><button className="btn-ghost-white">View Products</button></Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
