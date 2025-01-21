import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 1000, once: true });
    }
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
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

      {/* Hero Section */}
      <section
        id="hero"
        className="hero bg-gradient-to-r from-green-700 to-yellow-600 text-white py-32 px-8 md:px-16 lg:flex lg:items-center lg:justify-between mt-16"
      >
        <div className="lg:max-w-lg" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nikmati Kelezatan dan Manfaat Kurma, Madu, & Garam Himalaya
          </h1>
          <p className="mb-6 text-lg">
            Produk oleh-oleh haji dan umroh terbaik yang penuh berkah dan
            kebaikan alami.
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
      </section>

      {/* Produk Unggulan */}
      <section id="products" className="products py-20 px-8 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Produk Unggulan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Row 1 */}
          <div
            className="product-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
          >
            <img
              src="/images/kurma-sukari.jpg"
              alt="Kurma Sukari"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Kurma Sukari</h3>
            <p className="text-gray-600">
              Kurma premium dengan rasa manis alami dan tekstur lembut, kaya
              serat dan nutrisi yang cocok untuk sajian sehat dan energi instan.
            </p>
          </div>
          <div
            className="product-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
          >
            <img
              src="/images/madu-khasmir.jpg"
              alt="Madu Alami"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Madu Khasmir</h3>
            <p className="text-gray-600">
              Madu murni dari Kashmir dengan aroma khas dan rasa manis yang
              lembut, penuh manfaat untuk meningkatkan kekebalan tubuh dan
              menjaga kesehatan.
            </p>
          </div>
          <div
            className="product-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
          >
            <img
              src="/images/garam-himalaya.jpg"
              alt="Garam Himalaya"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Garam Himalaya</h3>
            <p className="text-gray-600">
              Garam alami dari pegunungan Himalaya yang kaya mineral, pilihan
              terbaik untuk memasak sehat dan menjaga keseimbangan elektrolit
              tubuh.
            </p>
          </div>
          {/* Row 2 */}
          <div
            className="product-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
          >
            <img
              src="/images/zam-zam.jpg"
              alt="Zam Zam"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Zam Zam</h3>
            <p className="text-gray-600">
              Air zam zam berkualitas tinggi dengan rasa menyegarkan dan kaya
              manfaat untuk kesehatan tubuh Anda.
            </p>
          </div>
          <div
            className="product-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
          >
            <img
              src="/images/coklat-truffle.jpg"
              alt="Coklat Truffle"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Coklat Truffle</h3>
            <p className="text-gray-600">
              Lezatnya coklat premium dengan sentuhan madu manis alami yang
              memanjakan lidah dan menyehatkan tubuh.
            </p>
          </div>
          <div
            className="product-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
          >
            <img
              src="/images/kacang-fustuk.jpg"
              alt="Kacang Fustuk"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Kacang Fustuk</h3>
            <p className="text-gray-600">
              Kenikmatan kacang pistachio kaya akan mineral, sempurna untuk
              camilan sehat dan menjaga vitalitas.
            </p>
          </div>
          {/* Row 3 */}
          <div
            className="product-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
          >
            <img
              src="/images/kismis-manis.jpg"
              alt="Kismis Manis"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Kismis Manis</h3>
            <p className="text-gray-600">
              Manisnya kismis pilihan yang penuh nutrisi, camilan sehat untuk
              menambah energi dan memperkaya rasa masakan.
            </p>
          </div>
          <div
            className="product-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
          >
            <img
              src="/images/kacang-almond.jpg"
              alt="Kacang Almond"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Kacang Almond</h3>
            <p className="text-gray-600">
              Almond berkualitas dengan tekstur renyah dan manfaat kesehatan
              yang luar biasa, kaya vitamin dan mineral.
            </p>
          </div>
          <div
            className="product-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
          >
            <img
              src="/images/kacang-humus.jpg"
              alt="Kacang Humus"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Kacang Humus</h3>
            <p className="text-gray-600">
              Kacang chickpea berkualitas tinggi, sempurna untuk hidangan humus
              lezat dan camilan kaya serat serta protein.
            </p>
          </div>
          {/* Row 4 */}
          <div
            className="product-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
          >
            <img
              src="/images/coklat-kerikil.jpg"
              alt="Coklat Kerikil"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Coklat Kerikil</h3>
            <p className="text-gray-600">
              Coklat unik berbentuk kerikil dengan kombinasi rasa manis dan
              tekstur renyah yang menggoda, sempurna untuk camilan istimewa dan
              hadiah menarik.
            </p>
          </div>
          <div
            className="product-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
          >
            <img
              src="/images/kurma-khalas.jpg"
              alt="Kurma Khalas"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Kurma Khalas Saad</h3>
            <p className="text-gray-600">
              Kurma Khalas premium dengan rasa manis karamel alami dan tekstur
              lembut, pilihan terbaik untuk camilan sehat dan berbuka puasa.
            </p>
          </div>
          <div
            className="product-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
          >
            <img
              src="/images/tunis-alger.jpg"
              alt="Kurma Tunis"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Kurma Tunis Madu</h3>
            <p className="text-gray-600">
              Kurma Tunis yang dibalut dengan manisnya madu alami, memberikan
              kombinasi rasa yang lezat dan kaya energi untuk tubuh.
            </p>
          </div>
          {/* Row 5 */}
          <div
            className="product-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
          >
            <img
              src="/images/kurma-ajwa.jpg"
              alt="Kurma Ajwa"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Kurma Ajwa</h3>
            <p className="text-gray-600">
              Kurma Ajwa pilihan, dikenal sebagai “Kurma Nabi,” dengan rasa
              manis khas dan manfaat kesehatan yang luar biasa untuk menjaga
              vitalitas.
            </p>
          </div>
          <div
            className="product-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
          >
            <img
              src="/images/kurma-ruthob.jpg"
              alt="Kurma Ruthob"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Kurma Ruthob Libya</h3>
            <p className="text-gray-600">
              Kurma Ruthob segar dari Libya, manis dan lembut dengan tekstur
              juicy yang sempurna untuk pencinta kurma muda berkualitas.
            </p>
          </div>
          <div
            className="product-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
          >
            <img
              src="/images/gift-haji-umroh.jpg"
              alt="Gift Haji Umroh"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Gift Haji Umroh</h3>
            <p className="text-gray-600">
              Pilihan hadiah eksklusif dengan kemasan elegan, berisi produk
              berkualitas seperti kurma, madu, dan camilan sehat untuk menyambut
              kepulangan haji atau umroh.
            </p>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section
        id="features"
        className="features bg-green-50 py-20 px-8 md:px-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Kenapa Memilih Kami?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-item text-center" data-aos="fade-left">
            <h3 className="text-xl font-semibold mb-4">Produk Alami</h3>
            <p className="text-gray-600">
              Dipilih dari bahan berkualitas tinggi untuk manfaat kesehatan.
            </p>
          </div>
          <div className="feature-item text-center" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-4">Sertifikasi Halal</h3>
            <p className="text-gray-600">
              Dijamin halal sesuai standar syariah.
            </p>
          </div>
          <div className="feature-item text-center" data-aos="fade-right">
            <h3 className="text-xl font-semibold mb-4">Berbagai Pilihan</h3>
            <p className="text-gray-600">
              Tersedia pilihan lengkap untuk kebutuhan oleh-oleh haji dan umroh.
            </p>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimonials" className="testimonials py-20 px-8 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Apa Kata Pelanggan?
        </h2>
        <div className="space-y-8">
          <div
            className="testimonial-item bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-right"
          >
            <p className="text-lg italic mb-4">
              "Oleh-oleh haji umroh yang sangat berkualitas dan terpercaya,
              dijamin puas saat pesanan tiba."
            </p>
            <p className="text-right font-semibold">- Zulfan, Klaten</p>
          </div>
          <div
            className="testimonial-item bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-right"
          >
            <p className="text-lg italic mb-4">
              "Madu yang sangat murni dan harum, sangat puas dengan
              kualitasnya."
            </p>
            <p className="text-right font-semibold">- Lina, Jakarta</p>
          </div>
          <div
            className="testimonial-item bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-right"
          >
            <p className="text-lg italic mb-4">
              "Kurma-kurmanya luar biasa! Manis alami dan berkualitas tinggi."
            </p>
            <p className="text-right font-semibold">- Indri, Solo</p>
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section
        id="contact"
        className="contact py-20 px-8 md:px-16 bg-yellow-50"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Hubungi Kami</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-96" data-aos="flip-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.1206577041066!2d110.63960853355675!3d-7.690605653929439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a41ca94925ae9%3A0xb527c0ee117b4d15!2sAlfaratha%20Kurma!5e0!3m2!1sid!2sid!4v1737288342376!5m2!1sid!2sid"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h3 className="text-xl font-semibold mb-4">Kontak via WhatsApp</h3>
            <p className="mb-6">
              Untuk pertanyaan lebih lanjut, hubungi kami melalui WhatsApp
              dengan mengklik tombol di bawah ini.
            </p>
            <a
              href="https://wa.me/+6281554431137"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-700 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-800 transition"
            >
              Hubungi Kami di WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white text-center py-6">
        <p>&copy; 2025 Copyright: AlfarathaKurma</p>
      </footer>
    </div>
  );
};

export default App;
