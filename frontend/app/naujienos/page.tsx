import { sanityFetch } from "@/sanity/lib/live";
import { allNewsQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import { Suspense } from "react";
import { NewsFilter } from "@/app/components/NewsFilter";
import { AllNewsQueryResult } from "@/sanity.types";

export default async function NaujienosPage() {
  const { data: newsData } = await sanityFetch({
    query: allNewsQuery,
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
            <span className="text-gray-900">Naujienos</span>
          </div>

          <h1 className="mb-6 text-5xl text-gray-900">Naujienos ir renginiai</h1>
          <p className="text-gray-600 max-w-3xl text-xl">
            Sužinokite paskutinių organizacijos įvykių, naujienų ir renginių
          </p>

          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#fe9a00] to-[#e17100] rounded-full" />
        </div>
      </div>

      {/* News Filter and Grid */}
      <Suspense fallback={<div className="py-16 text-center">Kraunama...</div>}>
        <NewsFilter newsData={newsData || []} />
      </Suspense>
    </div>
  );
}
