import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Services', to: '/services' },
];

const PRODUCT_LINKS = [
  { label: 'Labels & Stickers', to: '/products' },
  { label: 'Barcode Printers',  to: '/printers' },
  { label: 'Barcode Scanners',  to: '/scanners' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled]     = useState(false);
  const [dropOpen, setDropOpen]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropOpen(false);
  }, [pathname]);

  useEffect(() => {
    const h = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const isProductPage = ['/products', '/printers', '/scanners'].includes(pathname);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    background: 'rgba(255,255,255,0.98)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '3px solid #1b9e2d',
    boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.10)' : 'none',
    transition: 'box-shadow 0.35s ease',
  };

  const innerStyle = {
    maxWidth: 1360,
    margin: '0 auto',
    padding: '0 44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 82,
  };

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Label Park" style={{ height: 80, width: 'auto', transition: 'transform 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
        </Link>

        {/* Desktop Nav */}
        <ul style={{ display: 'flex', gap: 30, listStyle: 'none', alignItems: 'center' }} className="hide-mobile">
          {LINKS.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} active={pathname === l.to}>{l.label}</NavLink>
            </li>
          ))}

          {/* Products dropdown */}
          <li ref={dropRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setDropOpen(o => !o)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Barlow, sans-serif',
                fontWeight: 700, fontSize: 13, letterSpacing: '0.5px', textTransform: 'uppercase',
                color: isProductPage ? '#1b9e2d' : '#222',
                display: 'flex', alignItems: 'center', gap: 5,
                padding: '4px 0',
                transition: 'color 0.2s',
              }}
            >
              Products
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                style={{ transition: 'transform 0.25s', transform: dropOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <path d="M1 1L5 5L9 1" stroke={isProductPage || dropOpen ? '#1b9e2d' : '#888'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dropdown */}
            {dropOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 14px)', left: '50%',
                transform: 'translateX(-50%)',
                background: '#fff', border: '1px solid #eee', borderRadius: 10,
                padding: '6px 0', minWidth: 200,
                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                animation: 'slideDown 0.2s ease',
              }}>
                {/* Arrow */}
                <div style={{
                  position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
                  width: 12, height: 12, background: '#fff', border: '1px solid #eee',
                  borderRight: 'none', borderBottom: 'none', transform: 'translateX(-50%) rotate(45deg)',
                }} />
                {PRODUCT_LINKS.map(pl => (
                  <Link key={pl.to} to={pl.to} style={{
                    display: 'block', padding: '11px 20px', fontSize: 13, fontWeight: 600,
                    color: pathname === pl.to ? '#1b9e2d' : '#333',
                    background: pathname === pl.to ? '#f0fdf2' : 'transparent',
                    transition: 'background 0.15s, color 0.15s',
                    letterSpacing: '0.3px',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#f0fdf2'; e.currentTarget.style.color = '#1b9e2d'; }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = pathname === pl.to ? '#f0fdf2' : 'transparent';
                    e.currentTarget.style.color = pathname === pl.to ? '#1b9e2d' : '#333';
                  }}>
                    {pl.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link to="/contact">
              <button className="btn-green" style={{ fontSize: 13, padding: '10px 24px' }}>
                Get a Quote
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="hide-desktop"
          onClick={() => setMobileOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'none' }}
        >
          <div style={{ width: 24, height: 2, background: '#1b9e2d', margin: '5px 0', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <div style={{ width: 24, height: 2, background: '#1b9e2d', margin: '5px 0', opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <div style={{ width: 24, height: 2, background: '#1b9e2d', margin: '5px 0', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #eee', padding: '20px 24px', animation: 'slideDown 0.2s ease' }}>
          {[...LINKS, ...PRODUCT_LINKS].map(l => (
            <Link key={l.to} to={l.to} style={{ display: 'block', padding: '12px 0', fontWeight: 600, fontSize: 15, color: pathname === l.to ? '#1b9e2d' : '#222', borderBottom: '1px solid #f5f5f5' }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" style={{ display: 'block', marginTop: 16 }}>
            <button className="btn-green" style={{ width: '100%', justifyContent: 'center' }}>Get a Quote</button>
          </Link>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, active, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link to={to} style={{
      fontWeight: 700, fontSize: 13, letterSpacing: '0.5px', textTransform: 'uppercase',
      color: active || hovered ? '#1b9e2d' : '#222',
      position: 'relative', padding: '4px 0', display: 'inline-block',
      transition: 'color 0.2s',
    }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}>
      {children}
      <span style={{
        position: 'absolute', bottom: -2, left: 0, right: 0, height: 2,
        background: '#1b9e2d', borderRadius: 2,
        transform: active || hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left', transition: 'transform 0.25s ease',
      }} />
    </Link>
  );
}
