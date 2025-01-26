import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1
            className="text-2xl font-bold text-green-700"
            data-aos="flip-left"
          >
            AlfarathaKurma
          </h1>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <svg
                className={`h-6 w-6 transform ${menuOpen ? "rotate-90" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex md:space-x-4 w-full md:w-auto bg-white md:bg-transparent md:static absolute top-full left-0 md:left-auto px-6 py-4 md:py-0 shadow-md md:shadow-none`}
          >
            <a
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, "hero")}
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              data-aos="flip-down"
            >
              Home
            </a>
            <a
              href="#products"
              onClick={(e) => handleSmoothScroll(e, "products")}
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              data-aos="flip-down"
            >
              Produk
            </a>
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, "features")}
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              data-aos="flip-down"
            >
              Keunggulan
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleSmoothScroll(e, "testimonials")}
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              data-aos="flip-down"
            >
              Testimoni
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              data-aos="flip-down"
            >
              Kontak
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
