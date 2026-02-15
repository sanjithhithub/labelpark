import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const advantages = [
  { icon:'🏭', title:'Superior Manufacturing', desc:'State-of-the-art manufacturing processes ensuring every label meets the highest quality standards specific to your requirements.' },
  { icon:'🎯', title:'Custom Solutions', desc:'All labels manufactured in custom sizes, shapes, and configurations. We listen closely to create exactly what you need.' },
  { icon:'💰', title:'Competitive Pricing', desc:'Maximum production efficiency means we deliver premium quality at prices that keep your business competitive.' },
  { icon:'🔧', title:'Full-Service Support', desc:"From pre-sales consultation to AMC and technical support — we're with you for the entire lifecycle." },
  { icon:'🚀', title:'Fast Turnaround', desc:'Efficient production processes ensure accurate fulfilment and timely delivery for every order size.' },
  { icon:'🌍', title:'Export Ready', desc:'One of the leading exporters of labels — quality and compliance standards that meet international requirements.' },
];

const industries = [
  { icon:'👗', title:'Garment Industry',   desc:'Wash care labels, price tags, barcode stickers for every garment application.' },
  { icon:'🍺', title:'Breweries',          desc:'Premium waterproof labels for bottles, cans and packaging.' },
  { icon:'💄', title:'Cosmetics',          desc:'Elegant, durable labels for creams, serums, and beauty products.' },
  { icon:'🍽️', title:'Food & Beverages',  desc:'Food-safe labels meeting all regulatory and packaging requirements.' },
  { icon:'💊', title:'Pharmaceuticals',    desc:'Precision labels compliant with pharma standards for vials and packaging.' },
  { icon:'🚗', title:'Automobile',         desc:'High-durability labels for parts identification and tracking.' },
  { icon:'🏭', title:'Manufacturing',      desc:'Barcode and tracking labels for industrial and warehouse use.' },
  { icon:'🛒', title:'Retail',             desc:'Retail-ready price tags, promotional stickers and barcode labels.' },
];

export default function About() {
  useScrollReveal();
  return (
    <div className="page-enter">
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link to="/" className="bc-home">Home</Link>
            <span className="bc-sep">›</span>
            <span className="bc-current">About</span>
          </div>
          <div className="section-eyebrow" style={{ color:'rgba(255,255,255,0.6)' }}>Company Profile</div>
          <h1 className="section-title" style={{ fontSize:'clamp(38px,7vw,84px)', color:'#fff', marginBottom:16 }}
            dangerouslySetInnerHTML={{ __html:'About <span style="color:#3dd958">Label Park</span>' }} />
          <p className="section-sub" style={{ color:'rgba(255,255,255,0.82)', maxWidth:540 }}>
            South India's leading manufacturer and exporter of barcode labels, multicolor stickers, and Auto ID solutions — based in Tiruppur, Tamil Nadu.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="lp-section" style={{ background:'#fff' }}>
        <div className="lp-container">
          <div className="lp-grid-2" style={{ alignItems:'center' }}>
            <div className="reveal-left">
              <div className="section-eyebrow">Our Story</div>
              <h2 className="section-title" style={{ fontSize:'clamp(28px,3.5vw,54px)', marginBottom:22 }}>
                Who We <span style={{ color:'#1b9e2d' }}>Are</span>
              </h2>
              {[
                'LABEL PARK is one of the leading manufacturers and exporters of bar code Labels, multicolor labels, Hot foil stickers, self-adhesive labels for all applications including garment industry, breweries, cosmetics, food & beverages, pharmaceuticals and automobile industry.',
                "Since its inception, the company's prime focus is to manufacture superior quality products as per specific customer requirements. For the past ten years, we manufacture high-quality labels and stickers for customers from different industries.",
                'We listen closely to the needs of our customers and partners, which enables us to provide the most cost-effective solution for every job. We maximize our production efficiency, bringing down our operational costs and giving the benefit to customers.',
                'We are also distributors and service providers of printing equipment including industrial barcode printers, commercial printers, receipt printers, hands-free wireless scanners and thermal transfer ribbons.',
              ].map((p,i) => (
                <p key={i} style={{ fontSize:'clamp(14px,1.4vw,16px)', lineHeight:1.88, color:'#555', marginBottom:14 }}>{p}</p>
              ))}
            </div>

            <div className="reveal-right">
              <div style={{ background:'linear-gradient(135deg,#0e6b1b,#1b9e2d)', borderRadius:14, padding:'clamp(32px,5vw,52px) clamp(24px,4vw,46px)', color:'#fff', position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', top:-50, right:-50, width:240, height:240, borderRadius:'50%', background:'rgba(255,255,255,0.06)' }} />
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(60px,8vw,100px)', fontWeight:900, color:'rgba(255,255,255,0.1)', lineHeight:1, marginBottom:-20, position:'relative' }}>❝</div>
                <blockquote style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(26px,3.5vw,38px)', fontWeight:800, lineHeight:1.15, marginBottom:20, position:'relative' }}>
                  Your Success Is<br />Our Vision
                </blockquote>
                <p style={{ fontSize:'clamp(13px,1.4vw,15px)', lineHeight:1.8, opacity:.88, position:'relative' }}>
                  We are proud of our reputation for putting the customer first in every area of our operations. This attitude is one of the most important contributors to our success.
                </p>
                <div style={{ marginTop:28, paddingTop:20, borderTop:'1px solid rgba(255,255,255,0.2)', display:'flex', gap:'clamp(20px,4vw,44px)', position:'relative' }}>
                  {[['10+','Years'],['6+','Industries'],['100%','Quality']].map(([n,l]) => (
                    <div key={l}>
                      <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(28px,3.5vw,40px)', fontWeight:900 }}>{n}</div>
                      <div style={{ fontSize:11, letterSpacing:'1.5px', textTransform:'uppercase', opacity:.7 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="lp-section" style={{ background:'#f4f4f2' }}>
        <div className="lp-container">
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <div className="section-eyebrow reveal">Why Choose Us</div>
            <h2 className="section-title reveal" style={{ fontSize:'clamp(26px,4vw,56px)' }}>The Label Park <span style={{ color:'#1b9e2d' }}>Advantage</span></h2>
          </div>
          <div className="advantages-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'clamp(14px,2vw,24px)' }}>
            {advantages.map((f,i) => (
              <div key={f.title} className={`reveal delay-${(i%3)+1}`}
                style={{ background:'#fff', borderRadius:12, padding:'clamp(20px,3vw,34px) clamp(16px,2.5vw,30px)', boxShadow:'0 2px 16px rgba(0,0,0,0.05)', transition:'transform .3s,box-shadow .3s,border-top-color .3s', borderTop:'4px solid transparent' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 16px 48px rgba(0,0,0,0.11)'; e.currentTarget.style.borderTopColor='#1b9e2d'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; e.currentTarget.style.borderTopColor='transparent'; }}>
                <div style={{ fontSize:'clamp(28px,3vw,38px)', marginBottom:14 }}>{f.icon}</div>
                <h4 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(18px,2vw,22px)', fontWeight:800, textTransform:'uppercase', color:'#0a0a0a', marginBottom:8 }}>{f.title}</h4>
                <p style={{ fontSize:'clamp(13px,1.2vw,14px)', color:'#666', lineHeight:1.72 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="lp-section" style={{ background:'#fff' }}>
        <div className="lp-container">
          <div style={{ textAlign:'center', marginBottom:44 }}>
            <div className="section-eyebrow reveal">Our Reach</div>
            <h2 className="section-title reveal" style={{ fontSize:'clamp(26px,4vw,56px)' }}>Industries <span style={{ color:'#1b9e2d' }}>We Serve</span></h2>
          </div>
          <div className="industries-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'clamp(12px,2vw,18px)' }}>
            {industries.map((ind,i) => (
              <div key={ind.title} className={`reveal delay-${(i%4)+1}`}
                style={{ border:'1px solid #e4e4e2', borderRadius:10, padding:'clamp(18px,2.5vw,28px) clamp(14px,2vw,22px)', transition:'all .3s' }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor='#1b9e2d'; e.currentTarget.style.background='#f0fdf2'; e.currentTarget.style.transform='translateY(-4px)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor='#e4e4e2'; e.currentTarget.style.background=''; e.currentTarget.style.transform=''; }}>
                <div style={{ fontSize:'clamp(24px,3vw,34px)', marginBottom:10 }}>{ind.icon}</div>
                <h4 style={{ fontWeight:700, fontSize:'clamp(13px,1.3vw,15px)', color:'#0a0a0a', marginBottom:6 }}>{ind.title}</h4>
                <p style={{ fontSize:'clamp(12px,1.1vw,13px)', color:'#666', lineHeight:1.65 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="lp-section" style={{ background:'#0a0a0a' }}>
        <div className="lp-container" style={{ textAlign:'center' }}>
          <h2 className="section-title reveal" style={{ fontSize:'clamp(28px,4vw,54px)', color:'#fff', marginBottom:14 }}>
            Ready to Work <span style={{ color:'#3dd958' }}>Together?</span>
          </h2>
          <p className="reveal" style={{ fontSize:'clamp(14px,1.5vw,17px)', color:'#888', marginBottom:32, maxWidth:460, margin:'0 auto 32px' }}>
            Get in touch for a free quote tailored to your exact requirements.
          </p>
          <div className="reveal" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <Link to="/contact"><button className="btn-green" style={{ padding:'13px 32px' }}>Get a Free Quote</button></Link>
            <Link to="/products"><button className="btn-outline" style={{ borderColor:'#444', color:'#aaa' }}>View Our Products</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
