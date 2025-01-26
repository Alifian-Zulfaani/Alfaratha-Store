import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 1000, once: true });
    }
  }, []);

  return (
    <div className="font-sans scroll-smooth overflow-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
