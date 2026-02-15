import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import useScrollReveal from '../hooks/useScrollReveal';

/* ─────────────────────────────────────────────────────────────────
   HOW TO ACTIVATE REAL EMAIL SENDING (5 minutes):
   ──────────────────────────────────────────────────────────────────
   1. Go to https://www.emailjs.com — sign up FREE (200 emails/month free)
   2. Dashboard → Email Services → Add New Service → Gmail
      • Connect using labelparkcbe@gmail.com
      • Copy your Service ID (looks like: service_xxxxxxx)

   3. Email Templates → Create New Template
      Subject:  New Enquiry from {{from_name}} – Label Park
      Body:
        Name:    {{from_name}}
        Company: {{company}}
        Email:   {{from_email}}
        Phone:   {{phone}}
        Product: {{product}}
        ──────────────
        {{message}}
      To Email: labelparkcbe@gmail.com

      Copy your Template ID (looks like: template_xxxxxxx)

   4. Account → General → Public Key (looks like: XXXXXXXXXXXXXXXXX)

   5. Paste your 3 IDs below and the form will send real emails!
──────────────────────────────────────────────────────────────── */
const SERVICE_ID  = 'YOUR_SERVICE_ID';   // ← paste here
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // ← paste here
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';  // ← paste here
const TO_EMAIL    = 'labelparkcbe@gmail.com';

const PRODUCTS = [
  'Barcode Stickers – Plain','Multicolor Barcode Stickers','Multicolor Stickers',
  'Synthetic Labels','Jewelry Labels','Holographic Hot Stamped Labels','Laminated Labels',
  'Thermal Transfer Ribbons','Barcode Printers – Citizen','Barcode Printers – Postek',
  'Barcode Scanners','Annual Maintenance Contract (AMC)','Technical Support',
];

const CONTACT_INFO = [
  { icon:'📍', label:'Address',       val:'Tiruppur, Tamil Nadu, India\nSouth India\'s Leading Retail & Auto ID Solution Provider' },
  { icon:'✉️', label:'Email',          val:'labelparkcbe@gmail.com' },
  { icon:'🕐', label:'Working Hours',  val:'Monday – Saturday\n9:00 AM – 6:00 PM IST' },
  { icon:'🏭', label:'We Supply',      val:'Labels · Printers · Scanners · Ribbons · AMC' },
];

export default function Contact() {
  useScrollReveal();
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    setErrMsg('');

    const configured = SERVICE_ID !== 'YOUR_SERVICE_ID';

    if (configured) {
      try {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
        setStatus('success');
      } catch (err) {
        console.error('EmailJS error:', err);
        setErrMsg('Failed to send. Please email us directly at ' + TO_EMAIL);
        setStatus('error');
      }
    } else {
      /* Fallback — open mailto so the form still works before EmailJS is configured */
      const data = new FormData(formRef.current);
      const body = [
        `Name: ${data.get('from_name')}`,
        `Company: ${data.get('company') || '—'}`,
        `Email: ${data.get('from_email')}`,
        `Phone: ${data.get('phone') || '—'}`,
        `Product: ${data.get('product') || '—'}`,
        '',
        data.get('message'),
      ].join('\n');
      window.location.href = `mailto:${TO_EMAIL}?subject=New Enquiry – Label Park&body=${encodeURIComponent(body)}`;
      setStatus('success');
    }
  };

  const reset = () => { setStatus('idle'); setErrMsg(''); formRef.current?.reset(); };

  return (
    <div className="page-enter">

      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link to="/" className="bc-home">Home</Link>
            <span className="bc-sep">›</span>
            <span className="bc-current">Contact</span>
          </div>
          <div className="section-eyebrow" style={{ color:'rgba(255,255,255,0.6)' }}>Reach Out</div>
          <h1 className="section-title"
            style={{ fontSize:'clamp(38px,7vw,84px)', color:'#fff', marginBottom:16 }}
            dangerouslySetInnerHTML={{ __html:'Contact <span style="color:#3dd958">Us</span>' }} />
          <p className="section-sub" style={{ color:'rgba(255,255,255,0.82)', maxWidth:520 }}>
            Ready to get started? Reach out for a custom quote or any product enquiry. We respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Main */}
      <section className="lp-section" style={{ background:'#fff' }}>
        <div className="lp-container">
          <div className="lp-grid-2 contact-info-grid" style={{ alignItems:'start' }}>

            {/* Left — info */}
            <div className="reveal-left">
              <div className="section-eyebrow">Get in Touch</div>
              <h2 className="section-title" style={{ fontSize:'clamp(28px,3.5vw,52px)', marginBottom:18 }}>
                We'd Love to<br />
                <span style={{ color:'#1b9e2d' }}>Hear From You</span>
              </h2>
              <p style={{ fontSize:'clamp(14px,1.5vw,16px)', color:'#555', lineHeight:1.85, marginBottom:36 }}>
                Whether you need a quote for custom labels, information about our printers and scanners, or want to discuss an AMC — our team is ready to help.
              </p>

              {CONTACT_INFO.map(c => (
                <div key={c.label} style={{ display:'flex', gap:14, alignItems:'flex-start', marginBottom:22 }}>
                  <div style={{ width:46, height:46, borderRadius:10, background:'#1b9e2d', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, flexShrink:0, boxShadow:'0 6px 18px rgba(27,158,45,0.28)' }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize:11, fontWeight:800, letterSpacing:'1.5px', color:'#1b9e2d', textTransform:'uppercase', marginBottom:4 }}>{c.label}</div>
                    <div style={{ fontSize:clamp(13,14), color:'#333', lineHeight:1.65, whiteSpace:'pre-line' }}>{c.val}</div>
                  </div>
                </div>
              ))}

              {/* decorative barcode */}
              <div style={{ marginTop:32, display:'flex', gap:3, alignItems:'flex-end' }}>
                {[28,14,36,20,10,32,18,24,8,30,16,22,12,34,10].map((h,i) => (
                  <div key={i} style={{ width:i%2===0?5:2, height:h, background:'#1b9e2d', borderRadius:2, opacity:.35+i/22 }} />
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="reveal-right" style={{ background:'#f4f4f2', borderRadius:16, padding:'clamp(24px,5vw,50px) clamp(20px,4vw,44px)', border:'1px solid #e4e4e2' }}>

              {status === 'success' ? (
                <div style={{ textAlign:'center', padding:'clamp(36px,8vw,64px) 0' }}>
                  <div style={{ fontSize:68, marginBottom:20, animation:'scaleIn .5s ease' }}>✅</div>
                  <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(24px,4vw,38px)', fontWeight:800, textTransform:'uppercase', color:'#0a0a0a', marginBottom:12 }}>
                    Thank You!
                  </h3>
                  <p style={{ fontSize:15, color:'#555', lineHeight:1.75, marginBottom:28 }}>
                    Your enquiry has been sent to<br />
                    <strong style={{ color:'#1b9e2d' }}>{TO_EMAIL}</strong><br />
                    We'll get back to you within 24 hours.
                  </p>
                  <button onClick={reset} className="btn-green">Send Another Enquiry</button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                  <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(20px,3vw,32px)', fontWeight:800, textTransform:'uppercase', color:'#0a0a0a', marginBottom:24 }}>
                    Request a Quote
                  </h3>

                  <div className="form-2col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input name="from_name" type="text" placeholder="Your full name" required />
                    </div>
                    <div className="form-group">
                      <label>Company</label>
                      <input name="company" type="text" placeholder="Company name" />
                    </div>
                  </div>

                  <div className="form-2col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                    <div className="form-group">
                      <label>Email *</label>
                      <input name="from_email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Product / Service Interest</label>
                    <select name="product">
                      <option value="">Select a product or service</option>
                      {PRODUCTS.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Message / Requirements *</label>
                    <textarea name="message" placeholder="Describe your requirements — size, quantity, material, timeline, etc." required />
                  </div>

                  {/* hidden routing field */}
                  <input type="hidden" name="to_email" value={TO_EMAIL} />

                  {status === 'error' && (
                    <div style={{ background:'#fef2f2', border:'1px solid #fecaca', borderRadius:8, padding:'12px 16px', marginBottom:14, fontSize:13, color:'#b91c1c' }}>
                      ⚠️ {errMsg}
                    </div>
                  )}

                  <button type="submit" className="btn-green" disabled={status === 'sending'}
                    style={{ width:'100%', justifyContent:'center', padding:14, fontSize:14, marginTop:4 }}>
                    {status === 'sending' ? '⏳ Sending…' : `Send Enquiry → ${TO_EMAIL}`}
                  </button>

                  <p style={{ fontSize:12, color:'#999', textAlign:'center', marginTop:12 }}>
                    Enquiry delivered directly to <strong>{TO_EMAIL}</strong> · Reply within 24 h
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

/* tiny helper — CSS clamp not valid in JS */
function clamp(min, val) { return val; }
