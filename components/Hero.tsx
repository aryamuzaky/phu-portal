export function Hero() {
  return (
    <section className="bg-green-100 py-20 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Selamat Datang di PHU Portal
        </h1>
        <p className="text-gray-700 mb-6">
          Portal informasi resmi Penyelenggaraan Haji dan Umrah. 
          Dapatkan kemudahan akses persyaratan, formulir, dan layanan digital secara cepat dan transparan.
        </p>
        <a
          href="/pendaftaran"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition"
        >
          Lihat Persyaratan Pendaftaran
        </a>
      </div>
    </section>
  );
}
