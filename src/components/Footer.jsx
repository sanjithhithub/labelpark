import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const COMPANY = [['/', 'Home'],['/about','About Us'],['/services','Services'],['/contact','Contact']];
const PRODUCTS = [['/products','Labels & Stickers'],['/printers','Barcode Printers'],['/scanners','Barcode Scanners'],['/products','Thermal Ribbons']];

export default function Footer() {
  return (
    <footer style={{ background:'#060606', borderTop:'1px solid #1c1c1c', color:'#fff' }}>
      <div style={{ maxWidth:1360, margin:'0 auto', padding:`64px var(--pad-x,40px) 0` }}>
        <div className="footer-grid" style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:48, paddingBottom:50, borderBottom:'1px solid #1c1c1c' }}>

          {/* Brand */}
          <div className="footer-brand">
            <img src={logo} alt="Label Park" style={{ height:54, width:'auto', marginBottom:20 }} />
            <p style={{ fontSize:14, color:'#666', lineHeight:1.85, maxWidth:280 }}>
              South India's leading manufacturer and exporter of barcode labels, multicolor stickers, and Auto ID solutions. Based in Tiruppur, Tamil Nadu.
            </p>
            <div style={{ marginTop:20, display:'flex', flexDirection:'column', gap:7 }}>
              <span style={{ fontSize:13, color:'#555' }}>📍 Tiruppur, Tamil Nadu, India</span>
              <span style={{ fontSize:13, color:'#555' }}>✉️ labelparkcbe@gmail.com</span>
              <span style={{ fontSize:13, color:'#555' }}>🕐 Mon–Sat: 9 AM – 6 PM</span>
            </div>
          </div>

          <FooterCol title="Company" links={COMPANY} />
          <FooterCol title="Products" links={PRODUCTS} />

          {/* CTA */}
          <div>
            <h5 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:16, fontWeight:800, textTransform:'uppercase', letterSpacing:'1px', color:'#fff', marginBottom:16 }}>Get a Quote</h5>
            <p style={{ fontSize:14, color:'#555', lineHeight:1.75, marginBottom:20 }}>Need custom labels or equipment? Let's talk — we respond within 24 hours.</p>
            <Link to="/contact"><button className="btn-green" style={{ fontSize:13 }}>Contact Us →</button></Link>
            <div style={{ marginTop:28, display:'flex', gap:3, alignItems:'flex-end' }}>
              {[6,3,8,3,5,3,7,3,4].map((h,i) => (
                <div key={i} style={{ width:4, height:h*3, background:'#1b9e2d', opacity:.35+i*.07, borderRadius:2 }} />
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 0', flexWrap:'wrap', gap:10 }}>
          <p style={{ fontSize:12, color:'#3a3a3a' }}>© {new Date().getFullYear()} Label Park. All rights reserved.</p>
          <p style={{ fontSize:12, color:'#3a3a3a' }}>Leading Manufacturer & Exporter of Barcode Labels & Auto ID Solutions</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h5 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:16, fontWeight:800, textTransform:'uppercase', letterSpacing:'1px', color:'#fff', marginBottom:16 }}>{title}</h5>
      {links.map(([to, label]) => (
        <div key={label} style={{ marginBottom:10 }}>
          <Link to={to} style={{ fontSize:14, color:'#555', transition:'color .2s', display:'inline-block' }}
            onMouseEnter={e=>e.currentTarget.style.color='#1b9e2d'}
            onMouseLeave={e=>e.currentTarget.style.color='#555'}>
            {label}
          </Link>
        </div>
      ))}
    </div>
  );
}
