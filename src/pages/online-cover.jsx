import React, { useState } from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import ajioImg from "../assets/images/ajio_cover.jpg";
import amazonImg from "../assets/images/amazon_cover.jpg";
import flipkartImg from "../assets/images/flipkart_cover.jpg";
import myntraImg from "../assets/images/myntra_cover.webp";

/* ─────────────────────────────────────────
   Cover product data
───────────────────────────────────────── */
const covers = [
  {
    img: ajioImg,
    brand: "AJIO",
    type: "White LDPE Poly Courier Bag",
    tag: "Fashion",
    tagBg: "#e6faf7",
    tagColor: "#0a7a68",
    accentBg: "#f0faf8",
    accentColor: "#0a7a68",
    desc: 'Premium white LDPE courier bag manufactured to AJIO\'s brand standards. Features "Easy Returns", "Assured Quality", and "Doorstep Exchange" messaging with a customer-care instruction panel — purpose-built for fashion and apparel e-commerce logistics across India.',
    specs: [
      { label: "Material", value: "LDPE / HDPE Poly Film" },
      { label: "Finish", value: "Matte White" },
      { label: "Print", value: "Flexographic" },
      { label: "Thickness", value: "50 – 60 Micron" },
      { label: "Seal", value: "Peel & Seal Strip" },
      { label: "Sizes", value: '10×14, 12×16, 14×18, 16×22"' },
      { label: "MOQ", value: "500 pcs" },
      { label: "Lead Time", value: "5 – 7 working days" },
    ],
    features: [
      "Tamper-Proof Seal",
      "Returns Info Panel",
      "Waterproof Body",
      "Flexo Printed",
    ],
    usedFor: "Apparel · Kurtas · Ethnic Wear · Footwear · Accessories",
  },
  {
    img: amazonImg,
    brand: "Amazon.in",
    type: "All-Over Print White Poly Mailer",
    tag: "E-Commerce",
    tagBg: "#fff4e8",
    tagColor: "#c45000",
    accentBg: "#fff9f2",
    accentColor: "#c45000",
    desc: 'Iconic white courier polybag with Amazon\'s trademark repeating "a" logo pattern printed across the entire surface. Centre panel features "Purchased on amazon.in — India\'s Largest Online Store" branding. Co-extruded HDPE/LLDPE film gives superior puncture resistance and load capacity.',
    specs: [
      { label: "Material", value: "HDPE / LLDPE Co-Extruded" },
      { label: "Finish", value: "Semi-Gloss White" },
      { label: "Print", value: "Gravure / Flexo All-Over" },
      { label: "Thickness", value: "60 – 80 Micron" },
      { label: "Seal", value: "Pressure Sensitive Peel & Seal" },
      { label: "Sizes", value: '10×14, 12×16, 14×18, 16×24"' },
      { label: "MOQ", value: "1000 pcs" },
      { label: "Lead Time", value: "5 – 7 working days" },
    ],
    features: [
      "All-Over Logo Print",
      "Puncture Resistant",
      "Tamper-Evident Seal",
      "Barcode Space Panel",
    ],
    usedFor: "Electronics · Books · Fashion · Beauty · General Goods",
  },
  {
    img: flipkartImg,
    brand: "Flipkart",
    type: "Transparent POD Poly Cover",
    tag: "Logistics",
    tagBg: "#eef3ff",
    tagColor: "#1a56d6",
    accentBg: "#f2f6ff",
    accentColor: "#1a56d6",
    desc: 'Transparent LDPE courier cover with Flipkart\'s bold blue branding strip and "Fi" logo. The built-in POD (Proof of Delivery) document sleeve lets courier agents scan barcodes and read shipping labels without opening the package — speeding up last-mile delivery verification significantly.',
    specs: [
      { label: "Material", value: "Clear LDPE Poly Film" },
      { label: "Finish", value: "High-Clarity Transparent" },
      { label: "Print", value: "Blue Brand Strip + Logo" },
      { label: "Thickness", value: "60 – 80 Micron" },
      { label: "Seal", value: "Pressure Sensitive Peel & Seal" },
      { label: "Sizes", value: '9×12, 12×16, 14×18, 16×22"' },
      { label: "MOQ", value: "1000 pcs" },
      { label: "Lead Time", value: "5 – 7 working days" },
    ],
    features: [
      "Built-in POD Sleeve",
      "High-Clarity Film",
      "Bold Blue Brand Strip",
      "Tamper-Evident",
    ],
    usedFor: "Electronics · Cosmetics · Books · Toys · Clothing",
  },
  {
    img: myntraImg,
    brand: "Myntra",
    type: "Kraft Paper Courier Bag — 100% Recyclable",
    tag: "Eco Premium",
    tagBg: "#fdf6e8",
    tagColor: "#8a5c1a",
    accentBg: "#fdf8ee",
    accentColor: "#8a5c1a",
    desc: 'Eco-conscious golden-brown kraft paper courier bag with Myntra\'s "Fashion with a Side of Fun!" tagline, signature border print, and 100% Recyclable mark. The premium paper texture delivers a luxury unboxing experience that no synthetic bag can match — a genuine sustainability statement.',
    specs: [
      { label: "Material", value: "Virgin Kraft Paper" },
      { label: "Finish", value: "Natural Golden Brown" },
      { label: "Print", value: "Flexo — Water-Based Inks" },
      { label: "Thickness", value: "90 – 120 GSM" },
      { label: "Seal", value: "Self-Adhesive Glue Strip" },
      { label: "Sizes", value: "A5 · A4 · A3 · Custom" },
      { label: "MOQ", value: "500 pcs" },
      { label: "Lead Time", value: "7 – 10 working days" },
    ],
    features: [
      "100% Recyclable",
      "Premium Kraft Feel",
      "Water-Based Inks",
      "Border Print Design",
    ],
    usedFor: "Fashion · Ethnic Wear · Footwear · Accessories · Luxury Brands",
  },
];

/* ─────────────────────────────────────────
   Why Label Park capability cards
───────────────────────────────────────── */
const capabilities = [
  {
    icon: "🏭",
    title: "Direct Manufacturer",
    desc: "No middlemen — factory pricing direct from our Tiruppur plant with full control over quality every batch.",
  },
  {
    icon: "🖨️",
    title: "In-House Printing",
    desc: "Multi-colour flexographic and gravure presses for sharp, consistent branding on every piece we produce.",
  },
  {
    icon: "✅",
    title: "100% QC Inspection",
    desc: "Print clarity, seal strength, and dimensional accuracy are checked on every batch before dispatch.",
  },
  {
    icon: "📦",
    title: "Low MOQ from 500 pcs",
    desc: "Suitable for growing sellers and large distributors alike — no over-commitment required.",
  },
  {
    icon: "🚀",
    title: "Pan India Dispatch",
    desc: "Fast dispatch from Tiruppur — reaching logistics hubs across India in 2 to 3 business days.",
  },
  {
    icon: "🎨",
    title: "Custom Branding",
    desc: "D2C brands and fashion labels can get courier bags printed under their own brand identity at the same quality.",
  },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function OnlineCover() {
  useScrollReveal();
  const [openBrand, setOpenBrand] = useState(null);

  const toggleBrand = (brand) => {
    setOpenBrand(openBrand === brand ? null : brand);
  };

  return (
    <div className="page-enter">
      {/* ══════════ HERO ══════════ */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link to="/" className="bc-home">
              Home
            </Link>
            <span className="bc-sep">›</span>
            <Link to="/products" className="bc-home">
              Products
            </Link>
            <span className="bc-sep">›</span>
            <span className="bc-current">Online Covers</span>
          </div>
          <div
            className="section-eyebrow"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Courier Packaging
          </div>
          <h1
            className="section-title"
            style={{
              fontSize: "clamp(36px,7vw,84px)",
              color: "#fff",
              marginBottom: 16,
            }}
            dangerouslySetInnerHTML={{
              __html:
                'Online Courier <span style="color:#3dd958">Cover Bags</span>',
            }}
          />
          <p
            className="section-sub"
            style={{ color: "rgba(255,255,255,0.82)", maxWidth: 540 }}
          >
            Label Park manufactures branded courier bags for AJIO, Amazon,
            Flipkart and Myntra — direct from our Tiruppur factory with custom
            sizes, materials, and bulk pricing.
          </p>
        </div>
      </div>

      {/* ══════════ ABOUT LABEL PARK ══════════ */}
      <section className="lp-section" style={{ background: "#fff" }}>
        <div className="lp-container">
          {/* Heading */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(32px,5vw,52px)",
            }}
          >
            <div className="section-eyebrow">🏭 About Label Park</div>
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(24px,4vw,46px)",
                color: "#0a0a0a",
                marginBottom: 16,
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "Tiruppur's Trusted <span style='color:#0e6b1b'>Packaging Manufacturer</span>",
              }}
            />
            <p
              className="section-sub"
              style={{ color: "#555", maxWidth: 680, margin: "0 auto" }}
            >
              We are a direct manufacturer — not a trader. Our in-house plant in
              Tiruppur produces courier bags, barcode labels, and printed
              packaging for India's garment and e-commerce industry.
            </p>
          </div>

          {/* Two description boxes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(320px,100%), 1fr))",
              gap: "clamp(16px,2.5vw,32px)",
              marginBottom: "clamp(32px,5vw,52px)",
            }}
          >
            <div
              style={{
                background: "#f8fdf8",
                borderRadius: 16,
                padding: "clamp(20px,3vw,32px)",
                borderLeft: "4px solid #0e6b1b",
              }}
            >
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(16px,1.8vw,20px)",
                  color: "#0a0a0a",
                  marginBottom: 12,
                }}
              >
                Who We Are
              </h3>
              <p
                style={{
                  fontSize: "clamp(13px,1.4vw,15px)",
                  color: "#555",
                  lineHeight: 1.78,
                  margin: 0,
                }}
              >
                Label Park is a direct manufacturer based in Tiruppur, Tamil
                Nadu — not a reseller or trading company. Our plant runs
                in-house flexographic and gravure printing presses, precision
                cutting and sealing machinery, and a dedicated QC team. This
                means factory-direct pricing, faster lead times, and complete
                control over print consistency and material quality for every
                batch we dispatch to you.
              </p>
            </div>

            <div
              style={{
                background: "#f8fdf8",
                borderRadius: 16,
                padding: "clamp(20px,3vw,32px)",
                borderLeft: "4px solid #0e6b1b",
              }}
            >
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(16px,1.8vw,20px)",
                  color: "#0a0a0a",
                  marginBottom: 12,
                }}
              >
                What We Make
              </h3>
              <p
                style={{
                  fontSize: "clamp(13px,1.4vw,15px)",
                  color: "#555",
                  lineHeight: 1.78,
                  margin: 0,
                }}
              >
                Our online courier cover range is manufactured to the exact
                material and print standards of each platform — AJIO's white
                LDPE bag with returns panel, Amazon's all-over logo poly mailer,
                Flipkart's transparent cover with POD sleeve, and Myntra's 100%
                recyclable kraft paper bag. Small sellers ordering 500 pcs and
                large distributors ordering 5 lakh pcs both receive the same
                quality from our line.
              </p>
            </div>
          </div>

          {/* Capability cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(240px,100%), 1fr))",
              gap: "clamp(12px,2vw,20px)",
            }}
          >
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`card reveal delay-${(i % 4) + 1}`}
                style={{ padding: "clamp(18px,2.5vw,28px)" }}
              >
                <div style={{ fontSize: 30, marginBottom: 12 }}>{cap.icon}</div>
                <h4
                  style={{
                    fontWeight: 800,
                    fontSize: 15,
                    color: "#0a0a0a",
                    marginBottom: 8,
                  }}
                >
                  {cap.title}
                </h4>
                <p
                  style={{
                    fontSize: 13,
                    color: "#666",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COVER PRODUCTS ══════════ */}
      <section className="lp-section" style={{ background: "#f4f4f2" }}>
        <div className="lp-container">
          {/* Heading */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(32px,5vw,52px)",
            }}
          >
            <div className="section-eyebrow">📦 Our Cover Range</div>
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(24px,4vw,46px)",
                color: "#0a0a0a",
                marginBottom: 16,
              }}
              dangerouslySetInnerHTML={{
                __html:
                  '4 Platform Covers <span style="color:#0e6b1b">We Manufacture</span>',
              }}
            />
            <p
              className="section-sub"
              style={{ color: "#555", maxWidth: 520, margin: "0 auto" }}
            >
              Click on any cover card to see full specifications, key features,
              and pricing details.
            </p>
          </div>

          {/* Cover cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(280px,100%), 1fr))",
              gap: "clamp(14px,2vw,26px)",
            }}
          >
            {covers.map((cv, i) => (
              <div
                key={cv.brand}
                className={`card reveal delay-${(i % 4) + 1}`}
                style={{
                  cursor: "pointer",
                  outline:
                    openBrand === cv.brand
                      ? `2px solid ${cv.accentColor}`
                      : "2px solid transparent",
                  outlineOffset: 0,
                  transition: "outline-color .25s",
                }}
                onClick={() => toggleBrand(cv.brand)}
              >
                {/* ── Image area ── */}
                <div
                  style={{
                    height: "clamp(200px,22vw,280px)",
                    overflow: "hidden",
                    background: cv.accentBg,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={cv.img}
                    alt={cv.brand + " courier bag"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      padding: 16,
                      transition: "transform .55s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                  {/* Tag badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: cv.tagColor,
                      background: cv.tagBg,
                      padding: "3px 10px",
                      borderRadius: 20,
                    }}
                  >
                    {cv.tag}
                  </span>
                  {/* MOQ badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      fontSize: 10,
                      fontWeight: 800,
                      color: "#fff",
                      background: cv.accentColor,
                      padding: "3px 10px",
                      borderRadius: 20,
                    }}
                  >
                    MOQ: {cv.specs.find((s) => s.label === "MOQ").value}
                  </span>
                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(0,0,0,0.12),transparent 60%)",
                    }}
                  />
                </div>

                {/* ── Text area ── */}
                <div
                  style={{
                    padding:
                      "clamp(14px,2vw,22px) clamp(16px,2vw,24px) clamp(14px,2vw,20px)",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: 800,
                      fontSize: "clamp(17px,1.8vw,21px)",
                      color: cv.accentColor,
                      marginBottom: 4,
                    }}
                  >
                    {cv.brand}
                  </h3>
                  <p
                    style={{
                      fontSize: 11,
                      color: "#999",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      marginBottom: 12,
                    }}
                  >
                    {cv.type}
                  </p>
                  <p
                    style={{
                      fontSize: "clamp(12px,1.2vw,13.5px)",
                      color: "#666",
                      lineHeight: 1.68,
                      marginBottom: 14,
                    }}
                  >
                    {cv.desc}
                  </p>

                  {/* Feature chips */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 14,
                    }}
                  >
                    {cv.features.map((f) => (
                      <span
                        key={f}
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "4px 10px",
                          borderRadius: 20,
                          background: cv.tagBg,
                          color: cv.tagColor,
                        }}
                      >
                        ✓ {f}
                      </span>
                    ))}
                  </div>

                  {/* Used for */}
                  <p
                    style={{ fontSize: 11.5, color: "#888", marginBottom: 12 }}
                  >
                    <strong style={{ color: "#555" }}>Best for:</strong>{" "}
                    {cv.usedFor}
                  </p>

                  {/* Expand toggle */}
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: cv.accentColor,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    {openBrand === cv.brand
                      ? "▲ Hide Specifications"
                      : "▼ View Full Specifications"}
                  </div>
                </div>

                {/* ── Expanded specs panel ── */}
                {openBrand === cv.brand && (
                  <div
                    style={{
                      borderTop: `2px solid ${cv.tagBg}`,
                      padding: "clamp(16px,2vw,24px)",
                      background: cv.accentBg,
                    }}
                  >
                    {/* Spec grid */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 8,
                        marginBottom: 16,
                      }}
                    >
                      {cv.specs.map((sp) => (
                        <div
                          key={sp.label}
                          style={{
                            background: "#fff",
                            borderRadius: 10,
                            padding: "10px 12px",
                            border: "1.5px solid #efefef",
                          }}
                        >
                          <div
                            style={{
                              fontSize: 9,
                              fontWeight: 700,
                              letterSpacing: "0.8px",
                              textTransform: "uppercase",
                              color: "#bbb",
                              marginBottom: 3,
                            }}
                          >
                            {sp.label}
                          </div>
                          <div
                            style={{
                              fontSize: 12.5,
                              fontWeight: 700,
                              color: "#111",
                            }}
                          >
                            {sp.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quote button */}
                    <Link to="/contact">
                      <button
                        style={{
                          width: "100%",
                          padding: "12px 0",
                          borderRadius: 10,
                          background: cv.accentColor,
                          color: "#fff",
                          border: "none",
                          fontSize: 14,
                          fontWeight: 800,
                          cursor: "pointer",
                          fontFamily: "inherit",
                          letterSpacing: "0.3px",
                        }}
                      >
                        📩 Get Quote for {cv.brand} Cover
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── Custom CTA ── same pattern as Products.jsx ── */}
          <div
            className="cta-flex reveal"
            style={{
              marginTop: "clamp(40px,6vw,64px)",
              background: "linear-gradient(135deg,#0e6b1b,#1b9e2d)",
              borderRadius: 14,
              padding: "clamp(28px,5vw,48px) clamp(24px,5vw,56px)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 24,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              className="barcode-bg"
              style={{ position: "absolute", inset: 0, opacity: 0.5 }}
            />
            <div style={{ position: "relative", zIndex: 2 }}>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "clamp(22px,3vw,34px)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "#fff",
                  marginBottom: 6,
                }}
              >
                Need Custom Branded Covers?
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.82)",
                  fontSize: "clamp(13px,1.4vw,15px)",
                }}
              >
                Any brand · Any colour · Any size — D2C brands, fashion labels
                and logistics companies welcome. Minimum order from 500 pcs with
                pan India delivery.
              </p>
            </div>
            <Link to="/contact" style={{ position: "relative", zIndex: 2 }}>
              <button className="btn-white">Request Custom Quote</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
