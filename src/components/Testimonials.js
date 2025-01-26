import React from "react";

function Testimonials() {
  return (
    <div id="testimonials" className="testimonials py-20 px-8 md:px-16">
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
            "Madu yang sangat murni dan harum, sangat puas dengan kualitasnya."
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
    </div>
  );
}

export default Testimonials;
