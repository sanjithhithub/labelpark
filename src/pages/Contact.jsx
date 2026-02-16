import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import useScrollReveal from "../hooks/useScrollReveal";

const SERVICE_ID = "service_jbopl8b";
const TEMPLATE_ID = "template_rcirjbi";
const PUBLIC_KEY = "xzd_ROEHQIjkcwrA6";
const TO_EMAIL = "labelparkcbe@gmail.com";

const PRODUCTS = [
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
];

const CONTACT_INFO = [
  {
    icon: "📍",
    label: "Address",
    val: (
      <>
        <a
          href="https://www.google.com/maps/place/11.1271203,77.3515822"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1b9e2d", textDecoration: "none" }}
        >
          30, 3rd St, MS Nagar, Tiruppur, Tamil Nadu 641607
        </a>
        <br />
        South India's Leading Retail & Auto ID Solution Provider
      </>
    ),
  },
  { icon: "✉️", label: "Email", val: "labelparkcbe@gmail.com" },
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
];

const EMPTY = {
  from_name: "",
  company: "",
  from_email: "",
  phone: "",
  product: "",
  message: "",
};

export default function Contact() {
  useScrollReveal();
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errMsg, setErrMsg] = useState("");
  const [fields, setFields] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  /* ── field change ── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    // clear error on typing
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  /* ── client-side validation ── */
  const validate = () => {
    const errs = {};
    if (!fields.from_name.trim()) errs.from_name = "Full name is required";
    if (!fields.from_email.trim()) errs.from_email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(fields.from_email))
      errs.from_email = "Enter a valid email address";
    if (!fields.message.trim())
      errs.message = "Please describe your requirements";
    return errs;
  };

  /* ── submit ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // scroll to first error
      const first = formRef.current?.querySelector(".field-error");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("sending");
    setErrMsg("");
    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY,
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrMsg(
        "Something went wrong. Please try again or email us directly at " +
          TO_EMAIL,
      );
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrMsg("");
    setFields(EMPTY);
    setErrors({});
  };

  /* ── error field style ── */
  const errStyle = {
    fontSize: 11,
    color: "#dc2626",
    marginTop: 5,
    fontWeight: 600,
    display: "block",
  };
  const inputErr = (name) =>
    errors[name]
      ? {
          border: "1.5px solid #dc2626",
          boxShadow: "0 0 0 3px rgba(220,38,38,0.10)",
        }
      : {};

  return (
    <div className="page-enter">
      {/* Hero */}
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
              fontSize: "clamp(38px,7vw,84px)",
              color: "#fff",
              marginBottom: 16,
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

      {/* Main */}
      <section className="lp-section" style={{ background: "#fff" }}>
        <div className="lp-container">
          <div
            className="lp-grid-2 contact-info-grid"
            style={{ alignItems: "start" }}
          >
            {/* Left — info */}
            <div className="reveal-left">
              <div className="section-eyebrow">Get in Touch</div>
              <h2
                className="section-title"
                style={{ fontSize: "clamp(28px,3.5vw,52px)", marginBottom: 18 }}
              >
                We'd Love to
                <br />
                <span style={{ color: "#1b9e2d" }}>Hear From You</span>
              </h2>
              <p
                style={{
                  fontSize: "clamp(14px,1.5vw,16px)",
                  color: "#555",
                  lineHeight: 1.85,
                  marginBottom: 36,
                }}
              >
                Whether you need a quote for custom labels, information about
                our printers and scanners, or want to discuss an AMC — our team
                is ready to help.
              </p>

              {CONTACT_INFO.map((c) => (
                <div
                  key={c.label}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    marginBottom: 22,
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 10,
                      background: "#1b9e2d",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                      boxShadow: "0 6px 18px rgba(27,158,45,0.28)",
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
                        marginBottom: 4,
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
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

              {/* decorative barcode */}
              <div
                style={{
                  marginTop: 32,
                  display: "flex",
                  gap: 3,
                  alignItems: "flex-end",
                }}
              >
                {[
                  28, 14, 36, 20, 10, 32, 18, 24, 8, 30, 16, 22, 12, 34, 10,
                ].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: i % 2 === 0 ? 5 : 2,
                      height: h,
                      background: "#1b9e2d",
                      borderRadius: 2,
                      opacity: 0.35 + i / 22,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div
              className="reveal-right"
              style={{
                background: "#f4f4f2",
                borderRadius: 16,
                padding: "clamp(24px,5vw,50px) clamp(20px,4vw,44px)",
                border: "1px solid #e4e4e2",
              }}
            >
              {status === "success" ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "clamp(36px,8vw,64px) 0",
                  }}
                >
                  <div
                    style={{
                      fontSize: 68,
                      marginBottom: 20,
                      animation: "scaleIn .5s ease",
                    }}
                  >
                    ✅
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "clamp(24px,4vw,38px)",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      color: "#0a0a0a",
                      marginBottom: 12,
                    }}
                  >
                    Thank You!
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#555",
                      lineHeight: 1.75,
                      marginBottom: 28,
                    }}
                  >
                    Your enquiry has been sent to
                    <br />
                    <strong style={{ color: "#1b9e2d" }}>{TO_EMAIL}</strong>
                    <br />
                    We'll get back to you within 24 hours.
                  </p>
                  <button onClick={reset} className="btn-green">
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "clamp(20px,3vw,32px)",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      color: "#0a0a0a",
                      marginBottom: 24,
                    }}
                  >
                    Request a Quote
                  </h3>

                  {/* Row 1 */}
                  <div
                    className="form-2col"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 14,
                    }}
                  >
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        name="from_name"
                        type="text"
                        placeholder="Your full name"
                        value={fields.from_name}
                        onChange={handleChange}
                        style={inputErr("from_name")}
                      />
                      {errors.from_name && (
                        <span className="field-error" style={errStyle}>
                          ⚠ {errors.from_name}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Company</label>
                      <input
                        name="company"
                        type="text"
                        placeholder="Company name"
                        value={fields.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div
                    className="form-2col"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 14,
                    }}
                  >
                    <div className="form-group">
                      <label>Email *</label>
                      <input
                        name="from_email"
                        type="email"
                        placeholder="your@email.com"
                        value={fields.from_email}
                        onChange={handleChange}
                        style={inputErr("from_email")}
                      />
                      {errors.from_email && (
                        <span className="field-error" style={errStyle}>
                          ⚠ {errors.from_email}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={fields.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Product */}
                  <div className="form-group">
                    <label>Product / Service Interest</label>
                    <select
                      name="product"
                      value={fields.product}
                      onChange={handleChange}
                    >
                      <option value="">Select a product or service</option>
                      {PRODUCTS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label>Message / Requirements *</label>
                    <textarea
                      name="message"
                      placeholder="Describe your requirements — size, quantity, material, timeline, etc."
                      value={fields.message}
                      onChange={handleChange}
                      style={inputErr("message")}
                    />
                    {errors.message && (
                      <span className="field-error" style={errStyle}>
                        ⚠ {errors.message}
                      </span>
                    )}
                  </div>

                  <input type="hidden" name="to_email" value={TO_EMAIL} />

                  {status === "error" && (
                    <div
                      style={{
                        background: "#fef2f2",
                        border: "1px solid #fecaca",
                        borderRadius: 8,
                        padding: "12px 16px",
                        marginBottom: 14,
                        fontSize: 13,
                        color: "#b91c1c",
                      }}
                    >
                      ⚠️ {errMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-green"
                    disabled={status === "sending"}
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: 14,
                      fontSize: 14,
                      marginTop: 4,
                    }}
                  >
                    {status === "sending" ? "⏳ Sending…" : "Send Enquiry →"}
                  </button>

                  <p
                    style={{
                      fontSize: 12,
                      color: "#999",
                      textAlign: "center",
                      marginTop: 12,
                    }}
                  >
                    Enquiry delivered directly to <strong>{TO_EMAIL}</strong> ·
                    Reply within 24 h
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
