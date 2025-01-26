import React from "react";

function Products() {
  return (
    <div id="products" className="products py-20 px-8 md:px-16">
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
            Kurma premium dengan rasa manis alami dan tekstur lembut, kaya serat
            dan nutrisi yang cocok untuk sajian sehat dan energi instan.
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
            lembut, penuh manfaat untuk meningkatkan kekebalan tubuh dan menjaga
            kesehatan.
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
            Lezatnya coklat premium dengan sentuhan manis alami yang memanjakan
            lidah dan menyehatkan tubuh.
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
            Almond berkualitas dengan tekstur renyah dan manfaat kesehatan yang
            luar biasa, kaya vitamin dan mineral.
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
            Kurma Ajwa pilihan, dikenal sebagai “Kurma Nabi,” dengan rasa manis
            khas dan manfaat kesehatan yang luar biasa untuk menjaga vitalitas.
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
            Kurma Ruthob segar dari Libya, manis dan lembut dengan tekstur juicy
            yang sempurna untuk pencinta kurma muda berkualitas.
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
    </div>
  );
}

export default Products;
