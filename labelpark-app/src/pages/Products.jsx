import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import barcodeImg       from '../assets/images/barcode_plain.jpg';
import multicolorBcImg  from '../assets/images/multicolor_barcode.jpg';
import multicolorStkImg from '../assets/images/multicolor_sticker.jpg';
import syntheticImg     from '../assets/images/synthetic.jpg';
import jewelryImg       from '../assets/images/jewelry.jpg';
import holographicImg   from '../assets/images/holographic.jpg';
import laminatedImg     from '../assets/images/laminated.jpg';
import ribbonImg        from '../assets/images/ribbon.jpg';

const labels = [
  { img:barcodeImg,      name:'Barcode Stickers – Plain',       tag:'Auto ID',     desc:'High-quality plain barcode stickers for inventory management, logistics, and retail. Available in all standard 1D/2D barcode formats and custom sizes.' },
  { img:multicolorBcImg, name:'Multicolor Barcode Stickers',    tag:'Printed',     desc:'Vibrant full-color barcode labels combining visual appeal with reliable scanning accuracy. Perfect for retail shelves and consumer goods.' },
  { img:multicolorStkImg,name:'Multicolor Stickers',            tag:'Branding',    desc:'High-resolution multicolor stickers for brand promotion, product identification, and marketing materials in any shape or size.' },
  { img:syntheticImg,    name:'Synthetic Labels',               tag:'Durable',     desc:'Water-resistant synthetic labels engineered for harsh environments with excellent tear resistance, chemical resistance and longevity.' },
  { img:jewelryImg,      name:'Jewelry Labels',                 tag:'Precision',   desc:'Precision-crafted small-format labels for jewelry tagging. Clear, elegant, and scannable even in the smallest miniature sizes.' },
  { img:holographicImg,  name:'Holographic Hot Stamped Labels', tag:'Premium',     desc:'Premium holographic stickers with hot foil stamping for luxury products, brand security, and anti-counterfeiting applications.' },
  { img:laminatedImg,    name:'Laminated Labels',               tag:'Protected',   desc:'Protective laminated stickers delivering maximum durability — resistant to scratches, moisture, UV fading and chemicals.' },
  { img:ribbonImg,       name:'Thermal Transfer Ribbon',        tag:'Consumables', desc:'Wax, Wax-Resin & Full Resin TTR ribbons compatible with all major barcode printer brands. Available in all widths and lengths.' },
];

const tagColors = {
  'Auto ID':    { bg:'#e6f7e8', color:'#0e6b1b' },
  'Printed':    { bg:'#fef3e2', color:'#9a5a00' },
  'Branding':   { bg:'#e8f0fe', color:'#1a56c0' },
  'Durable':    { bg:'#fce8e8', color:'#b91c1c' },
  'Precision':  { bg:'#f0e6ff', color:'#6b21a8' },
  'Premium':    { bg:'#fef9e6', color:'#9a7700' },
  'Protected':  { bg:'#e6f4fe', color:'#1a6b9a' },
  'Consumables':{ bg:'#f0f0f0', color:'#444'    },
};

export default function Products() {
  useScrollReveal();
  return (
    <div className="page-enter">
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link to="/" className="bc-home">Home</Link>
            <span className="bc-sep">›</span>
            <span className="bc-current">Products</span>
          </div>
          <div className="section-eyebrow" style={{ color:'rgba(255,255,255,0.6)' }}>Our Products</div>
          <h1 className="section-title" style={{ fontSize:'clamp(38px,7vw,84px)', color:'#fff', marginBottom:16 }}
            dangerouslySetInnerHTML={{ __html:'Labels & <span style="color:#3dd958">Stickers</span>' }} />
          <p className="section-sub" style={{ color:'rgba(255,255,255,0.82)', maxWidth:520 }}>
            We manufacture all types of labels in different sizes and shapes tailored to your exact requirements.
          </p>
        </div>
      </div>

      <section className="lp-section" style={{ background:'#f4f4f2' }}>
        <div className="lp-container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(280px,100%), 1fr))', gap:'clamp(14px,2vw,26px)' }}>
            {labels.map((p,i) => {
              const tc = tagColors[p.tag] || tagColors['Consumables'];
              return (
                <div key={p.name} className={`card reveal delay-${(i%4)+1}`}>
                  <div style={{ height:'clamp(160px,18vw,230px)', overflow:'hidden', background:'#ddd', position:'relative' }}>
                    <img src={p.img} alt={p.name} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .55s ease' }}
                      onMouseEnter={e=>e.target.style.transform='scale(1.08)'}
                      onMouseLeave={e=>e.target.style.transform='scale(1)'} />
                    <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(0,0,0,0.22),transparent 55%)' }} />
                    <span style={{ position:'absolute', top:12, left:12, fontSize:10, fontWeight:800, letterSpacing:'1px', textTransform:'uppercase', color:tc.color, background:tc.bg, padding:'3px 10px', borderRadius:20 }}>{p.tag}</span>
                  </div>
                  <div style={{ padding:'clamp(14px,2vw,22px) clamp(16px,2vw,24px) clamp(16px,2vw,28px)' }}>
                    <h3 style={{ fontWeight:700, fontSize:'clamp(14px,1.5vw,17px)', color:'#0a0a0a', marginBottom:8 }}>{p.name}</h3>
                    <p style={{ fontSize:'clamp(12px,1.2vw,13.5px)', color:'#666', lineHeight:1.68 }}>{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom CTA */}
          <div className="cta-flex reveal" style={{ marginTop:'clamp(40px,6vw,64px)', background:'linear-gradient(135deg,#0e6b1b,#1b9e2d)', borderRadius:14, padding:'clamp(28px,5vw,48px) clamp(24px,5vw,56px)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:24, position:'relative', overflow:'hidden' }}>
            <div className="barcode-bg" style={{ position:'absolute', inset:0, opacity:.5 }} />
            <div style={{ position:'relative', zIndex:2 }}>
              <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(22px,3vw,34px)', fontWeight:800, textTransform:'uppercase', color:'#fff', marginBottom:6 }}>Custom Sizes & Shapes Available</h3>
              <p style={{ color:'rgba(255,255,255,0.82)', fontSize:'clamp(13px,1.4vw,15px)' }}>We can manufacture all above labels in any size, shape, or specification you require.</p>
            </div>
            <Link to="/contact" style={{ position:'relative', zIndex:2 }}>
              <button className="btn-white">Request Custom Quote</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
