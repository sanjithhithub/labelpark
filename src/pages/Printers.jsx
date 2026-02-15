import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import citizen621Img  from '../assets/images/citizen_621.jpg';
import citizen631Img  from '../assets/images/citizen_631.jpg';
import postekEM210Img from '../assets/images/postek_em210.jpg';
import postekC168Img  from '../assets/images/postek_c168.jpg';
import postekG2000Img from '../assets/images/postek_g2000.jpg';

const citizen = [
  { model:'CL-S621',      img:citizen621Img,  desc:'The powerful CL-S621 offers unparalleled versatility in the desktop thermal printer class. Able to print in both direct thermal and thermal transfer mode.', features:['Direct thermal & thermal transfer mode','360-meter ribbon for greater productivity','Unique metal Hi-Lift™ mechanism','Easy media and ribbon loading','Reduced downtime design'] },
  { model:'CL-S631',      img:citizen631Img,  desc:'The powerful CL-S631 provides users with unparalleled features. Crisp 300 dpi printing for images or fine text and an unprecedented 360-meter ribbon.', features:['Crisp 300 dpi print resolution','360-meter ribbon capacity','High-performance desktop design','Reduced downtime & productivity boost','Professional image & text quality'] },
  { model:'CL-S700 Series',img:citizen621Img, desc:'Built with durability and ease of access in mind, featuring a large programmable front LCD control panel and revolutionary Cross-Emulation™ board.', features:['Large programmable front LCD panel','Revolutionary Cross-Emulation™ board','Datamax® to Zebra® emulation switch','Designed for years of service','Industrial-grade durability'] },
];

const postek = [
  { model:'EM210',    img:postekEM210Img, desc:'Designed with the full user-experience in mind. The EM series broke the stereotype with the built-in exterior media stand, perfect for high-volume applications.', features:['Built-in exterior media stand','Wi-Fi, Bluetooth & RFID support','Left & Right structure for easy use','Durable printhead, industrial grade','High-volume printing optimised'] },
  { model:'C168/200s',img:postekC168Img,  desc:'Compact, affordable, endurance performance. Rigid structure plus the highly reliable motor and transmission system result in minimal down time and low service cost.', features:['Compact affordable design','Rigid structure, reliable motor','360 ribbon capacity — no frequent reload','Reflective & transmissive media sensors','Low maintenance & service cost'] },
  { model:'G2000',    img:postekG2000Img, desc:'Small and lightweight with the stamina of a metal industrial printer. Revolutionary one-piece frame ensures stability and durability for 24/7 operation.', features:['One-piece frame stability & durability','Convective Heat Transfer — stable 24/7','Single spring TPH — no ribbon wrinkling','Easy platen roller access & cleaning','Industrial-grade components'] },
];

function PrinterBrand({ brand, color, printers }) {
  return (
    <div style={{ marginBottom:'clamp(40px,6vw,64px)' }}>
      <div className="printer-brand-head" style={{ display:'flex', alignItems:'center', gap:16, marginBottom:'clamp(20px,3vw,36px)', paddingBottom:18, borderBottom:'2px solid #f0f0ee' }}>
        <div style={{ background:color, color:'#fff', fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:'clamp(18px,2.5vw,26px)', padding:'7px 22px', borderRadius:6, letterSpacing:'3px', flexShrink:0 }}>{brand}</div>
        <div style={{ width:1, height:28, background:'#ddd' }} />
        <p style={{ fontSize:'clamp(12px,1.3vw,14px)', color:'#888', fontWeight:500 }}>Desktop & Industrial Thermal Barcode Printers</p>
      </div>
      <div className="printers-3col" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'clamp(14px,2vw,26px)' }}>
        {printers.map((p,i) => (
          <div key={p.model} className={`printer-card reveal delay-${i+1}`}>
            <div style={{ background:'#0a0a0a', padding:'13px 20px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <span style={{ fontSize:11, fontWeight:800, letterSpacing:'2px', color:'#3dd958', textTransform:'uppercase' }}>{brand}</span>
              <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(16px,2vw,22px)', fontWeight:700, color:'#fff' }}>{p.model}</span>
            </div>
            <div style={{ height:'clamp(160px,18vw,220px)', background:'#f0f0ee', display:'flex', alignItems:'center', justifyContent:'center', padding:16, overflow:'hidden' }}>
              <img src={p.img} alt={p.model} style={{ maxHeight:'100%', maxWidth:'100%', objectFit:'contain', transition:'transform .35s ease' }}
                onMouseEnter={e=>e.target.style.transform='scale(1.06)'}
                onMouseLeave={e=>e.target.style.transform='scale(1)'} />
            </div>
            <div style={{ padding:'clamp(16px,2vw,24px)' }}>
              <p style={{ fontSize:'clamp(12px,1.2vw,14px)', color:'#555', lineHeight:1.74, marginBottom:16 }}>{p.desc}</p>
              <ul style={{ listStyle:'none' }}>
                {p.features.map(f => (
                  <li key={f} style={{ fontSize:'clamp(12px,1.1vw,13px)', color:'#444', padding:'6px 0', borderBottom:'1px solid #f0f0ee', display:'flex', gap:8, alignItems:'flex-start' }}>
                    <span style={{ color:'#1b9e2d', fontWeight:800, fontSize:14, flexShrink:0, lineHeight:1.5 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Printers() {
  useScrollReveal();
  return (
    <div className="page-enter">
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link to="/" className="bc-home">Home</Link>
            <span className="bc-sep">›</span>
            <Link to="/products" className="bc-link">Products</Link>
            <span className="bc-sep">›</span>
            <span className="bc-current">Printers</span>
          </div>
          <div className="section-eyebrow" style={{ color:'rgba(255,255,255,0.6)' }}>Equipment</div>
          <h1 className="section-title" style={{ fontSize:'clamp(38px,7vw,84px)', color:'#fff', marginBottom:16 }}
            dangerouslySetInnerHTML={{ __html:'Barcode <span style="color:#3dd958">Printers</span>' }} />
          <p className="section-sub" style={{ color:'rgba(255,255,255,0.82)', maxWidth:540 }}>
            Authorised distributor of Citizen and Postek barcode printers — top-tier performance for desktop and industrial environments.
          </p>
        </div>
      </div>

      <section className="lp-section" style={{ background:'#fff' }}>
        <div className="lp-container">
          <PrinterBrand brand="CITIZEN" color="#0a0a0a" printers={citizen} />
          <PrinterBrand brand="POSTEK"  color="#1b9e2d" printers={postek} />

          <div className="amc-cta reveal" style={{ border:'2px solid #1b9e2d', borderRadius:12, padding:'clamp(24px,4vw,38px) clamp(20px,4vw,48px)', display:'flex', justifyContent:'space-between', alignItems:'center', gap:24, flexWrap:'wrap' }}>
            <div>
              <h4 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(20px,2.5vw,28px)', fontWeight:800, textTransform:'uppercase', color:'#0a0a0a', marginBottom:6 }}>Need an Annual Maintenance Contract?</h4>
              <p style={{ fontSize:'clamp(13px,1.3vw,14px)', color:'#666' }}>Protect your printer investment with our AMC covering Citizen, Postek & Argox printers.</p>
            </div>
            <Link to="/services"><button className="btn-green" style={{ whiteSpace:'nowrap' }}>Learn About AMC →</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
