import { sanityFetch } from "@/sanity/lib/live";
import { membersQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { Award } from "lucide-react";
import { Suspense } from "react";
import { MembersGrid } from "@/app/components/MembersGrid";

export default async function NariaiPage() {
  const { data: members } = await sanityFetch({
    query: membersQuery,
  });

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
            <span className="text-gray-900">Nariai</span>
          </div>

          <h1 className="mb-6 text-5xl text-gray-900">Organizacijos nariai</h1>
          <p className="text-gray-600 max-w-3xl text-xl">
            KKPDA vienija įvairių sektorių įmones, kurios kartu kuria stiprią
            verslo bendruomenę Kauno regione ir visoje Lietuvoje
          </p>

          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#fe9a00] to-[#e17100] rounded-full" />
        </div>
      </div>

      {/* Members Grid Section */}
      <Suspense
        fallback={<div className="py-16 text-center">Kraunama...</div>}
      >
        <MembersGrid members={members || []} />
      </Suspense>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MzQxMjg1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 mb-6">
                <Award className="size-5 text-[#fe9a00]" />
                <span className="text-[#fe9a00] font-medium text-sm">
                  Narystės privalumai
                </span>
              </div>

              <h2 className="text-xl text-gray-900 font-medium mb-6">
                Kodėl verta tapti nariu?
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="size-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <div className="size-2 bg-[#fe9a00] rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">
                      Atstovavimas interesams
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Aktyvus dalyvavimas formuojant verslo aplinką regione
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <div className="size-2 bg-[#fe9a00] rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">
                      Verslo tinklas
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Bendradarbiavimo galimybės su kitais nariais
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <div className="size-2 bg-[#fe9a00] rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">
                      Konsultacijos
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Profesionali pagalba teisės, mokesčių ir darbo santykių
                      klausimais
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <div className="size-2 bg-[#fe9a00] rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">
                      Mokymai ir renginiai
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Specializuoti mokymai ir verslo forumų organizavimas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#fe9a00] to-[#e17100] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white text-xl font-medium mb-4">
              Norite prisijungti prie KKPDA?
            </h2>
            <p className="text-amber-50 text-lg mb-8">
              Tapkite mūsų organizacijos nariu ir prisidėkite prie stiprios
              verslo bendruomenės kūrimo
            </p>
            <div className="flex items-center justify-center">
              <Link
                href="/nariai/kaip-tapti-nariu"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                Narystės sąlygos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 