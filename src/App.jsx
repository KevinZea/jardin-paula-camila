import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Navbar/Home/Home"
import Footer from "./components/Navbar/Footer/Footer"
import Facilities from "./components/Facilities/Facilities"
import About from "./components/About/About"
import ContactForm from "./components/Contact/Contact"
import ActivityGallery from "./components/Activities/Activities"
import WhatsAppButton from "./components/WhatsappButton/WhatsappButton"

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home isMobile={isMobile}/>} />
        <Route path="/instalaciones" element={<Facilities />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<ContactForm />} />
        <Route path="/actividades" element={<ActivityGallery />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </>
  )
}

export default App
