import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-4">KAUNO KRAŠTO ASOCIACIJA</h4>
          <p className="text-sm mb-2">Įmonės kodas: 134778710</p>
          <p className="text-sm mb-2">
            Adresas: Donelaičio g. 2, 119 kab., Kaunas
          </p>
          <p className="text-sm mb-2">Tel.: +370 37 409 578</p>
          <p className="text-sm">El. paštas: info@pramone.lt</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Puslapio struktūra</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/apie" className="hover:text-accent">
                Apie mus
              </Link>
            </li>
            <li>
              <Link href="/nariai" className="hover:text-accent">
                Nariai
              </Link>
            </li>
            <li>
              <Link href="/kontaktai" className="hover:text-accent">
                Kontaktai
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Sekite mus</h4>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-accent">
              <FaFacebook className="text-white h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-accent">
              <FaLinkedin className="text-white h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-accent">
              <FaInstagram className="text-white h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
