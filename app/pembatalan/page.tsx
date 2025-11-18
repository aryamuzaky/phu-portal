"use client";
import Link from "next/link";

export default function PembatalanPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Pembatalan Porsi Haji
      </h1>

      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
        Silakan pilih jenis pembatalan sesuai kondisi jemaah. Pastikan semua
        dokumen persyaratan telah lengkap sebelum mengajukan permohonan.
      </p>
      <a
        href="/pembatalan/faq"
        className="text-green-700 font-semibold hover:underline block mt-6"
      >
        Lihat FAQ Pembatalan →
      </a>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* PEMBATALAN MASIH HIDUP */}
        <section className="border p-6 rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold mb-4">
            Pembatalan Masih Hidup
          </h2>

          <p className="text-gray-600 mb-4">
            Digunakan apabila jemaah membatalkan porsi haji atas permintaan
            sendiri dan dalam kondisi masih hidup.
          </p>

          <h3 className="font-semibold mb-2">Persyaratan:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Surat Permohonan Pembatalan Porsi yang didapat dari Kemenag</li>
            <li>Bukti Setoran Awal dari Bank dan Surat Pendaftaran Haji (SPH)</li>
            <li>Foto Copy KTP & KK</li>
            <li>Foto Copy Buku Tabungan</li>
            
          </ul>

          <a
            href="/templates/pembatalan-hidup.pdf"
            download
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Download Template Surat
          </a>
        </section>

        {/* PEMBATALAN MENINGGAL */}
        <section className="border p-6 rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold mb-4">
            Pembatalan Karena Meninggal Dunia
          </h2>

          <p className="text-gray-600 mb-4">
            Digunakan apabila jemaah yang memiliki porsi haji telah meninggal
            dunia dan ahli waris mengajukan pembatalan.
          </p>

          <h3 className="font-semibold mb-2">Persyaratan:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Surat Permohonan Pembatalan dari Kemenag</li>
            <li>Surat / Akte Kematian dari Desa / Rumah Sakit / Dukcapil</li>
            <li>Bukti Setoran Awal dari Bank dan Surat Pendaftaran Haji (SPH)</li>
            <li>Foto Copy KTP & KK Jamaah yang Meninggal</li>
            <li>Foto Copy KTP & KK Ahli Waris</li>
            <li>Foto Copy Akte Lahir (bagi anak) / Buku Nikah (bagi suami istri)</li>
            <li>Foto Copy Buku Tabungan a.n Ahli Waris</li>
          </ul>

          <a
            href="/templates/pembatalan-meninggal.pdf"
            download
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
          >
            Download Template Surat
          </a>
        </section>
      </div>

      <div className="mt-10 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
