import { sanityFetch } from "@/sanity/lib/live";
import { membersQuery } from "@/sanity/lib/queries";
import Link from "next/link";
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