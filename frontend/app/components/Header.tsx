"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import { FaHome, FaInfoCircle, FaUsers, FaPhone, FaNewspaper } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();

  const getNavItemClasses = (href: string) => {
    const isActive = pathname === href || (href === '/naujienos' && pathname.startsWith('/naujienos'));
    
    if (isActive) {
      return "flex items-center space-x-2 px-4 py-2 rounded-lg text-primary bg-primary/10 border border-primary/20 group";
    }
    
    return "flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 group";
  };

  return (
    <>
      <div className="bg-blue-900 text-white text-xs md:text-sm py-2 px-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="font-medium">
              📍 Kaunas K. Donelaičio g. 2, I aukštas - 119 kabinetas
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-accent font-medium uppercase tracking-wide">
              Turite klausimų? Skambinkite:
            </span>
            <span className="font-bold text-lg">+370 37 409 578</span>
            <div className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors cursor-pointer">
              <FaFacebookF className="text-white" />
            </div>
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
            <Link
              href="/"
              className={getNavItemClasses("/")}
            >
              <FaHome className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Pradžia</span>
            </Link>
            <Link
              href="/apie"
              className={getNavItemClasses("/apie")}
            >
              <FaInfoCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Apie mus</span>
            </Link>
            <Link
              href="/naujienos"
              className={getNavItemClasses("/naujienos")}
            >
              <FaNewspaper className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Naujienos</span>
            </Link>
            <Link
              href="/nariai"
              className={getNavItemClasses("/nariai")}
            >
              <FaUsers className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Nariai</span>
            </Link>
            <Link
              href="/kontaktai"
              className={getNavItemClasses("/kontaktai")}
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
