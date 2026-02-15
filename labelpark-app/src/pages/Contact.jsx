import React, { useState } from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-enter">
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link to="/" className="bc-home">
              Home
            </Link>
            <span className="bc-sep">›</span>
            <span className="bc-current">Contact</span>
          </div>
          <div
            className="section-eyebrow"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Reach Out
          </div>
          <h1
            className="section-title"
            style={{
              fontSize: "clamp(46px,7vw,84px)",
              color: "#fff",
              marginBottom: 18,
            }}
            dangerouslySetInnerHTML={{
              __html: 'Contact <span style="color:#3dd958">Us</span>',
            }}
          />
          <p
            className="section-sub"
            style={{ color: "rgba(255,255,255,0.82)", maxWidth: 520 }}
          >
            Ready to get started? Reach out for a custom quote or any product
            enquiry. We respond within 24 hours.
          </p>
        </div>
      </div>

      <section style={{ padding: "90px 60px", background: "#fff" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.35fr",
            gap: 88,
          }}
        >
          {/* Info */}
          <div className="reveal-left">
            <div className="section-eyebrow">Get in Touch</div>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(34px,3.5vw,52px)", marginBottom: 20 }}
            >
              We'd Love to
              <br />
              <span style={{ color: "#1b9e2d" }}>Hear From You</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#555",
                lineHeight: 1.85,
                marginBottom: 44,
              }}
            >
              Whether you need a quote for custom labels, information about our
              printers and scanners, or want to discuss an AMC — our team is
              ready to help.
            </p>

            {[
              {
                icon: "📍",
                label: "Address",
                val: "Tiruppur, Tamil Nadu, India\nSouth India's Leading Retail & Auto ID Solution Provider",
              },
              { icon: "✉️", label: "Email", val: " labelparkcbe@gmail.com" },
              {
                icon: "🕐",
                label: "Working Hours",
                val: "Monday – Saturday\n9:00 AM – 6:00 PM IST",
              },
              {
                icon: "🏭",
                label: "We Supply",
                val: "Labels · Printers · Scanners · Ribbons · AMC",
              },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  display: "flex",
                  gap: 18,
                  alignItems: "flex-start",
                  marginBottom: 30,
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                    background: "#1b9e2d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    flexShrink: 0,
                    boxShadow: "0 6px 20px rgba(27,158,45,0.3)",
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "1.5px",
                      color: "#1b9e2d",
                      textTransform: "uppercase",
                      marginBottom: 5,
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "#333",
                      lineHeight: 1.65,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {c.val}
                  </div>
                </div>
              </div>
            ))}

            {/* Decorative barcode */}
            <div
              style={{
                marginTop: 40,
                display: "flex",
                gap: 3,
                alignItems: "flex-end",
              }}
            >
              {[28, 14, 36, 20, 10, 32, 18, 24, 8, 30, 16, 22, 12, 34, 10].map(
                (h, i) => (
                  <div
                    key={i}
                    style={{
                      width: i % 2 === 0 ? 5 : 2,
                      height: h,
                      background: "#1b9e2d",
                      borderRadius: 2,
                      opacity: 0.4 + i / 20,
                    }}
                  />
                ),
              )}
            </div>
          </div>

          {/* Form */}
          <div
            className="reveal-right"
            style={{
              background: "#f4f4f2",
              borderRadius: 16,
              padding: "50px 46px",
              border: "1px solid #e4e4e2",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <div
                  style={{
                    fontSize: 72,
                    marginBottom: 24,
                    animation: "scaleIn 0.5s ease",
                  }}
                >
                  ✅
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: 38,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    color: "#0a0a0a",
                    marginBottom: 14,
                  }}
                >
                  Thank You!
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    color: "#555",
                    lineHeight: 1.75,
                    marginBottom: 32,
                  }}
                >
                  Your enquiry has been received. Our team will get back to you
                  within 24 hours with a custom quote.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      company: "",
                      email: "",
                      phone: "",
                      product: "",
                      message: "",
                    });
                  }}
                  className="btn-green"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: 32,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    color: "#0a0a0a",
                    marginBottom: 30,
                  }}
                >
                  Request a Quote
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                >
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Company</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      type="text"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                >
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Product / Service Interest</label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                  >
                    <option value="">Select a product or service</option>
                    {[
                      "Barcode Stickers – Plain",
                      "Multicolor Barcode Stickers",
                      "Multicolor Stickers",
                      "Synthetic Labels",
                      "Jewelry Labels",
                      "Holographic Hot Stamped Labels",
                      "Laminated Labels",
                      "Thermal Transfer Ribbons",
                      "Barcode Printers – Citizen",
                      "Barcode Printers – Postek",
                      "Barcode Scanners",
                      "Annual Maintenance Contract (AMC)",
                      "Technical Support",
                    ].map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Message / Requirements *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements — size, quantity, material, timeline, etc."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-green"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "14px",
                    fontSize: 14,
                    marginTop: 4,
                  }}
                >
                  Send Enquiry →
                </button>

                <p
                  style={{
                    fontSize: 12,
                    color: "#999",
                    textAlign: "center",
                    marginTop: 14,
                  }}
                >
                  We respond within 24 hours on business days.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
