"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/logo-kemenag.png" alt="Logo PHU" className="h-8 w-8" />
          <span className="font-semibold text-lg text-green-700">
            PHU Portal
          </span>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-green-700">Beranda</Link>
          <Link href="/pendaftaran" className="hover:text-green-700">Pendaftaran</Link>
          <Link href="/pembatalan" className="hover:text-green-700">Pembatalan</Link>
          <Link href="/pelimpahan" className="hover:text-green-700">Pelimpahan</Link>
          <Link href="/faq" className="hover:text-green-700">FAQ</Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-2 px-6 py-4">
            <Link href="/" onClick={() => setOpen(false)}>Beranda</Link>
            <Link href="/pendaftaran" onClick={() => setOpen(false)}>Pendaftaran</Link>
            <Link href="/pembatalan" onClick={() => setOpen(false)}>Pembatalan</Link>
            <Link href="/pelimpahan" onClick={() => setOpen(false)}>Pelimpahan</Link>
            <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
