import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const services = [
  {
    icon: '📋', title: 'Annual Maintenance Contract (AMC)', color: '#0e6b1b',
    body: 'Annual Maintenance Contract is used to protect the printer investment along with printer downtime and repair costs. AMC is a contract that provides quality, post-warranty authorised service for printers of brands like Argox, Postek and Citizen thermal transfer barcode printers.',
    points: ['Coverage for original spare parts', 'Print heads and PCB replacement', 'Thermal transfer ribbons & die cut labels', 'Standby printer provision if required', 'Replacement of defective or worn-out parts with new original parts', 'Post-warranty authorized service'],
  },
  {
    icon: '📞', title: 'Technical Support', color: '#1b9e2d',
    body: 'Excellent pre-sales and after-sales technical support & service. Our team is dedicated to ensuring your equipment operates at peak performance from day one and throughout its service life.',
    points: ['Installation of all products', 'Training of operators', 'Repairs, maintenance and cleaning instructions', 'Onsite support during warranty period', 'Free online support through internet', 'Pre-sales technical consultation'],
  },
];

const steps = [
  { step: '01', icon: '🤝', title: 'Consultation', desc: 'We understand your requirements and recommend the best solutions for your specific application and budget.' },
  { step: '02', icon: '📦', title: 'Supply & Install', desc: 'Professional supply and installation of all products with complete setup and configuration included.' },
  { step: '03', icon: '🎓', title: 'Training', desc: 'Comprehensive operator training ensuring your team can use all equipment effectively from day one.' },
  { step: '04', icon: '🔧', title: 'Ongoing Support', desc: 'Continued AMC and technical support throughout the entire lifetime of your equipment.' },
];

const servicebrands = [
  { icon: '🖨️', brand: 'Citizen', desc: 'CL-S621, CL-S631, CL-S700 Series and other Citizen thermal printers.' },
  { icon: '🖨️', brand: 'Postek', desc: 'EM210, C168/200s, G2000 and other Postek barcode printers.' },
  { icon: '🖨️', brand: 'Argox', desc: 'Argox thermal transfer and direct thermal barcode printers.' },
];

export default function Services() {
  useScrollReveal();
  return (
    <div className="page-enter">
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link to="/" className="bc-home">Home</Link>
            <span className="bc-sep">›</span>
            <span className="bc-current">Services</span>
          </div>
          <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>What We Offer</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(46px,7vw,84px)', color: '#fff', marginBottom: 18 }}
            dangerouslySetInnerHTML={{ __html: 'Our <span style="color:#3dd958">Services</span>' }} />
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.82)', maxWidth: 520 }}>
            Stickers & Labels Manufacturing specialists providing complete Auto ID solutions with unmatched after-sales support across South India.
          </p>
        </div>
      </div>

      {/* Main services */}
      <section style={{ padding: '90px 60px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {services.map((s, i) => (
            <div key={s.title} className={`reveal-${i === 0 ? 'left' : 'right'}`} style={{ border: '1px solid #e4e4e2', borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 20px rgba(0,0,0,0.05)', transition: 'transform 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)'; }}>
              <div style={{ background: s.color, padding: '34px 38px' }}>
                <div style={{ fontSize: 42, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 28, fontWeight: 800, textTransform: 'uppercase', color: '#fff', lineHeight: 1.1 }}>{s.title}</h3>
              </div>
              <div style={{ padding: '34px 38px' }}>
                <p style={{ fontSize: 15, color: '#555', lineHeight: 1.82, marginBottom: 26 }}>{s.body}</p>
                <ul style={{ listStyle: 'none' }}>
                  {s.points.map(p => (
                    <li key={p} style={{ fontSize: 14, color: '#333', padding: '10px 0', borderBottom: '1px solid #f4f4f2', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: '#1b9e2d', fontWeight: 800, fontSize: 15, flexShrink: 0, lineHeight: 1.5 }}>✓</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support process */}
      <section style={{ padding: '80px 60px', background: '#f4f4f2' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 54 }}>
            <div className="section-eyebrow reveal">How We Work</div>
            <h2 className="section-title reveal" style={{ fontSize: 'clamp(34px,4vw,54px)' }}>
              Our Support <span style={{ color: '#1b9e2d' }}>Process</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, position: 'relative' }}>
            {/* Connector line */}
            <div style={{ position: 'absolute', top: 58, left: '12%', right: '12%', height: 2, background: 'linear-gradient(90deg, #1b9e2d, #3dd958, #1b9e2d)', opacity: 0.4 }} />
            {steps.map((s, i) => (
              <div key={s.step} className={`reveal delay-${i + 1}`} style={{ background: '#fff', padding: '40px 24px 36px', borderRadius: 10, textAlign: 'center', position: 'relative' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: '#1b9e2d', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24, margin: '0 auto 20px',
                  boxShadow: '0 6px 24px rgba(27,158,45,0.35)',
                  position: 'relative', zIndex: 2,
                }}>{s.icon}</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 800, letterSpacing: '2px', color: '#3dd958', marginBottom: 6 }}>STEP {s.step}</div>
                <h4 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 10 }}>{s.title}</h4>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands we service */}
      <section style={{ padding: '80px 60px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <div className="section-eyebrow reveal" style={{ color: '#3dd958' }}>Coverage</div>
            <h2 className="section-title reveal" style={{ fontSize: 'clamp(34px,4vw,54px)', color: '#fff' }}>
              Brands We <span style={{ color: '#3dd958' }}>Service</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {servicebrands.map((b, i) => (
              <div key={b.brand} className={`reveal delay-${i + 1}`} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '32px', transition: 'background 0.3s, border-color 0.3s, transform 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(27,158,45,0.14)'; e.currentTarget.style.borderColor = 'rgba(27,158,45,0.5)'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ fontSize: 38, marginBottom: 16 }}>{b.icon}</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 26, fontWeight: 800, textTransform: 'uppercase', color: '#3dd958', marginBottom: 10 }}>{b.brand}</div>
                <p style={{ fontSize: 14, color: '#888', lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 60px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title reveal" style={{ fontSize: 'clamp(34px,4vw,54px)', marginBottom: 16 }}>
            Need <span style={{ color: '#1b9e2d' }}>Service Support?</span>
          </h2>
          <p className="reveal section-sub" style={{ maxWidth: 460, margin: '0 auto 36px' }}>Contact us today to discuss AMC or technical support for your barcode equipment.</p>
          <div className="reveal" style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
            <Link to="/contact"><button className="btn-green" style={{ padding: '13px 32px' }}>Contact Us</button></Link>
            <Link to="/printers"><button className="btn-outline">View Printers</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
