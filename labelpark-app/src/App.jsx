import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home     from './pages/Home';
import About    from './pages/About';
import Products from './pages/Products';
import Printers from './pages/Printers';
import Scanners from './pages/Scanners';
import Services from './pages/Services';
import Contact  from './pages/Contact';

/* Scroll to top on route change */
function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/printers" element={<Printers />} />
            <Route path="/scanners" element={<Scanners />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact"  element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
