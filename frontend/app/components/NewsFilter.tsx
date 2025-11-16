"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  Tag,
  Clock,
  Building2,
} from "lucide-react";

interface NewsItem {
  _id: string;
  title: string;
  slug: { current: string };
  type: "naujiena" | "renginys";
  isFeatured?: boolean;
  excerpt: string;
  coverImage?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
  publishedAt: string;
  eventStartDate?: string;
  eventEndDate?: string;
  organizers?: string[];
  location?: string;
  googleMapsLocation?: string;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const months = [
    "Sau",
    "Vas",
    "Kov",
    "Bal",
    "Geg",
    "Bir",
    "Lie",
    "Rugp",
    "Rugs",
    "Spal",
    "Lapk",
    "Gruod",
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function formatEventTime(startDate?: string, endDate?: string) {
  if (!startDate) return null;

  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const formatFullDate = (date: Date) => {
    const months = [
      "Sau",
      "Vas",
      "Kov",
      "Bal",
      "Geg",
      "Bir",
      "Lie",
      "Rugp",
      "Rugs",
      "Spal",
      "Lapk",
      "Gruod",
    ];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  if (end) {
    // Check if same day
    if (
      start.getDate() === end.getDate() &&
      start.getMonth() === end.getMonth() &&
      start.getFullYear() === end.getFullYear()
    ) {
      return `${formatFullDate(start)} • ${formatTime(start)} - ${formatTime(end)}`;
    } else {
      return `${formatFullDate(start)} ${formatTime(start)} - ${formatFullDate(end)} ${formatTime(end)}`;
    }
  }

  return `${formatFullDate(start)} • ${formatTime(start)}`;
}

interface NewsFilterProps {
  newsData: NewsItem[];
}

export function NewsFilter({ newsData }: NewsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("Visos");

  const categories = ["Visos", "Renginiai", "Naujienos"];

  // Filter articles based on selected category
  const filteredArticles =
    selectedCategory === "Visos"
      ? newsData
      : selectedCategory === "Renginiai"
        ? newsData.filter((article) => article.type === "renginys")
        : newsData.filter((article) => article.type === "naujiena");

  // Featured article - always show if it exists, regardless of filter
  const featuredArticle = newsData.find((article) => article.isFeatured);

  // Regular articles - show all articles including featured
  const regularArticles = filteredArticles;

  return (
    <>
      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-[400px] lg:h-auto overflow-hidden">
                  {featuredArticle.coverImage?.asset?.url ? (
                    <Image
                      src={featuredArticle.coverImage.asset.url}
                      alt={
                        featuredArticle.coverImage.alt ||
                        featuredArticle.title
                      }
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#fe9a00] to-[#e17100] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                      <Tag className="size-3.5" />
                      {featuredArticle.type === "renginys"
                        ? "Renginiai"
                        : "Naujienos"}
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="size-4 text-[#fe9a00]" />
                    {featuredArticle.type === "renginys" &&
                    featuredArticle.eventStartDate
                      ? formatEventTime(
                          featuredArticle.eventStartDate,
                          featuredArticle.eventEndDate
                        )
                      : formatDate(featuredArticle.publishedAt)}
                  </div>

                  <h2 className="text-2xl text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <Link
                    href={`/naujienos/${featuredArticle.slug.current}`}
                    className="inline-flex items-center gap-2 text-[#fe9a00] font-medium hover:gap-3 transition-all group/link"
                  >
                    Skaityti daugiau
                    <ArrowRight className="size-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full whitespace-nowrap transition-all font-medium text-sm ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#fe9a00] to-[#e17100] text-white shadow-lg shadow-orange-200"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          {regularArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <article
                  key={article._id}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-[#fe9a00] transition-all duration-300 group flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    {article.coverImage?.asset?.url ? (
                      <Image
                        src={article.coverImage.asset.url}
                        alt={article.coverImage.alt || article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                        <Tag className="size-3" />
                        {article.type === "renginys" ? "Renginiai" : "Naujienos"}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Clock className="size-3.5 text-[#fe9a00]" />
                      {article.type === "renginys" && article.eventStartDate
                        ? formatEventTime(
                            article.eventStartDate,
                            article.eventEndDate
                          )
                        : formatDate(article.publishedAt)}
                    </div>

                    <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-[#fe9a00] transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>

                    <Link
                      href={`/naujienos/${article.slug.current}`}
                      className="inline-flex items-center gap-2 text-[#fe9a00] font-medium text-sm hover:gap-3 transition-all group/link mt-auto"
                    >
                      Plačiau
                      <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center size-20 bg-gray-100 rounded-full mb-4">
                <Building2 className="size-10 text-gray-400" />
              </div>
              <h3 className="text-gray-900 mb-2 text-xl font-medium">
                {selectedCategory === "Renginiai"
                  ? "Renginių nėra"
                  : "Naujienų nerasta"}
              </h3>
              <p className="text-gray-600">
                {selectedCategory === "Renginiai"
                  ? "Šioje kategorijoje renginių nėra"
                  : "Šioje kategorijoje naujienų nėra"}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

