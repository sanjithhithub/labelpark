import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import labelpainImg from "../assets/images/labelpain.jpg";
import holographiclabelImg from "../assets/images/holographiclabel.jpg";
import jeweleylabelImg from "../assets/images/jeweleylabel.jpg";
import RibbonlabelImg from "../assets/images/Ribbonlabel.jpg";

/* ── Hero images for sliding banner ─────────────────────── */
import factoryImg from "../assets/images/factory_floor.png";
import barcodeImg from "../assets/images/barcode_labels.png";

function Counter({ target, suffix = "" }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const steps = 60,
            dur = 1800,
            inc = target / steps;
          let cur = 0;
          const t = setInterval(() => {
            cur = Math.min(cur + inc, target);
            setN(Math.floor(cur));
            if (cur >= target) clearInterval(t);
          }, dur / steps);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* ── Auto-Sliding Banner Component ─────────────────────── */
function SlidingBanner({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "18px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: `${images.length * 100}%`,
          height: "100%",
          transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            style={{
              width: `${100 / images.length}%`,
              height: "100%",
              position: "relative",
            }}
          >
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(4,32,10,0.3) 0%, transparent 60%)",
              }}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 10,
          zIndex: 10,
          background: "rgba(0,0,0,0.4)",
          padding: "10px 16px",
          borderRadius: "50px",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: currentIndex === idx ? 32 : 10,
              height: 10,
              borderRadius: 5,
              border: "none",
              background:
                currentIndex === idx
                  ? "linear-gradient(90deg, #3dd958 0%, #2ec94a 100%)"
                  : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              transition: "all 0.4s ease",
              boxShadow:
                currentIndex === idx ? "0 0 12px rgba(61,217,88,0.6)" : "none",
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "8px",
          padding: "8px 14px",
          fontSize: "12px",
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "1px",
          zIndex: 10,
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default function Home() {
  useScrollReveal();

  const featured = [
    { img: labelpainImg, name: "Barcode Stickers", tag: "Auto ID" },
    { img: holographiclabelImg, name: "Holographic Labels", tag: "Premium" },
    { img: jeweleylabelImg, name: "Jewelry Labels", tag: "Precision" },
    { img: RibbonlabelImg, name: "Thermal Ribbon", tag: "Consumables" },
  ];

  const industries = [
    ["👗", "Garments"],
    ["🍺", "Breweries"],
    ["💄", "Cosmetics"],
    ["🍽️", "Food & Bev"],
    ["💊", "Pharma"],
    ["🚗", "Automotive"],
    ["🏭", "Mfg."],
    ["🛒", "Retail"],
  ];

  const heroImages = [factoryImg, barcodeImg];

  return (
    <div className="page-enter">
      {/* ══════════════════════════════════════════════════════
          HERO SECTION WITH SLIDING BANNER
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          marginTop: "var(--nav-h,82px)",
          minHeight: "92vh",
          background:
            "linear-gradient(135deg,#04200a 0%,#083d10 22%,#0e6b1b 52%,#1b9e2d 75%,#2ec94a 100%)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          position: "relative",
          overflow: "hidden",
        }}
        className="hero-grid"
      >
        <style>{`
          @media (max-width: 968px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              min-height: auto !important;
            }
          }
        `}</style>
        <div
          className="barcode-bg"
          style={{ position: "absolute", inset: 0 }}
        />

        {/* ════════════════════
            LEFT SIDE — Text Content
        ════════════════════ */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(60px,8vw,110px) clamp(24px,5vw,72px)",
            paddingBottom: "clamp(100px,12vw,160px)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 32,
              padding: "8px 20px",
              marginBottom: 26,
              backdropFilter: "blur(8px)",
              width: "fit-content",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#3dd958",
                display: "inline-block",
                boxShadow: "0 0 8px #3dd958",
              }}
            />
            <span
              style={{
                fontSize: "clamp(10px,1.2vw,12px)",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Tiruppur Leading Label Manufacturer
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "clamp(48px,7vw,108px)",
              fontWeight: 900,
              lineHeight: 0.9,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "-2px",
              marginBottom: 22,
              animation: "fadeUp .7s ease both",
            }}
          >
            Precision
            <br />
            <span style={{ color: "rgba(255,255,255,0.3)" }}>Labels &</span>
            <br />
            Auto ID
            <br />
            <span
              style={{
                color: "#3dd958",
                textShadow: "0 0 40px rgba(61,217,88,0.4)",
              }}
            >
              Solutions
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(14px,1.5vw,18px)",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.84)",
              maxWidth: 480,
              marginBottom: 38,
              animation: "fadeUp .7s .15s ease both",
            }}
          >
            Manufacturing superior quality barcode labels, multicolor stickers,
            hot foil & self-adhesive labels for garment, pharma, food &
            beverage, and automobile industries.
          </p>

          <div
            className="hero-btns"
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              animation: "fadeUp .7s .25s ease both",
            }}
          >
            <Link to="/products">
              <button className="btn-white">Explore Products</button>
            </Link>
            <Link to="/contact">
              <button className="btn-ghost-white">Get a Free Quote →</button>
            </Link>
          </div>
        </div>

        {/* ════════════════════
            RIGHT SIDE — Sliding Banner
        ════════════════════ */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(20px,3vw,40px) clamp(30px,4vw,60px)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.13) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "60%",
              height: "60%",
              background:
                "radial-gradient(circle, rgba(61,217,88,0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
              zIndex: 1,
            }}
          />

          <div
            style={{
              position: "relative",
              width: "90%",
              height: "88%",
              maxWidth: "800px",
              maxHeight: "650px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow:
                "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)",
              border: "3px solid rgba(255,255,255,0.15)",
              background: "rgba(0,0,0,0.2)",
              backdropFilter: "blur(10px)",
              zIndex: 2,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "18px",
                background:
                  "linear-gradient(135deg, rgba(61,217,88,0.1) 0%, transparent 50%, rgba(61,217,88,0.1) 100%)",
                pointerEvents: "none",
                zIndex: 10,
              }}
            />

            <SlidingBanner images={heroImages} />
          </div>
        </div>

        {/* ── Stats Bar at Bottom ────────────────────────── */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              maxWidth: 1360,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              padding: "clamp(14px,2.5vw,24px) clamp(20px,4vw,60px)",
              gap: 2,
            }}
          >
            {[
              { n: 10, s: "+", l: "Years" },
              { n: 8, s: "+", l: "Categories" },
              { n: 6, s: "+", l: "Industries" },
              { n: 100, s: "%", l: "Satisfaction" },
            ].map((s) => (
              <div
                key={s.l}
                style={{
                  textAlign: "center",
                  padding: "clamp(6px,1vw,10px)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "clamp(22px,3.5vw,42px)",
                    fontWeight: 900,
                    color: "#3dd958",
                    lineHeight: 1,
                  }}
                >
                  <Counter target={s.n} suffix={s.s} />
                </div>
                <div
                  style={{
                    fontSize: "clamp(8px,0.9vw,11px)",
                    letterSpacing: "1px",
                    color: "rgba(255,255,255,0.7)",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHO WE ARE SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="lp-section" style={{ background: "#fff" }}>
        <div className="lp-container">
          <div className="lp-grid-2" style={{ alignItems: "center" }}>
            <div className="reveal-left">
              <div className="section-eyebrow">Who We Are</div>
              <h2
                className="section-title"
                style={{ fontSize: "clamp(28px,4vw,60px)", marginBottom: 18 }}
              >
                South India's Premier
                <br />
                <span style={{ color: "#1b9e2d" }}>Auto ID Partner</span>
              </h2>
              <p
                style={{
                  fontSize: "clamp(14px,1.5vw,16px)",
                  lineHeight: 1.88,
                  color: "#555",
                  marginBottom: 14,
                }}
              >
                LABEL PARK is one of the leading manufacturers and exporters of
                barcode labels, multicolor labels, hot foil stickers, and
                self-adhesive labels. Incorporated in Chennai, we are the
                leading <strong>Retail & Auto ID Solution</strong> provider in
                South India.
              </p>
              <p
                style={{
                  fontSize: "clamp(14px,1.5vw,16px)",
                  lineHeight: 1.88,
                  color: "#555",
                  marginBottom: 30,
                }}
              >
                For over a decade, we listen closely to our customers to provide
                the most cost-effective solutions — from custom labels to
                printers, scanners and ribbons.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link to="/about">
                  <button className="btn-green">Learn About Us</button>
                </Link>
                <Link to="/contact">
                  <button className="btn-outline">Contact Us</button>
                </Link>
              </div>
            </div>

            <div
              className="advantages-grid reveal-right"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              {[
                {
                  icon: "🏆",
                  title: "10+ Years Excellence",
                  desc: "A decade of superior quality labels for South India.",
                },
                {
                  icon: "⚙️",
                  title: "Total Solution",
                  desc: "Labels, printers, scanners & ribbons — one roof.",
                },
                {
                  icon: "💰",
                  title: "Best Pricing",
                  desc: "Maximum efficiency, competitive prices for you.",
                },
                {
                  icon: "🤝",
                  title: "Customer First",
                  desc: "Your success is our vision — every single order.",
                },
              ].map((f, i) => (
                <div
                  key={f.title}
                  className={`reveal delay-${i + 1}`}
                  style={{
                    background: "#f4f4f2",
                    borderRadius: 10,
                    padding: "clamp(14px,2vw,22px) clamp(12px,1.5vw,18px)",
                    borderLeft: "4px solid #1b9e2d",
                    transition: "transform .3s,box-shadow .3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 28px rgba(0,0,0,0.09)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(22px,2.5vw,28px)",
                      marginBottom: 8,
                    }}
                  >
                    {f.icon}
                  </div>
                  <h4
                    style={{
                      fontWeight: 700,
                      fontSize: "clamp(12px,1.2vw,14px)",
                      color: "#111",
                      marginBottom: 5,
                    }}
                  >
                    {f.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "clamp(11px,1vw,13px)",
                      color: "#666",
                      lineHeight: 1.6,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ─────────────────────────── */}
      <section className="lp-section" style={{ background: "#f4f4f2" }}>
        <div className="lp-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 42,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <div className="section-eyebrow reveal">Our Products</div>
              <h2
                className="section-title reveal"
                style={{ fontSize: "clamp(26px,4vw,56px)" }}
              >
                Featured <span style={{ color: "#1b9e2d" }}>Products</span>
              </h2>
            </div>
            <Link to="/products" className="reveal">
              <button className="btn-outline">View All →</button>
            </Link>
          </div>
          <div className="lp-grid-4">
            {featured.map((p, i) => (
              <Link
                key={p.name}
                to="/products"
                className={`card reveal delay-${i + 1}`}
                style={{ display: "block", color: "inherit" }}
              >
                <div
                  style={{
                    height: "clamp(130px,16vw,200px)",
                    overflow: "hidden",
                    background: "#e0e0de",
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform .5s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.08)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </div>
                <div
                  style={{
                    padding:
                      "clamp(10px,1.5vw,18px) clamp(12px,1.5vw,20px) clamp(12px,1.5vw,22px)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "#0e6b1b",
                      background: "#e6f7e8",
                      padding: "3px 10px",
                      borderRadius: 20,
                    }}
                  >
                    {p.tag}
                  </span>
                  <h3
                    style={{
                      marginTop: 8,
                      fontWeight: 700,
                      fontSize: "clamp(13px,1.4vw,16px)",
                      color: "#0a0a0a",
                    }}
                  >
                    {p.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────── */}
      <section
        className="lp-section"
        style={{
          background: "#0a0a0a",
          paddingTop: "clamp(36px,6vw,64px)",
          paddingBottom: "clamp(36px,6vw,64px)",
        }}
      >
        <div className="lp-container">
          <div className="lp-grid-4" style={{ gap: 2 }}>
            {[
              { n: 10, s: "+", l: "Years in Business" },
              { n: 8, s: "+", l: "Product Categories" },
              { n: 6, s: "+", l: "Industries Served" },
              { n: 100, s: "%", l: "Customer Satisfaction" },
            ].map((s) => (
              <div
                key={s.l}
                style={{
                  textAlign: "center",
                  padding: "clamp(24px,4vw,44px) 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 4,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "clamp(36px,6vw,64px)",
                    fontWeight: 900,
                    color: "#3dd958",
                    lineHeight: 1,
                  }}
                >
                  <Counter target={s.n} suffix={s.s} />
                </div>
                <div
                  style={{
                    fontSize: "clamp(9px,1vw,12px)",
                    letterSpacing: "2px",
                    color: "rgba(255,255,255,0.55)",
                    textTransform: "uppercase",
                    marginTop: 8,
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────── */}
      <section className="lp-section" style={{ background: "#f4f4f2" }}>
        <div className="lp-container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-eyebrow reveal">Industries We Serve</div>
            <h2
              className="section-title reveal"
              style={{ fontSize: "clamp(26px,4vw,56px)" }}
            >
              Our Labels Work{" "}
              <span style={{ color: "#1b9e2d" }}>Everywhere</span>
            </h2>
          </div>
          <div className="lp-grid-8">
            {industries.map(([icon, label]) => (
              <div key={label} className="industry-item">
                <div
                  style={{ fontSize: "clamp(22px,3vw,32px)", marginBottom: 8 }}
                >
                  {icon}
                </div>
                <div
                  style={{
                    fontSize: "clamp(9px,1vw,11px)",
                    fontWeight: 700,
                    letterSpacing: ".5px",
                    textTransform: "uppercase",
                    color: "#000000",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────── */}
      <section className="lp-section" style={{ background: "#fff" }}>
        <div className="lp-container">
          <div
            className="reveal cta-flex"
            style={{
              background:
                "linear-gradient(135deg,#0e6b1b 0%,#1b9e2d 60%,#2ec94a 100%)",
              borderRadius: 18,
              padding: "clamp(32px,5vw,64px) clamp(24px,5vw,72px)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 28,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              className="barcode-bg"
              style={{ position: "absolute", inset: 0, opacity: 0.5 }}
            />
            <div style={{ position: "relative", zIndex: 2 }}>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "clamp(26px,4vw,56px)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "#fff",
                  lineHeight: 1.05,
                  marginBottom: 10,
                }}
              >
                Ready to Order
                <br />
                Custom Labels?
              </h2>
              <p
                style={{
                  fontSize: "clamp(14px,1.5vw,17px)",
                  color: "rgba(255,255,255,0.82)",
                  fontWeight: 300,
                }}
              >
                Get in touch for a free quote tailored to your requirements.
              </p>
            </div>
            <div
              className="cta-btns"
              style={{
                display: "flex",
                gap: 14,
                position: "relative",
                zIndex: 2,
                flexWrap: "wrap",
              }}
            >
              <Link to="/contact">
                <button className="btn-white">Get a Free Quote</button>
              </Link>
              <Link to="/products">
                <button className="btn-ghost-white">View Products</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
