import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const advantages = [
  { icon: '🏭', title: 'Superior Manufacturing', desc: 'State-of-the-art manufacturing processes ensuring every label meets the highest quality standards specific to your requirements.' },
  { icon: '🎯', title: 'Custom Solutions', desc: 'All labels manufactured in custom sizes, shapes, and configurations. We listen closely to create exactly what you need.' },
  { icon: '💰', title: 'Competitive Pricing', desc: 'Maximum production efficiency means we deliver premium quality at prices that keep your business competitive.' },
  { icon: '🔧', title: 'Full-Service Support', desc: 'From pre-sales consultation to AMC and technical support — we\'re with you for the entire lifecycle.' },
  { icon: '🚀', title: 'Fast Turnaround', desc: 'Efficient production processes ensure accurate fulfilment and timely delivery for every order size.' },
  { icon: '🌍', title: 'Export Ready', desc: 'One of the leading exporters of labels — quality and compliance standards that meet international requirements.' },
];

const industries = [
  { icon: '👗', title: 'Garment Industry', desc: 'Wash care labels, price tags, barcode stickers for every garment application.' },
  { icon: '🍺', title: 'Breweries', desc: 'Premium waterproof labels for bottles, cans and packaging.' },
  { icon: '💄', title: 'Cosmetics', desc: 'Elegant, durable labels for creams, serums, and beauty products.' },
  { icon: '🍽️', title: 'Food & Beverages', desc: 'Food-safe labels meeting all regulatory and packaging requirements.' },
  { icon: '💊', title: 'Pharmaceuticals', desc: 'Precision labels compliant with pharma standards for vials and packaging.' },
  { icon: '🚗', title: 'Automobile', desc: 'High-durability labels for parts identification and tracking.' },
  { icon: '🏭', title: 'Manufacturing', desc: 'Barcode and tracking labels for industrial and warehouse use.' },
  { icon: '🛒', title: 'Retail', desc: 'Retail-ready price tags, promotional stickers and barcode labels.' },
];

export default function About() {
  useScrollReveal();

  return (
    <div className="page-enter">
      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link to="/" className="bc-home">Home</Link>
            <span className="bc-sep">›</span>
            <span className="bc-current">About</span>
          </div>
          <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Company Profile</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(46px,7vw,84px)', color: '#fff', marginBottom: 18 }}
            dangerouslySetInnerHTML={{ __html: 'About <span style="color:#3dd958">Label Park</span>' }} />
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.82)', maxWidth: 540 }}>
            South India's leading manufacturer and exporter of barcode labels, multicolor stickers, and Auto ID solutions — based in Tiruppur, Tamil Nadu.
          </p>
        </div>
      </div>

      {/* Story */}
      <section style={{ padding: '96px 60px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 84, alignItems: 'center' }}>
          <div className="reveal-left">
            <div className="section-eyebrow">Our Story</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(36px,3.5vw,54px)', marginBottom: 26 }}>
              Who We <span style={{ color: '#1b9e2d' }}>Are</span>
            </h2>
            {[
              'LABEL PARK is one of the leading manufacturers and exporters of bar code Labels, multicolor labels, Hot foil stickers, self-adhesive labels for all applications including garment industry, breweries, cosmetics, food & beverages, pharmaceuticals and automobile industry.',
              'Since its inception, the company\'s prime focus is to manufacture superior quality products as per specific customer requirements. For the past ten years, we manufacture high-quality labels and stickers for customers from different industries.',
              'We listen closely to the needs of our customers and partners, which enables us to provide the most cost-effective solution for every job. We maximize our production efficiency, bringing down our operational costs and giving the benefit to customers.',
              'We are also distributors and service providers of printing equipment including industrial barcode printers, commercial printers, receipt printers, hands-free wireless scanners and thermal transfer ribbons.',
            ].map((p, i) => (
              <p key={i} style={{ fontSize: 16, lineHeight: 1.88, color: '#555', marginBottom: 16 }}>{p}</p>
            ))}
          </div>

          <div className="reveal-right">
            <div style={{
              background: 'linear-gradient(135deg, #0e6b1b, #1b9e2d)',
              borderRadius: 14, padding: '52px 46px',
              color: '#fff', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -50, right: -50, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
              <div style={{ position: 'absolute', bottom: -30, left: -30, width: 160, height: 160, borderRadius: '50%', background: 'rgba(0,0,0,0.08)' }} />
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 100, fontWeight: 900, color: 'rgba(255,255,255,0.1)', lineHeight: 1, marginBottom: -30, position: 'relative' }}>❝</div>
              <blockquote style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 38, fontWeight: 800, lineHeight: 1.15, marginBottom: 24, position: 'relative' }}>
                Your Success Is<br />Our Vision
              </blockquote>
              <p style={{ fontSize: 15, lineHeight: 1.8, opacity: 0.88, position: 'relative' }}>
                We are proud of our reputation for putting the customer first in every area of our operations. This attitude is one of the most important contributors to our success and the success of the customers we serve.
              </p>
              <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.2)', display: 'flex', gap: 44, position: 'relative' }}>
                {[['10+', 'Years'], ['6+', 'Industries'], ['100%', 'Quality']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 40, fontWeight: 900 }}>{n}</div>
                    <div style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', opacity: 0.7 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section style={{ padding: '80px 60px', background: '#f4f4f2' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 54 }}>
            <div className="section-eyebrow reveal">Why Choose Us</div>
            <h2 className="section-title reveal" style={{ fontSize: 'clamp(34px,4vw,56px)' }}>
              The Label Park <span style={{ color: '#1b9e2d' }}>Advantage</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {advantages.map((f, i) => (
              <div key={f.title} className={`reveal delay-${(i % 3) + 1}`} style={{
                background: '#fff', borderRadius: 12, padding: '34px 30px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                borderTop: '4px solid transparent',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.11)'; e.currentTarget.style.borderTopColor = '#1b9e2d'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)'; e.currentTarget.style.borderTopColor = 'transparent'; }}>
                <div style={{ fontSize: 38, marginBottom: 18 }}>{f.icon}</div>
                <h4 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 10 }}>{f.title}</h4>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.72 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ padding: '80px 60px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <div className="section-eyebrow reveal">Our Reach</div>
            <h2 className="section-title reveal" style={{ fontSize: 'clamp(34px,4vw,56px)' }}>
              Industries <span style={{ color: '#1b9e2d' }}>We Serve</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
            {industries.map((ind, i) => (
              <div key={ind.title} className={`reveal delay-${(i % 4) + 1}`} style={{ border: '1px solid #e4e4e2', borderRadius: 10, padding: '28px 22px', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#1b9e2d'; e.currentTarget.style.background = '#f0fdf2'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e4e4e2'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ fontSize: 34, marginBottom: 12 }}>{ind.icon}</div>
                <h4 style={{ fontWeight: 700, fontSize: 15, color: '#0a0a0a', marginBottom: 8 }}>{ind.title}</h4>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 60px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title reveal" style={{ fontSize: 'clamp(34px,4vw,54px)', color: '#fff', marginBottom: 16 }}>
            Ready to Work <span style={{ color: '#3dd958' }}>Together?</span>
          </h2>
          <p className="reveal" style={{ fontSize: 17, color: '#888', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
            Get in touch for a free quote tailored to your exact requirements.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact"><button className="btn-green" style={{ padding: '13px 32px' }}>Get a Free Quote</button></Link>
            <Link to="/products"><button className="btn-outline" style={{ borderColor: '#444', color: '#aaa' }}>View Our Products</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
