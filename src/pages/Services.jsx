import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const services = [
  { icon:'📋', title:'Annual Maintenance Contract (AMC)', color:'#0e6b1b',
    body:'Annual Maintenance Contract is used to protect the printer investment along with printer downtime and repair costs. AMC is a contract that provides quality, post-warranty authorised service for printers of brands like Argox, Postek and Citizen thermal transfer barcode printers.',
    points:['Coverage for original spare parts','Print heads and PCB replacement','Thermal transfer ribbons & die cut labels','Standby printer provision if required','Replacement of defective or worn-out parts with new original parts','Post-warranty authorized service'] },
  { icon:'📞', title:'Technical Support', color:'#1b9e2d',
    body:'Excellent pre-sales and after-sales technical support & service. Our team is dedicated to ensuring your equipment operates at peak performance from day one and throughout its service life.',
    points:['Installation of all products','Training of operators','Repairs, maintenance and cleaning instructions','Onsite support during warranty period','Free online support through internet','Pre-sales technical consultation'] },
];

const steps = [
  { step:'01', icon:'🤝', title:'Consultation', desc:'We understand your requirements and recommend the best solutions for your specific application and budget.' },
  { step:'02', icon:'📦', title:'Supply & Install', desc:'Professional supply and installation of all products with complete setup and configuration included.' },
  { step:'03', icon:'🎓', title:'Training', desc:'Comprehensive operator training ensuring your team can use all equipment effectively from day one.' },
  { step:'04', icon:'🔧', title:'Ongoing Support', desc:'Continued AMC and technical support throughout the entire lifetime of your equipment.' },
];

const brands = [
  { icon:'🖨️', brand:'Citizen', desc:'CL-S621, CL-S631, CL-S700 Series and other Citizen thermal printers.' },
  { icon:'🖨️', brand:'Postek',  desc:'EM210, C168/200s, G2000 and other Postek barcode printers.' },
  { icon:'🖨️', brand:'Argox',   desc:'Argox thermal transfer and direct thermal barcode printers.' },
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
          <div className="section-eyebrow" style={{ color:'rgba(255,255,255,0.6)' }}>What We Offer</div>
          <h1 className="section-title" style={{ fontSize:'clamp(38px,7vw,84px)', color:'#fff', marginBottom:16 }}
            dangerouslySetInnerHTML={{ __html:'Our <span style="color:#3dd958">Services</span>' }} />
          <p className="section-sub" style={{ color:'rgba(255,255,255,0.82)', maxWidth:520 }}>
            Stickers & Labels Manufacturing specialists providing complete Auto ID solutions with unmatched after-sales support across South India.
          </p>
        </div>
      </div>

      {/* Main services */}
      <section className="lp-section" style={{ background:'#fff' }}>
        <div className="lp-container">
          <div className="services-grid lp-grid-2">
            {services.map((s,i) => (
              <div key={s.title} className={`reveal-${i===0?'left':'right'}`}
                style={{ border:'1px solid #e4e4e2', borderRadius:14, overflow:'hidden', boxShadow:'0 2px 20px rgba(0,0,0,0.05)', transition:'transform .3s,box-shadow .3s' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 16px 48px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}>
                <div style={{ background:s.color, padding:'clamp(22px,4vw,34px) clamp(20px,4vw,38px)' }}>
                  <div style={{ fontSize:'clamp(28px,4vw,42px)', marginBottom:14 }}>{s.icon}</div>
                  <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(20px,2.5vw,28px)', fontWeight:800, textTransform:'uppercase', color:'#fff', lineHeight:1.1 }}>{s.title}</h3>
                </div>
                <div style={{ padding:'clamp(22px,4vw,34px) clamp(20px,4vw,38px)' }}>
                  <p style={{ fontSize:'clamp(13px,1.4vw,15px)', color:'#555', lineHeight:1.82, marginBottom:22 }}>{s.body}</p>
                  <ul style={{ listStyle:'none' }}>
                    {s.points.map(p => (
                      <li key={p} style={{ fontSize:'clamp(13px,1.2vw,14px)', color:'#333', padding:'9px 0', borderBottom:'1px solid #f4f4f2', display:'flex', gap:9, alignItems:'flex-start' }}>
                        <span style={{ color:'#1b9e2d', fontWeight:800, fontSize:15, flexShrink:0, lineHeight:1.5 }}>✓</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="lp-section" style={{ background:'#f4f4f2' }}>
        <div className="lp-container">
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <div className="section-eyebrow reveal">How We Work</div>
            <h2 className="section-title reveal" style={{ fontSize:'clamp(26px,4vw,54px)' }}>Our Support <span style={{ color:'#1b9e2d' }}>Process</span></h2>
          </div>
          <div className="steps-4col" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:6, position:'relative' }}>
            <div className="step-line" style={{ position:'absolute', top:56, left:'12%', right:'12%', height:2, background:'linear-gradient(90deg,#1b9e2d,#3dd958,#1b9e2d)', opacity:.4 }} />
            {steps.map((s,i) => (
              <div key={s.step} className={`reveal delay-${i+1}`} style={{ background:'#fff', padding:'clamp(24px,4vw,40px) clamp(16px,2.5vw,24px) clamp(22px,3vw,36px)', borderRadius:10, textAlign:'center', position:'relative' }}>
                <div style={{ width:52, height:52, borderRadius:'50%', background:'#1b9e2d', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'clamp(18px,2.5vw,24px)', margin:'0 auto 16px', boxShadow:'0 6px 24px rgba(27,158,45,0.35)', position:'relative', zIndex:2 }}>{s.icon}</div>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:12, fontWeight:800, letterSpacing:'2px', color:'#3dd958', marginBottom:5 }}>STEP {s.step}</div>
                <h4 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(18px,2vw,22px)', fontWeight:800, textTransform:'uppercase', color:'#0a0a0a', marginBottom:8 }}>{s.title}</h4>
                <p style={{ fontSize:'clamp(12px,1.2vw,13px)', color:'#666', lineHeight:1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="lp-section" style={{ background:'#0a0a0a' }}>
        <div className="lp-container">
          <div style={{ textAlign:'center', marginBottom:44 }}>
            <div className="section-eyebrow reveal" style={{ color:'#3dd958' }}>Coverage</div>
            <h2 className="section-title reveal" style={{ fontSize:'clamp(26px,4vw,54px)', color:'#fff' }}>Brands We <span style={{ color:'#3dd958' }}>Service</span></h2>
          </div>
          <div className="lp-grid-3">
            {brands.map((b,i) => (
              <div key={b.brand} className={`reveal delay-${i+1}`}
                style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:'clamp(20px,3vw,32px)', transition:'background .3s,border-color .3s,transform .3s' }}
                onMouseEnter={e=>{ e.currentTarget.style.background='rgba(27,158,45,0.14)'; e.currentTarget.style.borderColor='rgba(27,158,45,0.5)'; e.currentTarget.style.transform='translateY(-5px)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.background='rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; e.currentTarget.style.transform=''; }}>
                <div style={{ fontSize:'clamp(28px,3vw,38px)', marginBottom:14 }}>{b.icon}</div>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(20px,2.5vw,26px)', fontWeight:800, textTransform:'uppercase', color:'#3dd958', marginBottom:8 }}>{b.brand}</div>
                <p style={{ fontSize:'clamp(13px,1.3vw,14px)', color:'#888', lineHeight:1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="lp-section" style={{ background:'#fff' }}>
        <div className="lp-container" style={{ textAlign:'center' }}>
          <h2 className="section-title reveal" style={{ fontSize:'clamp(26px,4vw,54px)', marginBottom:14 }}>Need <span style={{ color:'#1b9e2d' }}>Service Support?</span></h2>
          <p className="reveal section-sub" style={{ maxWidth:460, margin:'0 auto 30px' }}>Contact us today to discuss AMC or technical support for your barcode equipment.</p>
          <div className="reveal" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <Link to="/contact"><button className="btn-green" style={{ padding:'13px 32px' }}>Contact Us</button></Link>
            <Link to="/printers"><button className="btn-outline">View Printers</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
