import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { partnersQuery } from "@/sanity/lib/queries";
import { Handshake, FileCheck, Building2, Calendar, Mail } from "lucide-react";

interface Partner {
  _id: string;
  title: string;
  logo?: string;
  extra?: string;
}

export default async function PartneriaiPage() {
  const { data } = await sanityFetch({
    query: partnersQuery,
  });

  const cooperate = data?.cooperate || [];
  const agreements = data?.agreements || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Pradžia
            </Link>
            <svg
              className="size-3.5 text-gray-400"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                d="M5.25 10.5L8.75 7L5.25 3.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.16667"
              />
            </svg>
            <Link
              href="/apie/istorija"
              className="text-gray-500 hover:text-gray-700"
            >
              Apie mus
            </Link>
            <svg
              className="size-3.5 text-gray-400"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                d="M5.25 10.5L8.75 7L5.25 3.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.16667"
              />
            </svg>
            <span className="text-gray-900">Partneriai</span>
          </div>

          <h1 className="mb-6 text-5xl text-gray-900">Partneriai</h1>
          <p className="text-gray-600 max-w-3xl text-xl">
            KKPDA bendradarbiauja su valstybinėmis institucijomis, verslo
            organizacijomis ir švietimo įstaigomis, siekdama atstovauti savo
            narių interesams
          </p>

          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#fe9a00] to-[#e17100] rounded-full" />
        </div>
      </div>

      {/* Partnership Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center size-20 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl mb-4">
                <Handshake className="size-10 text-[#fe9a00]" />
              </div>
              <div className="text-5xl mb-2 bg-gradient-to-r from-[#fe9a00] to-[#e17100] bg-clip-text text-transparent">
                {cooperate.length}
              </div>
              <p className="text-gray-600 text-lg">Aktyvūs partneriai</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center size-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-4">
                <FileCheck className="size-10 text-blue-600" />
              </div>
              <div className="text-5xl mb-2 text-blue-600">
                {agreements.length}
              </div>
              <p className="text-gray-600 text-lg">Pasirašytos sutartys</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Partners Grid Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 shadow-sm border border-gray-100">
              <Handshake className="size-5 text-[#fe9a00]" />
              <span className="text-gray-900 font-medium">Mūsų partneriai</span>
            </div>
            <h2 className="text-2xl text-gray-900 mb-3">
              Bendradarbiavimo tinklas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dirbame su įvairiomis organizacijomis ir institucijomis visoje
              Lietuvoje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cooperate.map((partner) => (
              <div
                key={partner._id}
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-[#fe9a00] hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fe9a00]/5 to-[#e17100]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="flex items-start gap-3">
                    <div className="size-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shrink-0 group-hover:from-[#fe9a00] group-hover:to-[#e17100] transition-all duration-300">
                      <Building2 className="size-5 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-gray-900 text-sm flex-1 pt-1 leading-snug">
                      {partner.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Agreements Section */}
      {agreements.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fe9a00] to-[#e17100] rounded-full px-4 py-2 mb-4">
                <FileCheck className="size-5 text-white" />
                <span className="text-white font-medium">Sutartys</span>
              </div>
              <h2 className="text-2xl text-gray-900 mb-3">
                Pasirašytos bendradarbiavimo sutartys
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Oficialūs bendradarbiavimo susitarimai su organizacijomis ir
                institucijomis
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-3">
                {agreements.map((agreement) => (
                  <div
                    key={agreement._id}
                    className="bg-gradient-to-r from-orange-50 to-white border border-orange-100 rounded-xl p-5 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="size-10 bg-white border border-orange-200 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gradient-to-b group-hover:from-[#fe9a00] group-hover:to-[#e17100] transition-all">
                          <FileCheck className="size-5 text-[#fe9a00] group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-gray-900 flex-1">
                          {agreement.title}
                        </p>
                      </div>
                      {agreement.extra && (
                        <div className="flex items-center gap-2 shrink-0">
                          <Calendar className="size-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {agreement.extra}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#fe9a00] to-[#e17100] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-4 text-2xl">
              Norite tapti partneriu?
            </h2>
            <p className="text-amber-50 text-lg mb-8">
              Jei esate suinteresuoti bendradarbiauti su KKPDA, susisiekite su
              mumis ir aptarsime galimybes
            </p>
            <div className="flex items-center justify-center">
              <a
                href="/kontaktai"
                className="bg-white text-[#fe9a00] px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="size-5" />
                Susisiekite su mumis
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
