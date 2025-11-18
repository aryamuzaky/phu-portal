"use client";
import Link from "next/link";

export default function PelimpahanPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Pelimpahan Porsi Haji
      </h1>

      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
        Silakan pilih jenis pelimpahan sesuai kondisi jemaah. Pastikan semua
        dokumen persyaratan telah lengkap sebelum mengajukan permohonan.
      </p>
        <a
        href="/pelimpahan/faq"
        className="text-green-700 font-semibold hover:underline block mt-6"
        >
        Lihat FAQ Pelimpahan →
        </a>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* PELIMPAHAN KARENA SAKIT */}
        <section className="border p-6 rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold mb-4">
            Pelimpahan Karena Sakit
          </h2>

          <p className="text-gray-600 mb-4">
            Digunakan apabila jemaah tidak dapat berangkat karena alasan 
            kesehatan yang dibuktikan dengan surat rekomendasi/diagnosa medis 
            dari rumah sakit atau dokter.
          </p>

          <h3 className="font-semibold mb-2">Persyaratan:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Surat Permohonan Pelimpahan Porsi dari Kemenag</li>
            <li>Surat Keterangan Sakit dari Dokter / Rumah Sakit Pemerintah</li>
            <li>Bukti Setoran Awal dari Bank & Surat Pendaftaran Haji (SPH)</li>
            <li>Foto Copy KTP Jemaah dan KTP Penerima Pelimpahan</li>
            <li>Foto Copy Kartu Keluarga Jemaah dan Penerima Pelimpahan</li>
            <li>Foto Copy Buku Tabungan Haji Penerima Pelimpahan</li>
          </ul>

          <a
            href="/templates/pelimpahan-sakit.pdf"
            download
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md"
          >
            Download Template Surat
          </a>
        </section>

        {/* PELIMPAHAN KARENA MENINGGAL */}
        <section className="border p-6 rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold mb-4">
            Pelimpahan Karena Meninggal Dunia
          </h2>

          <p className="text-gray-600 mb-4">
            Digunakan apabila jemaah pemilik porsi telah meninggal dunia dan
            ahli waris ingin melimpahkan porsi kepada keluarga yang memenuhi syarat.
          </p>

          <h3 className="font-semibold mb-2">Persyaratan:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Surat Permohonan Pelimpahan Porsi dari Kemenag</li>
            <li>Foto Copy Akte Kematian dari Disdukcapil</li>
            <li>Bukti Setoran Awal BPIH dari Bank & Surat Pendaftaran Haji (SPH)</li>
            <li>Foto Copy KTP & KK Ahli Waris</li>
            <li>Foto Copy Akte Lahir (bagi anak) / Buku Nikah (bagi suami istri)</li>
            <li>Foto Copy Buku Tabungan Haji Ahli Waris</li>
          </ul>

          <a
            href="/templates/pelimpahan-meninggal.pdf"
            download
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md"
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
