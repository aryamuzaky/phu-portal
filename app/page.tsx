"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
       <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-green-50">
        
        {/* Text Area */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-green-800 leading-tight">
            Informasi Haji - PHU Portal
          </h1>
          <p className="text-green-700 text-lg">
            Akses informasi pendaftaran, pembatalan, dan pelimpahan porsi haji secara mudah, cepat, dan transparan.
          </p>
          <a
            href="/pendaftaran"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg inline-block transition"
          >
            Mulai Jelajahi
          </a>
        </div>

        {/* Illustration Area */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/images/haji-illustration.png"
            alt="Ilustrasi Haji"
            width={450}
            height={450}
            className="drop-shadow-lg"
          />
        </div>

      </section>

      {/* MENU KARTU */}
      {/* SERVICES SECTION */}
      <section className="px-6 md:px-16 py-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">
          Layanan Informasi Haji
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-10">
          Pilih jenis informasi yang ingin Anda akses
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Pendaftaran */}
          <div className="border rounded-lg shadow-sm p-6 hover:shadow-md transition bg-white">
            <h3 className="text-lg font-bold text-green-800 mb-2">Pendaftaran Haji</h3>
            <p className="text-gray-600 mb-4">
              Informasi persyaratan dan tata cara pendaftaran haji reguler.
            </p>
            <a
              href="/pendaftaran"
              className="text-green-700 font-medium hover:underline"
            >
              Lihat detail →
            </a>
          </div>

          {/* Pembatalan */}
          <div className="border rounded-lg shadow-sm p-6 hover:shadow-md transition bg-white">
            <h3 className="text-lg font-bold text-green-800 mb-2">Pembatalan Haji</h3>
            <p className="text-gray-600 mb-4">
              Panduan pembatalan porsi haji beserta formulir resmi.
            </p>
            <a
              href="/pembatalan"
              className="text-green-700 font-medium hover:underline"
            >
              Lihat detail →
            </a>
          </div>

          {/* Pelimpahan */}
          <div className="border rounded-lg shadow-sm p-6 hover:shadow-md transition bg-white">
            <h3 className="text-lg font-bold text-green-800 mb-2">Pelimpahan Porsi Haji</h3>
            <p className="text-gray-600 mb-4">
              Persyaratan pelimpahan porsi karena sakit atau meninggal dunia.
            </p>
            <a
              href="/pelimpahan"
              className="text-green-700 font-medium hover:underline"
            >
              Lihat detail →
            </a>
          </div>

        </div>
      </section>
      {/* ABOUT SECTION */}
      <section className="px-6 md:px-16 py-16 bg-green-50 border-t border-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-900">
            Tentang Layanan Haji Kabupaten Wonosobo
          </h2>

          <p className="text-gray-700 mt-4 leading-relaxed">
            Seksi Penyelenggaraan Haji dan Umrah Kantor Kementerian Agama Kabupaten Wonosobo
            berkomitmen memberikan layanan haji secara transparan, akuntabel, mudah diakses,
            dan sesuai regulasi. Website ini hadir untuk membantu masyarakat dalam memperoleh
            informasi yang jelas mengenai pendaftaran, pembatalan, dan pelimpahan porsi haji.
          </p>
        </div>
      </section>


    </main>
  );
}
