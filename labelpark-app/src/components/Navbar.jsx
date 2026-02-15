import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const NAV = [
  { label:'Home',     to:'/' },
  { label:'About',    to:'/about' },
  { label:'Services', to:'/services' },
];
const PRODUCTS = [
  { label:'Labels & Stickers', to:'/products' },
  { label:'Barcode Printers',  to:'/printers' },
  { label:'Barcode Scanners',  to:'/scanners' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropOpen(false); }, [pathname]);

  useEffect(() => {
    const h = e => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const isProduct = ['/products','/printers','/scanners'].includes(pathname);

  return (
    <>
      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:1000,
        background:'rgba(255,255,255,0.98)', backdropFilter:'blur(16px)',
        WebkitBackdropFilter:'blur(16px)',
        borderBottom:'3px solid #1b9e2d',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.10)' : 'none',
        transition:'box-shadow .3s',
      }}>
        <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 var(--pad-x,24px)', display:'flex', alignItems:'center', justifyContent:'space-between', height:'var(--nav-h,82px)' }}>

          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Label Park"
              style={{ height:'clamp(64px,6vw,64px)', width:'auto', transition:'transform .2s' }}
              onMouseEnter={e=>e.currentTarget.style.transform='scale(1.03)'}
              onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'} />
          </Link>

          {/* Desktop nav */}
          <ul style={{ display:'flex', gap:28, listStyle:'none', alignItems:'center', margin:0, padding:0 }} className="lp-desktop-nav">
            {NAV.map(l => (
              <li key={l.to}><DeskLink to={l.to} active={pathname===l.to}>{l.label}</DeskLink></li>
            ))}

            {/* Products dropdown */}
            <li ref={dropRef} style={{ position:'relative' }}>
              <button onClick={() => setDropOpen(o=>!o)} style={{
                background:'none', border:'none', cursor:'pointer',
                fontFamily:'Barlow,sans-serif', fontWeight:700, fontSize:13,
                letterSpacing:'.5px', textTransform:'uppercase',
                color: isProduct ? '#1b9e2d' : '#222',
                display:'flex', alignItems:'center', gap:5, padding:'4px 0',
                transition:'color .2s', position:'relative',
              }}>
                Products
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                  style={{ transition:'transform .25s', transform: dropOpen?'rotate(180deg)':'rotate(0)' }}>
                  <path d="M1 1L5 5L9 1" stroke={isProduct||dropOpen?'#1b9e2d':'#888'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ position:'absolute', bottom:-2, left:0, right:0, height:2, background:'#1b9e2d', borderRadius:2, transform:isProduct?'scaleX(1)':'scaleX(0)', transformOrigin:'left', transition:'transform .25s ease' }} />
              </button>

              {dropOpen && (
                <div style={{ position:'absolute', top:'calc(100% + 14px)', left:'50%', transform:'translateX(-50%)', background:'#fff', border:'1px solid #eee', borderRadius:10, padding:'6px 0', minWidth:200, boxShadow:'0 12px 40px rgba(0,0,0,0.12)', animation:'slideDown .2s ease', zIndex:100 }}>
                  {PRODUCTS.map(pl => (
                    <Link key={pl.to} to={pl.to} style={{ display:'block', padding:'11px 20px', fontSize:13, fontWeight:600, color:pathname===pl.to?'#1b9e2d':'#333', background:pathname===pl.to?'#f0fdf2':'transparent', transition:'background .15s,color .15s' }}
                      onMouseEnter={e=>{ e.currentTarget.style.background='#f0fdf2'; e.currentTarget.style.color='#1b9e2d'; }}
                      onMouseLeave={e=>{ e.currentTarget.style.background=pathname===pl.to?'#f0fdf2':'transparent'; e.currentTarget.style.color=pathname===pl.to?'#1b9e2d':'#333'; }}>
                      {pl.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link to="/contact">
                <button className="btn-green" style={{ fontSize:13, padding:'10px 24px' }}>Get a Quote</button>
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button onClick={()=>setMobileOpen(o=>!o)}
            className="lp-hamburger"
            style={{ background:'none', border:'none', cursor:'pointer', padding:'8px 4px', display:'none', flexDirection:'column', gap:5 }}
            aria-label="Toggle menu">
            <span style={{ display:'block', width:24, height:2, background:'#1b9e2d', borderRadius:2, transition:'all .3s', transform:mobileOpen?'rotate(45deg) translate(5px,5px)':'none' }} />
            <span style={{ display:'block', width:24, height:2, background:'#1b9e2d', borderRadius:2, transition:'opacity .2s', opacity:mobileOpen?0:1 }} />
            <span style={{ display:'block', width:24, height:2, background:'#1b9e2d', borderRadius:2, transition:'all .3s', transform:mobileOpen?'rotate(-45deg) translate(5px,-5px)':'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background:'#fff', borderTop:'1px solid #eee', padding:'14px var(--pad-x,20px) 22px', animation:'slideDown .22s ease', boxShadow:'0 8px 24px rgba(0,0,0,.10)' }}>
            {[...NAV,...PRODUCTS].map(l => (
              <Link key={l.to+l.label} to={l.to} style={{ display:'block', padding:'13px 0', fontWeight:700, fontSize:15, color:pathname===l.to?'#1b9e2d':'#222', borderBottom:'1px solid #f5f5f5' }}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact" style={{ display:'block', marginTop:16 }}>
              <button className="btn-green" style={{ width:'100%', justifyContent:'center', padding:14 }}>Get a Quote</button>
            </Link>
          </div>
        )}
      </nav>

      {/* Responsive toggle styles */}
      <style>{`
        @media(max-width:768px){
          .lp-desktop-nav{ display:none!important; }
          .lp-hamburger{ display:flex!important; }
        }
      `}</style>
    </>
  );
}

function DeskLink({ to, active, children }) {
  const [hov, setHov] = useState(false);
  return (
    <Link to={to} style={{ fontWeight:700, fontSize:13, letterSpacing:'.5px', textTransform:'uppercase', color:active||hov?'#1b9e2d':'#222', position:'relative', padding:'4px 0', display:'inline-block', transition:'color .2s' }}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      {children}
      <span style={{ position:'absolute', bottom:-2, left:0, right:0, height:2, background:'#1b9e2d', borderRadius:2, transform:active||hov?'scaleX(1)':'scaleX(0)', transformOrigin:'left', transition:'transform .25s ease' }} />
    </Link>
  );
}
