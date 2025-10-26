"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaChevronDown, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import {
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaPhone,
  FaNewspaper,
} from "react-icons/fa";
import { useState } from "react";

const getNavItemClasses = (isActive: boolean) => {
  if (isActive) {
    return "flex items-center space-x-2 px-4 py-2 rounded-lg text-primary bg-primary/10 border border-primary/20 group";
  }

  return "flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 group";
};

export default function Header() {
  const pathname = usePathname();
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);

  const aboutUsMenuItems = [
    {
      href: "/apie/misija-vizija",
      label: "Misija, vizija ir strateginės veiklos kryptys",
    },
    { href: "/apie/struktura", label: "Struktūra" },
    { href: "/apie/istorija", label: "Istorija" },
    { href: "/apie/istatai", label: "Įstatai" },
    { href: "/apie/veikla", label: "Veikla" },
    { href: "/apie/partneriai", label: "Partneriai" },
    { href: "/apie/valdymas", label: "Valdymas" },
  ];

  const isAboutUsActive = pathname.startsWith("/apie");
  const isNewsActive =
    pathname.startsWith("/naujienos") || pathname.startsWith("/renginiai");
  const isMembersActive = pathname.startsWith("/nariai");
  const isContactsActive = pathname.startsWith("/kontaktai");
  const isHomeActive = pathname === "/";
  const [isMembersDropdownOpen, setIsMembersDropdownOpen] = useState(false);

  return (
    <>
      <div className="bg-blue-900 text-white text-xs md:text-sm py-2 px-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="font-medium">
              📍 Kaunas K. Donelaičio g. 2, I aukštas - 119 kabinetas
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/kaunokrastopramonininku"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors cursor-pointer"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/kkpda/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors cursor-pointer"
            >
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
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
              <h1 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                KAUNO KRAŠTO
              </h1>
              <p className="text-sm text-gray-600 font-medium">
                PRAMONININKŲ IR DARBDAVIŲ ASOCIACIJA
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            <Link href="/" className={getNavItemClasses(isHomeActive)}>
              <FaHome className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Pradžia</span>
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsAboutUsDropdownOpen(true)}
              onMouseLeave={() => setIsAboutUsDropdownOpen(false)}
            >
              <button
                className={
                  isAboutUsActive
                    ? "flex items-center space-x-2 px-4 py-2 rounded-lg text-primary bg-primary/10 border border-primary/20 group cursor-pointer"
                    : "flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 group cursor-pointer"
                }
              >
                <FaInfoCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Apie mus</span>
                <FaChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${isAboutUsDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isAboutUsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {aboutUsMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-3 text-sm transition-all duration-200 ${
                          pathname === item.href
                            ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                            : "text-gray-700 hover:bg-primary/10 hover:text-primary hover:pl-5 hover:font-medium border-l-4 border-transparent hover:border-primary/50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <Link
                href="/naujienos"
                className={getNavItemClasses(isNewsActive)}
              >
                <FaNewspaper className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Naujienos</span>
                <FaChevronDown className="h-3 w-3" />
              </Link>
              <div className="hidden group-hover:block absolute top-full left-0 pt-2 z-50">
                <div className="w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  <Link
                    href="/naujienos"
                    className={`block px-4 py-3 text-sm transition-all duration-200 ${
                      pathname === "/naujienos"
                        ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                        : "text-gray-700 hover:bg-primary/10 hover:text-primary hover:pl-5 hover:font-medium border-l-4 border-transparent hover:border-primary/50"
                    }`}
                  >
                    Naujienos
                  </Link>
                  <Link
                    href="/renginiai"
                    className={`block px-4 py-3 text-sm transition-all duration-200 ${
                      pathname.startsWith("/renginiai")
                        ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                        : "text-gray-700 hover:bg-primary/10 hover:text-primary hover:pl-5 hover:font-medium border-l-4 border-transparent hover:border-primary/50"
                    }`}
                  >
                    Renginiai
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsMembersDropdownOpen(true)}
              onMouseLeave={() => setIsMembersDropdownOpen(false)}
            >
              <button
                className={
                  isMembersActive
                    ? "flex items-center space-x-2 px-4 py-2 rounded-lg text-primary bg-primary/10 border border-primary/20 group cursor-pointer"
                    : "flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 group cursor-pointer"
                }
              >
                <FaUsers className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Nariai</span>
                <FaChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${isMembersDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isMembersDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/nariai"
                      className={`block px-4 py-3 text-sm transition-all duration-200 ${
                        pathname === "/nariai"
                          ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                          : "text-gray-700 hover:bg-primary/10 hover:text-primary hover:pl-5 hover:font-medium border-l-4 border-transparent hover:border-primary/50"
                      }`}
                    >
                      Nariai
                    </Link>
                    <Link
                      href="/nariai/kaip-tapti-nariu"
                      className={`block px-4 py-3 text-sm transition-all duration-200 ${
                        pathname === "/nariai/kaip-tapti-nariu"
                          ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                          : "text-gray-700 hover:bg-primary/10 hover:text-primary hover:pl-5 hover:font-medium border-l-4 border-transparent hover:border-primary/50"
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
              className={getNavItemClasses(isContactsActive)}
            >
              <FaPhone className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Kontaktai</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
