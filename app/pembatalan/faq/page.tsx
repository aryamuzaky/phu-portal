"use client";
import { useState } from "react";

const faqPembatalan = [
  {
    question: "Apakah pembatalan porsi haji bisa dilakukan kapan saja?",
    answer:
      "Ya. Pembatalan dapat dilakukan kapan saja selama jemaah masih memiliki nomor porsi dan belum masuk proses pelunasan keberangkatan."
  },
  {
    question: "Berapa lama proses pengembalian dana pembatalan?",
    answer:
      "Estimasi waktu pencairan dana berkisar 1 Bulan sampai 3 bulan setelah dokumen lengkap dan permohonan diterima oleh Kantor Kemenag Kabupaten."
  },
  {
    question: "Dokumen apa saja yang diperlukan untuk pembatalan masih hidup?",
    answer:
      "Surat Permohonan Pembatalan, Bukti Setoran Awal BPIH & Surat Pendaftaran Haji (SPH), Foto Copy KTP & KK Jamaah, Foto Copy Buku Tabungan atas nama jemaah."
  },
  {
    question: "Dokumen apa saja yang diperlukan untuk pembatalan meninggal dunia?",
    answer:
      "Surat Permohonan Pembatalan, Akte Kematian, Bukti Setoran Awal BPIH & Surat Pendaftaran Haji (SPH), Foto Copy KTP & KK Jamaah dan Ahli Waris, Foto Copy Akte Lahir (bagi anak) / Buku Nikah (bagi suami istri), Foto Copy Buku Tabungan atas nama Ahli Waris."
  }
];

export default function FAQPembatalan() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4 text-center">FAQ Pembatalan Porsi Haji</h1>
      <p className="text-gray-600 text-center mb-10">
        Pertanyaan yang sering diajukan terkait prosedur pembatalan porsi haji.
      </p>

      {faqPembatalan.map((item, i) => (
        <div key={i} className="border rounded-lg shadow-sm mb-4">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full px-4 py-4 text-left font-medium text-gray-800 flex justify-between"
          >
            {item.question}
            <span>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div className="px-4 pb-4 text-gray-600 border-t">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
