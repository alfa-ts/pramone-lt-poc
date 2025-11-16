"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
  const [isMembersDropdownOpen, setIsMembersDropdownOpen] = useState(false);

  const aboutUsMenuItems = [
    { href: "/apie/valdymas", label: "Valdymas" },
    { href: "/apie/istorija", label: "Istorija" },
    { href: "/apie/istatai", label: "Įstatai" },
    { href: "/apie/veikla", label: "Veikla" },
    { href: "/apie/partneriai", label: "Partneriai" },
  ];

  const isAboutUsActive = pathname.startsWith("/apie");
  const isNewsActive = pathname.startsWith("/naujienos");
  const isEventsActive = pathname.startsWith("/renginiai");
  const isMembersActive = pathname.startsWith("/nariai");
  const isContactsActive = pathname.startsWith("/kontaktai");
  const isHomeActive = pathname === "/";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-xl shadow-md border border-gray-100">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <div className="text-gray-900 font-bold">KAUNO KRAŠTO</div>
              <div className="text-xs text-gray-600">Pramonininkų ir darbdavių asociacija</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link 
              href="/" 
              className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                isHomeActive 
                  ? 'bg-amber-50 text-amber-600 font-medium' 
                  : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              <span>Pradžia</span>
            </Link>

            <div 
              className="relative"
              onMouseEnter={() => setIsAboutUsDropdownOpen(true)}
              onMouseLeave={() => setIsAboutUsDropdownOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                  isAboutUsActive 
                    ? 'bg-amber-50 text-amber-600 font-medium' 
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                <span>Apie mus</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isAboutUsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAboutUsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {aboutUsMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-3 text-sm transition-all duration-200 ${
                          pathname === item.href
                            ? "bg-amber-50 text-amber-600 font-semibold border-l-4 border-amber-500"
                            : "text-gray-700 hover:bg-amber-50 hover:text-amber-600 hover:pl-5 border-l-4 border-transparent"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/naujienos" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isNewsActive 
                  ? 'bg-amber-50 text-amber-600 font-medium' 
                  : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              Naujienos
            </Link>

            <Link 
              href="/renginiai" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isEventsActive 
                  ? 'bg-amber-50 text-amber-600 font-medium' 
                  : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              Renginiai
            </Link>

            <div 
              className="relative"
              onMouseEnter={() => setIsMembersDropdownOpen(true)}
              onMouseLeave={() => setIsMembersDropdownOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                  isMembersActive 
                    ? 'bg-amber-50 text-amber-600 font-medium' 
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                <span>Nariai</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMembersDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMembersDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    <Link
                      href="/nariai"
                      className={`block px-4 py-3 text-sm transition-all duration-200 ${
                        pathname === "/nariai"
                          ? "bg-amber-50 text-amber-600 font-semibold border-l-4 border-amber-500"
                          : "text-gray-700 hover:bg-amber-50 hover:text-amber-600 hover:pl-5 border-l-4 border-transparent"
                      }`}
                    >
                      Nariai
                    </Link>
                    <Link
                      href="/nariai/kaip-tapti-nariu"
                      className={`block px-4 py-3 text-sm transition-all duration-200 ${
                        pathname === "/nariai/kaip-tapti-nariu"
                          ? "bg-amber-50 text-amber-600 font-semibold border-l-4 border-amber-500"
                          : "text-gray-700 hover:bg-amber-50 hover:text-amber-600 hover:pl-5 border-l-4 border-transparent"
                      }`}
                    >
                      Kaip tapti nariu?
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/kontaktai" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isContactsActive 
                  ? 'bg-amber-50 text-amber-600 font-medium' 
                  : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              Kontaktai
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2">
              <Link 
                href="/" 
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-amber-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Pradžia
              </Link>
              <Link 
                href="/apie/istorija" 
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-amber-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Apie mus
              </Link>
              <Link 
                href="/naujienos" 
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-amber-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Naujienos
              </Link>
              <Link 
                href="/renginiai" 
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-amber-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Renginiai
              </Link>
              <Link 
                href="/nariai" 
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-amber-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Nariai
              </Link>
              <Link 
                href="/kontaktai" 
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-amber-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontaktai
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
