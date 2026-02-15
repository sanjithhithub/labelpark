import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import tvsImg       from '../assets/images/scanner_tvs.jpg';
import honeywellImg from '../assets/images/scanner_honeywell.png';

const scanners = [
  { brand:'TVS', model:'BSC 101', img:tvsImg,
    desc:'Reliable barcode scanner from the trusted Indian brand TVS. Delivers consistent performance for retail, logistics and manufacturing applications.',
    specs:[['Type','Handheld Laser Scanner'],['Interface','USB / Serial'],['Application','Retail, Logistics, Manufacturing'],['Origin','TVS — Indian Brand']] },
  { brand:'Honeywell', model:'Orbit 7120', img:honeywellImg,
    desc:'Hands-free omnidirectional scanner designed for demanding retail and industrial environments. No precise aiming required — reads in all orientations.',
    specs:[['Type','Hands-free Omnidirectional'],['Scanning','Omnidirectional — no aiming'],['Application','High-volume Retail, Industrial'],['Brand','Honeywell']] },
];

const extra = [
  { icon:'📡', title:'Wireless Scanners',   desc:'Bluetooth wireless scanners for freedom of movement across large warehouse or retail floors. Long-range connectivity up to 100m.' },
  { icon:'🖐️', title:'Hands-Free Scanners', desc:'Fixed-mount and presentation scanners for high-throughput applications at checkout counters and conveyor lines.' },
  { icon:'📱', title:'2D Barcode Scanners', desc:'Advanced scanners capable of reading QR codes, Data Matrix, PDF417 and all 2D symbologies in addition to standard 1D barcodes.' },
];

export default function Scanners() {
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
            <span className="bc-current">Scanners</span>
          </div>
          <div className="section-eyebrow" style={{ color:'rgba(255,255,255,0.6)' }}>Auto ID Equipment</div>
          <h1 className="section-title" style={{ fontSize:'clamp(38px,7vw,84px)', color:'#fff', marginBottom:16 }}
            dangerouslySetInnerHTML={{ __html:'Barcode <span style="color:#3dd958">Scanners</span>' }} />
          <p className="section-sub" style={{ color:'rgba(255,255,255,0.82)', maxWidth:520 }}>
            Hands-free and wireless barcode scanning solutions for warehouses, retail outlets, and manufacturing floors.
          </p>
        </div>
      </div>

      <section className="lp-section" style={{ background:'#f4f4f2' }}>
        <div className="lp-container">
          {/* Main scanner cards */}
          <div className="scanners-2col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'clamp(16px,3vw,32px)', marginBottom:'clamp(40px,6vw,64px)' }}>
            {scanners.map((s,i) => (
              <div key={s.model} className={`card reveal-${i===0?'left':'right'}`}>
                <div style={{ height:'clamp(200px,22vw,300px)', background:'linear-gradient(135deg,#1a2e1a,#1b9e2d)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
                  <img src={s.img} alt={s.model} style={{ maxHeight:'90%', maxWidth:'80%', objectFit:'contain', transition:'transform .4s ease' }}
                    onMouseEnter={e=>e.target.style.transform='scale(1.06)'}
                    onMouseLeave={e=>e.target.style.transform='scale(1)'} />
                </div>
                <div style={{ padding:'clamp(20px,3vw,32px) clamp(18px,3vw,32px) clamp(22px,3vw,38px)' }}>
                  <div style={{ fontSize:11, fontWeight:800, letterSpacing:'2px', color:'#1b9e2d', textTransform:'uppercase', marginBottom:5 }}>{s.brand}</div>
                  <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(26px,3vw,36px)', fontWeight:800, color:'#0a0a0a', marginBottom:12 }}>{s.model}</h3>
                  <p style={{ fontSize:'clamp(13px,1.4vw,15px)', color:'#555', lineHeight:1.78, marginBottom:22 }}>{s.desc}</p>
                  <table style={{ width:'100%', borderCollapse:'collapse' }}>
                    {s.specs.map(([k,v]) => (
                      <tr key={k} style={{ borderBottom:'1px solid #f0f0ee' }}>
                        <td style={{ padding:'9px 0', fontSize:11, fontWeight:800, letterSpacing:'.5px', textTransform:'uppercase', color:'#999', width:'42%' }}>{k}</td>
                        <td style={{ padding:'9px 0', fontSize:13, color:'#333', fontWeight:600 }}>{v}</td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Extra types */}
          <h3 className="section-title reveal" style={{ fontSize:'clamp(24px,3vw,44px)', marginBottom:24 }}>More Scanner <span style={{ color:'#1b9e2d' }}>Solutions</span></h3>
          <div className="scanners-extra" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'clamp(12px,2vw,22px)' }}>
            {extra.map((e,i) => (
              <div key={e.title} className={`reveal delay-${i+1}`}
                style={{ background:'#fff', borderRadius:10, padding:'clamp(20px,3vw,30px) clamp(16px,2.5vw,26px)', border:'1px solid #e4e4e2', transition:'all .3s' }}
                onMouseEnter={el=>{ el.currentTarget.style.borderColor='#1b9e2d'; el.currentTarget.style.transform='translateY(-5px)'; el.currentTarget.style.boxShadow='0 12px 36px rgba(0,0,0,0.09)'; }}
                onMouseLeave={el=>{ el.currentTarget.style.borderColor='#e4e4e2'; el.currentTarget.style.transform=''; el.currentTarget.style.boxShadow=''; }}>
                <div style={{ fontSize:'clamp(28px,3vw,38px)', marginBottom:14 }}>{e.icon}</div>
                <h4 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(18px,2vw,22px)', fontWeight:800, textTransform:'uppercase', color:'#0a0a0a', marginBottom:8 }}>{e.title}</h4>
                <p style={{ fontSize:'clamp(13px,1.2vw,14px)', color:'#666', lineHeight:1.7 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
