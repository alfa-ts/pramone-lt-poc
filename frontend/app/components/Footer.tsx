import Link from "next/link";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-gradient-to-b from-[#fe9a00] to-[#e17100] rounded-lg flex items-center justify-center">
                <Building2 className="size-6 text-white" />
              </div>
              <div>
                <div className="font-medium">KAUNO KRAŠTO</div>
                <div className="text-xs text-gray-400">
                  Pramonininkų ir darbdavių asociacija
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Kauno krašto pramonininkų ir darbdavių asociacija - viena
              seniausių ir įtakingiausių verslo organizacijų Lietuvoje, įsteigta
              1998 metais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">Puslapio struktūra</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/apie/istorija"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Apie mus
                </Link>
              </li>
              <li>
                <Link
                  href="/nariai"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nariai
                </Link>
              </li>
              <li>
                <Link
                  href="/kontaktai"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontaktai
                </Link>
              </li>
              <li>
                <Link
                  href="/naujienos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Naujienos
                </Link>
              </li>
              <li>
                <Link
                  href="/apie/istatai"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dokumentai
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-white">Kontaktai</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="size-4 text-[#fe9a00] mt-0.5 shrink-0" />
                <span>Donelaičio g. 2, 119 kab., Kaunas</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="size-4 text-[#fe9a00] shrink-0" />
                <a
                  href="tel:+37037409578"
                  className="hover:text-white transition-colors"
                >
                  +370 37 409 578
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="size-4 text-[#fe9a00] shrink-0" />
                <a
                  href="mailto:info@pramone.lt"
                  className="hover:text-white transition-colors"
                >
                  info@pramone.lt
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 text-white">Sekite mus</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/kkpda"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/kkpda"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-6">Įmonės kodas: 134778710</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          © 2025 Kauno krašto pramonininkų ir darbdavių asociacija. Visos teisės
          saugomos.
        </div>
      </div>
    </footer>
  );
}
