import React from "react";

function Hero() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero"
      className="hero bg-gradient-to-r from-green-700 to-yellow-600 text-white py-32 px-8 md:px-16 lg:flex lg:items-center lg:justify-between mt-13"
    >
      <div className="lg:max-w-lg" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nikmati Kelezatan dan Manfaat Kurma, Madu, & Garam Himalaya
        </h1>
        <p className="mb-6 text-lg">
          Produk oleh-oleh haji dan umroh terbaik yang penuh berkah dan kebaikan
          alami.
        </p>
        <button
          className="bg-white text-green-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
          onClick={(e) => handleSmoothScroll(e, "products")}
        >
          Belanja Sekarang
        </button>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-1/2" data-aos="fade-left">
        <img
          src="/images/hero-image.jpg"
          alt="Dates and Honey"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default Hero;
