"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Apa itu Nomor Porsi Haji?",
    answer:
      "Nomor porsi haji adalah nomor antrian resmi yang diterbitkan oleh Sistem Informasi dan Komputerisasi Haji Terpadu (SISKOHAT) setelah jemaah melakukan setoran awal Biaya Perjalanan Ibadah Haji (BPIH). Nomor ini menentukan estimasi tahun keberangkatan."
  },
  {
    question: "Bagaimana cara mengetahui tahun keberangkatan haji?",
    answer:
      "Tahun keberangkatan dapat dicek melalui aplikasi Satu Haji dengan memasukkan nomor porsi atau layanan di Kantor Kementerian Agama Kabupaten dengan menyertakan nomor porsi."
  },
  {
    question: "Apa yang dimaksud dengan pembatalan porsi haji?",
    answer:
      "Pembatalan porsi haji adalah proses penghapusan porsi antrian haji milik jemaah, baik karena keinginan sendiri atau sebab tertentu, yang kemudian dana setoran dapat diajukan untuk dikembalikan."
  },
  {
    question: "Apakah dana setoran haji dapat dikembalikan setelah pembatalan?",
    answer:
      "Ya, dapat. Proses pengembalian dilakukan melalui Kantor Kementerian Agama Kabupaten/Kota sesuai syarat dan ketentuan yang berlaku dan dana dapat diambil melalui Bank BPS terdaftar."
  },
  {
    question: "Apa bedanya pelimpahan porsi karena sakit dan meninggal?",
    answer:
      "Pelimpahan karena sakit diberikan bila jemaah tidak mampu melaksanakan ibadah karena kondisi kesehatan permanen dan dibuktikan dengan surat resmi dari Rumah Sakit Pemerintahan. Pelimpahan karena meninggal dilakukan kepada ahli waris yang sah sesuai ketentuan yang ada."
  },
  {
    question: "Berapa masa tunggu untuk Kabupaten Wonosobo?",
    answer:
      "Masa tunggu Kabupaten Wonosobo per tahun 2025 adalah 32 Tahun."
  },
  {
    question: "Apakah umroh dan haji khusus dapat dilakukan melalui Kantor Kemenag?",
    answer:
      "Sesuai dengan Peraturan Menteri Agama pendaftaran umroh dan haji khusus dilakukan melalui biro umroh dan haji khusus setempat."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-4">FAQ - Tanya Jawab Layanan Haji</h1>
      <p className="text-center text-gray-600 mb-10">
        Berikut adalah pertanyaan yang sering diajukan mengenai pendaftaran, pembatalan, dan pelimpahan porsi haji.
      </p>

      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="border rounded-lg bg-white shadow-sm">
            <button
              onClick={() => toggle(i)}
              className="w-full text-left px-4 py-4 font-medium text-gray-800 flex justify-between items-center"
            >
              {item.question}
              <span>{openIndex === i ? "−" : "+"}</span>
            </button>

            {openIndex === i && (
              <div className="px-4 pb-4 text-gray-600 border-t">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
