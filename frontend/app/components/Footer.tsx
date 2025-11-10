import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
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
                <div className="text-white font-bold">KAUNO KRAŠTO</div>
                <div className="text-xs text-gray-400">Pramonininkų ir darbdavių asociacija</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Kauno krašto pramonininkų ir darbdavių asociacija - viena seniausių ir 
              įtakingiausių verslo organizacijų Lietuvoje, įsteigta 1989 metais.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/kkpda" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/kkpda" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Puslapio struktūra</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/apie/istorija" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Apie mus
                </Link>
              </li>
              <li>
                <Link href="/nariai" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Nariai
                </Link>
              </li>
              <li>
                <Link href="/kontaktai" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Kontaktai
                </Link>
              </li>
              <li>
                <Link href="/naujienos" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Naujienos
                </Link>
              </li>
              <li>
                <Link href="/apie/istatai" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Dokumentai
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Kontaktai</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <div>Donelaičio g. 2, 119 kab., Kaunas</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500" />
                <div className="text-gray-400">
                  <a href="tel:+37037409578" className="hover:text-amber-500 transition-colors">
                    +370 37 409 578
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500" />
                <div className="text-gray-400">
                  <a href="mailto:info@pramone.lt" className="hover:text-amber-500 transition-colors">
                    info@pramone.lt
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                Įmonės kodas: 134778710
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kauno krašto pramonininkų ir darbdavių asociacija. Visos teisės saugomos.
          </p>
        </div>
      </div>
    </footer>
  );
}
