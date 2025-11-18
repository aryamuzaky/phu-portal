"use client";
import { useState } from "react";

const faqPelimpahan = [
  {
    question: "Siapa saja yang bisa menerima pelimpahan porsi?",
    answer:
      "Ahli waris sah sesuai ketentuan hukum keluarga, atau orang yang memiliki hubungan darah langsung tergantung jenis pelimpahan, seperti anak kandung, suami istri, saudara kandung, orang tua dan anak kandung."
  },
  {
    question: "Apa syarat pelimpahan porsi karena meninggal?",
    answer:
      "Surat Permohonan dari Kemenag, Akte Kematian, Surat Keterangan Ahli Waris, Surat Pertanggunag Jawaban, Foto Copy KTP dan KK Ahli Waris, Foto Copy Akte Kelahiran (bagi anak) / Buku Nikah (bagi suami istri), Foto Copy Buku Tabungan Haji Ahli Waris."
  },
  {
    question: "Apa syarat pelimpahan karena sakit permanen?",
    answer:
      "Surat Permohonan dari Kemenag, Surat Keterangan Sakit dari Rumah Sakit Pemerintah, Surat Keterangan Ahli Waris, Surat Pertanggunag Jawaban, Foto Copy KTP dan KK Jemaah dan Ahli Waris, Foto Copy Akte Kelahiran (bagi anak) / Buku Nikah (bagi suami istri), Foto Copy Buku Tabungan Haji Ahli Waris."
  },
  {
    question: "Apakah nomor porsi berubah setelah pelimpahan?",
    answer:
      "Tidak. Pelimpahan hanya memindahkan hak keberangkatan, bukan membuat nomor porsi baru."
  }
];

export default function FAQPelimpahan() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4 text-center">FAQ Pelimpahan Porsi Haji</h1>
      <p className="text-gray-600 text-center mb-10">
        Pertanyaan yang sering diajukan mengenai pelimpahan porsi karena sakit atau meninggal.
      </p>

      {faqPelimpahan.map((item, i) => (
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
