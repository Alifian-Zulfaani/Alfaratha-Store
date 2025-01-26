import React from "react";

function Features() {
  return (
    <div id="features" className="features bg-green-50 py-20 px-8 md:px-16">
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
          <p className="text-gray-600">Dijamin halal sesuai standar syariah.</p>
        </div>
        <div className="feature-item text-center" data-aos="fade-right">
          <h3 className="text-xl font-semibold mb-4">Berbagai Pilihan</h3>
          <p className="text-gray-600">
            Tersedia pilihan lengkap untuk kebutuhan oleh-oleh haji dan umroh.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
