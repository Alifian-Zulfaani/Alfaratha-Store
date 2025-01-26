import React from "react";

function Contact() {
  return (
    <div id="contact" className="contact py-20 px-8 md:px-16 bg-yellow-50">
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
            Untuk pertanyaan lebih lanjut, hubungi kami melalui WhatsApp dengan
            mengklik tombol di bawah ini.
          </p>
          <a
            href="https://wa.me/+6281554431137"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 bg-green-700 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-800 transition"
          >
            <img
              src="/whatsapp.png"
              alt="whatsapp icon"
              className="w-6 aspect-square"
            />
            <p>Hubungi Kami di WhatsApp</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
