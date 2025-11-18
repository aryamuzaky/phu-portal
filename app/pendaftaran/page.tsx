"use client";
import { ClipboardCheck, Building, Smartphone } from "lucide-react";
import {useState} from "react";
import Image from "next/image";

export default function PendaftaranPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* Judul */}
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Persyaratan & Alur Pendaftaran Haji
      </h1>

      {/* Persyaratan */}
      <section className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ClipboardCheck className="text-green-700" size={26} />
          <h2 className="text-xl font-semibold text-green-900">
            Berkas Persyaratan Pendaftaran Haji Reguler
          </h2>
        </div>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>Buku Tabungan Haji dari Bank Syariah Setempat (BSI, Muamalat, Danamon, Panin Dubai, Jateng, Dll).</li>
          <li>Setoran Awal BPIH (didapat dari bank syariah setempat saat membuka tabungan haji).</li>
          <li>Foto Copy KTP yang masih berlaku / KIA bagi yang belum memiliki KTP.</li>
          <li>Foto Copy Kartu Keluarga (KK) yang masih berlaku.</li>
          <li>Foto Copy Akta Kelahiran / Ijazah (SD,SMP,SMA) / Buku Nikah.</li>
          <li>Tes Golongan Darah (bagi yang belum mengetahui golongan darahnya)</li><br></br>
          <b>*Pastikan data yang ada pada KTP, KK, Akte Kelahiran/Ijazah/Buku Nikah sama semua, baik jumlah huruf maupun ejaan (Nama, Tempat Tanggal Lahir, Nama Ayah, Nama Ibu)</b>
        </ul>
      </section>

      {/* Alur Pendaftaran */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-8">
          Alur Pendaftaran Haji
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Offline */}
          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <div className="flex items-center gap-2 mb-4">
              <Building className="text-green-700" size={24} />
              <h3 className="text-lg font-bold text-green-800">
                Offline (Datang ke Kemenag)
              </h3>
            </div>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Siapkan seluruh dokumen persyaratan.</li>
              <li>Buka Tabungan Haji di bank syariah (BSI, Muamalat, Danamon, Panin, Jateng Syariah, dll) <b>jika belum</b></li>
              <li>Datang ke Kantor Kemenag Kabupaten Wonosobo dengan membawa semua berkas/dokumen.</li>
              <li>Verifikasi dokumen melalui SISKOHAT oleh petugas Kantor Kemenag Kabupaten Wonosobo.</li>
              <li>Foto melalui SISKOHAT oleh petugas Kantor kemenag Kabupaten Wonosobo.</li>
              <li>Cetak nomor porsi oleh petugas kantor kemenag Kabupaten Wonosobo.</li>
              <li>Menerima bukti **Nomor Porsi Haji**.</li>
            </ol>
          </div>

          {/* Online */}
          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="text-green-700" size={24} />
              <h3 className="text-lg font-bold text-green-800">
                Online (Melalui Aplikasi)
              </h3>
            </div>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Siapkan seluruh dokumen persyaratan.</li>
              <li>Buka tabungan haji di bank syariah (BSI, Muamalat, Danamon, Panin, Jateng Syariah, dll) <b>jika belum</b></li>
              <li>Unduh aplikasi Satu Haji di google play store (hanya tersedia di HP Android).<a href="https://play.google.com/store/apps/details?id=com.kemenag_haji_pintar_2019&pcampaignid=web_share"><b> Download</b></a></li>
              <li>Buka aplikasi Satu Haji, lalu masuk menu Pendaftaran Haji.</li>
              <li>Masukkan nomor validasi dan NIK, lalu klik submit.</li>
              <li>Masukkan alamat e-mail dan buat password, lalu login dengan e-mail dan password yang telah dibuat.</li>
              <li>Unggah berkas/dokumen persyaratan dan klik submit.</li>
              <li>Verifikasi berkas/dokumen oleh petugas kemenag Kabupaten Wonosobo.</li>
              <li>Nomor porsi diterima melalui aplikasi/e-mail.</li>
            </ol>
            {/* Tombol lihat alur */}
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Lihat Alur Pendaftaran Online (Gambar)
            </button>
            
          </div>
        </div>
      </section>
      

      <p className="mt-12 text-center text-gray-600">
        Jika membutuhkan bantuan, silakan menghubungi Seksi PHU Kemenag Kabupaten Wonosobo.
      </p>
      {/* Modal Popup (Besar) */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-6 overflow-auto">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full shadow-2xl relative animate-fadeIn">

            {/* Tombol Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-black text-3xl font-bold"
            >
              ×
            </button>

            <h3 className="text-2xl font-semibold mb-5 text-center text-green-700">
              Alur Pendaftaran Online
            </h3>

            <Image
              src="/images/alur-pendaftaran-online.jpg"
              alt="Alur Pendaftaran Online"
              width={1600}
              height={1600}
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}
