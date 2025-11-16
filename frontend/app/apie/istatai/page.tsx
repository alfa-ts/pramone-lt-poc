import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { legalDocumentsQuery } from "@/sanity/lib/queries";
import {
  Info,
  Calendar,
  Users,
  Scale,
  CheckCircle,
  FileText,
  Download,
  BookOpen,
  Shield,
} from "lucide-react";

export default async function IstataiPage() {
  const { data } = await sanityFetch({ query: legalDocumentsQuery });
  const statutesUrl: string | undefined = data?.statutesUrl || undefined;
  const statutesName: string | undefined = data?.statutesName || undefined;
  const ethicsUrl: string | undefined = data?.ethicsUrl || undefined;
  const ethicsName: string | undefined = data?.ethicsName || undefined;

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="flex items-center gap-2 text-sm mb-6">
            <a href="/apie" className="text-gray-500 hover:text-gray-700">
              Apie mus
            </a>
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
            <span className="text-gray-900">Įstatai</span>
          </div>

          <h1 className="mb-6 text-5xl text-gray-900">Įstatai</h1>
          <p className="text-gray-600 max-w-3xl text-xl">
            Asociacijos veiklą reglamentuojantys pagrindiniai dokumentai
          </p>

          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#fe9a00] to-[#e17100] rounded-full" />
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
                <Info className="size-4 text-[#fe9a00]" />
                <span className="text-[#fe9a00] font-medium text-sm">
                  Apie organizaciją
                </span>
              </div>

              <h2 className="text-2xl text-gray-900 mb-6">
                Kauno krašto pramonininkų ir darbdavių asociacija
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Kauno krašto pramonininkų ir darbdavių asociacija (toliau –
                  Asociacija) yra ribotos civilinės atsakomybės viešasis
                  juridinis asmuo, kurio teisinė forma – asociacija.
                </p>
                <p>
                  Asociacija yra savarankiška savanoriškumo principu atsikūrus
                  Lietuvos Respublikos ūkio subjektus, veikiančius gamybos ir
                  gamybos aptarnavimo bei kitose verslo, švietimo ir paslaugų
                  teikimo srityse, jungianti organizacija.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <Calendar className="size-5 text-blue-600 shrink-0" />
                <div>
                  <div className="text-sm text-blue-900 font-medium">
                    Įstatai įregistruoti
                  </div>
                  <div className="text-sm text-blue-700">
                    Juridinių asmenų registre 2021 m. gruodžio 7 dieną
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1080&q=80"
                alt="Legal documents"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl text-gray-900 mb-3">
              Pagrindiniai principai
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Asociacijos veikla grindžiama šiais principais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="size-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="size-7 text-[#fe9a00]" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Savanoriškumas
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Narystė asociacijoje yra laisvanoriška ir grindžiama bendromis
                narių interesų apsauga bei verslo plėtros principais
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="size-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Scale className="size-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Teisėtumas
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Visos asociacijos veiksmai ir sprendimai atitinka Lietuvos
                Respublikos įstatymus ir kitus teisės aktus
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="size-14 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="size-7 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Atvirumas
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Skaidri ir atvira veikla, užtikrinanti visų narių dalyvavimą
                priimant svarbius sprendimus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fe9a00] to-[#e17100] rounded-full px-4 py-2 mb-4">
              <FileText className="size-5 text-white" />
              <span className="text-white font-medium">
                Pagrindiniai dokumentai
              </span>
            </div>
            <h2 className="text-2xl text-gray-900 mb-4">
              Atsisiųskite dokumentus
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Peržiūrėkite asociacijos įstatus ir etikos kodeksą
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Įstatai Document */}
            <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-3xl p-8 hover:border-[#fe9a00] hover:shadow-2xl transition-all group">
              <div className="flex items-start gap-6 mb-6">
                <div className="size-20 bg-gradient-to-b from-[#fe9a00] to-[#e17100] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="size-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    KKPDA įstatai
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Asociacijos įstatai, įregistruoti Juridinių asmenų registre
                    2021 metais
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FileText className="size-4" />
                    <span>{statutesName || "KKPDA-istatai-2021.pdf"}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="size-1.5 bg-[#fe9a00] rounded-full" />
                  <span>Asociacijos tikslai ir uždaviniai</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="size-1.5 bg-[#fe9a00] rounded-full" />
                  <span>Narių teisės ir pareigos</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="size-1.5 bg-[#fe9a00] rounded-full" />
                  <span>Valdymo organų struktūra</span>
                </div>
              </div>

              {statutesUrl ? (
                <a
                  href={statutesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#fe9a00] to-[#e17100] text-white px-6 py-4 rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  <Download className="size-5" />
                  Atidaryti dokumentą
                </a>
              ) : (
                <div className="w-full inline-flex items-center justify-center gap-2 bg-gray-300 text-gray-500 px-6 py-4 rounded-xl font-medium cursor-not-allowed">
                  <Download className="size-5" />
                  Dokumentas nepasiekiamas
                </div>
              )}
            </div>

            {/* Ethics Code Document */}
            <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-3xl p-8 hover:border-[#fe9a00] hover:shadow-2xl transition-all group">
              <div className="flex items-start gap-6 mb-6">
                <div className="size-20 bg-gradient-to-b from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="size-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Etikos kodeksas
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Asociacijos narių elgesio ir profesinės veiklos etikos
                    standartai
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FileText className="size-4" />
                    <span>{ethicsName || "KKPDA-Etikos-kodeksas.pdf"}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="size-1.5 bg-blue-500 rounded-full" />
                  <span>Profesinės veiklos principai</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="size-1.5 bg-blue-500 rounded-full" />
                  <span>Narių tarpusavio santykiai</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="size-1.5 bg-blue-500 rounded-full" />
                  <span>Atsakomybė ir skaidrumas</span>
                </div>
              </div>

              {ethicsUrl ? (
                <a
                  href={ethicsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  <Download className="size-5" />
                  Atidaryti dokumentą
                </a>
              ) : (
                <div className="w-full inline-flex items-center justify-center gap-2 bg-gray-300 text-gray-500 px-6 py-4 rounded-xl font-medium cursor-not-allowed">
                  <Download className="size-5" />
                  Dokumentas nepasiekiamas
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
