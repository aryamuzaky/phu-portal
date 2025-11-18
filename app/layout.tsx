import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Navbar } from "@/components/Navbar"; // ✅ Tambahkan ini

export const metadata: Metadata = {
  title: "PHU Portal - Informasi Haji",
  description: "Portal layanan informasi pendaftaran, pembatalan, dan pelimpahan porsi haji.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">

        {/* ✅ NAVBAR SELALU TAMPIL */}
        <Navbar />

        {/* ✅ KONTEN HALAMAN */}
        <div className="flex-grow">{children}</div>

        {/* ✅ FOOTER */}
        <footer className="bg-[#f3f4f6] text-gray-700 border-t border-gray-300 mt-16 px-6 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* INFO KANTOR */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Kementerian Agama Kabupaten Wonosobo</h3>
              <p className="text-sm">Seksi Penyelenggaraan Haji dan Umrah (PHU)</p>

              <p className="mt-3 text-sm leading-relaxed">
                Jl. Tumenggung Jogonegoro No. 37 Wonosobo 56314 Jawa Tengah<br/>
                Jam Pelayanan: Senin - Kamis, 07:30 - 16:00 WIB,
                               Jum'at, 07.30 - 16.30 WIB
              </p>
            </div>

            {/* SOSIAL MEDIA */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Sosial Media & Website</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  🌐 Website: 
                  <a href="https://wonosobo.kemenag.go.id" target="_blank" className="text-blue-700 hover:underline ml-1">
                    wonosobo.kemenag.go.id
                  </a>
                </li>
                <li>
                  📸 Instagram:
                  <a href="https://instagram.com/kemenagwonosobo" target="_blank" className="text-blue-700 hover:underline ml-1">
                    @kemenagwonosobo
                  </a>
                </li>
                <li>
                  🎵 TikTok:
                  <a href="https://www.tiktok.com/@kemenag.wonosobo" target="_blank" className="text-blue-700 hover:underline ml-1">
                    @kemenag.wonosobo
                  </a>
                </li>
                <li>
                  🕊️ X (Twitter):
                  <a href="https://x.com/kemenagwonosobo" target="_blank" className="text-blue-700 hover:underline ml-1">
                    @kemenagwonosobo
                  </a>
                </li>
                <li>
                  ▶️ YouTube:
                  <a href="https://www.youtube.com/results?search_query=kemenag+wonosobo" target="_blank" className="text-blue-700 hover:underline ml-1">
                    Kemenag Wonosobo
                  </a>
                </li>
              </ul>
            </div>

            {/* KONTAK */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Kontak Pelayanan</h3>
              <p className="text-sm leading-relaxed">
                📞 Telp: +62 812-8170-8558<br/>
                ✉️ Email: phukabwonosobo@gmail.com
              </p>
            </div>

          </div>

          <div className="text-center text-gray-500 text-sm mt-10">
            © {new Date().getFullYear()} PHU Wonosobo — Kementerian Agama Wonosobo
          </div>
        </footer>


          
      </body>
    </html>
  );
}
