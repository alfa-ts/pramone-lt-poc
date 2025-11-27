"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Building2 } from "lucide-react";
import type { MembersQueryResult } from "@/sanity.types";

interface MembersGridProps {
  members: NonNullable<MembersQueryResult>;
}

export function MembersGrid({ members }: MembersGridProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = members.filter((member) => {
    const searchLower = searchQuery.toLowerCase();
    return member.company?.toLowerCase().includes(searchLower);
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-orange-100 rounded-full px-4 py-2 mb-4 border border-orange-200">
            <Building2 className="size-5 text-[#fe9a00]" />
            <span className="text-gray-900 font-medium">Mūsų nariai</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Įvairių sektorių lyderiai, kurie prisideda prie regiono ekonomikos
            augimo
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <input
                type="text"
                placeholder="Ieškoti narių pagal pavadinimą..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fe9a00] focus:border-transparent text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {searchQuery && (
              <p className="mt-4 text-sm text-gray-600 text-center">
                Rasta{" "}
                <span className="font-medium text-[#fe9a00]">
                  {filteredMembers.length}
                </span>{" "}
                organizacijų
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member, index) => (
            <div
              key={member._id}
              className="group bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-xl p-4 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative">
                {/* Logo */}
                <div className="bg-white rounded-lg p-4 mb-3 h-32 flex items-center justify-center transition-all overflow-hidden">
                  {member.logo?.asset?.url ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={member.logo.asset.url}
                        alt={`${member.company} logotipas`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                  ) : (
                    <div className="text-center">
                      <Building2 className="size-10 text-gray-300 group-hover:text-gray-400 transition-colors mx-auto mb-2" />
                      <p className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors">
                        LOGO
                      </p>
                    </div>
                  )}
                </div>

                {/* Company name */}
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900 transition-colors">
                    {member.company}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center size-20 bg-gray-100 rounded-full mb-4">
              <Search className="size-10 text-gray-400" />
            </div>
            <h3 className="text-gray-900 mb-2 font-medium">Narių nerasta</h3>
            <p className="text-gray-600">
              Pabandykite pakeisti paieškos kriterijus
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
