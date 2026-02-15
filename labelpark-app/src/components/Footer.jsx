import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const col = {
  company: [['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/contact', 'Contact']],
  products: [['/products', 'Labels & Stickers'], ['/printers', 'Barcode Printers'], ['/scanners', 'Barcode Scanners'], ['/products', 'Thermal Ribbons']],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "#060606",
        borderTop: "1px solid #1c1c1c",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "64px 60px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 56,
            paddingBottom: 52,
            borderBottom: "1px solid #1c1c1c",
          }}
        >
          {/* Brand col */}
          <div>
            <img
              src={logo}
              alt="Label Park"
              style={{ height: 56, width: "auto", marginBottom: 22 }}
            />
            <p
              style={{
                fontSize: 14,
                color: "#666",
                lineHeight: 1.85,
                maxWidth: 280,
              }}
            >
              South India's leading manufacturer and exporter of barcode labels,
              multicolor stickers, and Auto ID solutions. Incorporated in
              Tiruppur, Tamil Nadu.
            </p>
            <div
              style={{
                marginTop: 22,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 13, color: "#555" }}>
                📍 Tiruppur, Tamil Nadu, India
              </span>
              <span style={{ fontSize: 13, color: "#555" }}>
                ✉️ labelparkcbe@gmail.com
              </span>
              <span style={{ fontSize: 13, color: "#555" }}>
                🕐 Mon – Sat: 9 AM – 6 PM
              </span>
            </div>
          </div>

          {/* Company */}
          <FooterCol title="Company" links={col.company} />

          {/* Products */}
          <FooterCol title="Products" links={col.products} />

          {/* CTA */}
          <div>
            <h5
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: 16,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "#fff",
                marginBottom: 18,
              }}
            >
              Get a Quote
            </h5>
            <p
              style={{
                fontSize: 14,
                color: "#555",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              Need custom labels or equipment? Let's talk — we respond within 24
              hours.
            </p>
            <Link to="/contact">
              <button className="btn-green" style={{ fontSize: 13 }}>
                Contact Us →
              </button>
            </Link>
            {/* Green accent bar */}
            <div style={{ marginTop: 30, display: "flex", gap: 3 }}>
              {[6, 3, 8, 3, 5, 3, 7, 3, 4].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: 4,
                    height: h * 3,
                    background: "#1b9e2d",
                    opacity: 0.4 + i * 0.06,
                    borderRadius: 2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "22px 0",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12, color: "#3a3a3a" }}>
            © {new Date().getFullYear()} Label Park, Chennai. All rights
            reserved.
          </p>
          <p style={{ fontSize: 12, color: "#3a3a3a" }}>
            Leading Manufacturer & Exporter of Barcode Labels & Auto ID
            Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h5 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#fff', marginBottom: 18 }}>
        {title}
      </h5>
      {links.map(([to, label]) => (
        <div key={label} style={{ marginBottom: 11 }}>
          <Link to={to} style={{ fontSize: 14, color: '#555', transition: 'color 0.2s', display: 'inline-block' }}
            onMouseEnter={e => e.currentTarget.style.color = '#1b9e2d'}
            onMouseLeave={e => e.currentTarget.style.color = '#555'}>
            {label}
          </Link>
        </div>
      ))}
    </div>
  );
}
