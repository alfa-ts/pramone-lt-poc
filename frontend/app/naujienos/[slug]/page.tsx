import { sanityFetch } from "@/sanity/lib/live";
import { singleNewsQuery } from "@/sanity/lib/queries";
import PortableText from "@/app/components/PortableText";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GoogleMap } from "@/app/components/GoogleMap";
import { Calendar, MapPin, Users } from "lucide-react";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("lt-LT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatEventTime(startDate?: string, endDate?: string | null) {
  if (!startDate) return null;

  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const formatFullDate = (date: Date) => {
    return date.toLocaleDateString("lt-LT", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (end) {
    // Check if same day
    if (
      start.getDate() === end.getDate() &&
      start.getMonth() === end.getMonth() &&
      start.getFullYear() === end.getFullYear()
    ) {
      return `${formatFullDate(start)}, ${formatTime(start)} - ${formatTime(end)}`;
    } else {
      return `${formatFullDate(start)} ${formatTime(start)} - ${formatFullDate(end)} ${formatTime(end)}`;
    }
  }

  return `${formatFullDate(start)}, ${formatTime(start)}`;
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: news } = await sanityFetch({
    query: singleNewsQuery,
    params: { slug },
  });

  if (!news) {
    notFound();
  }

  // Type assertion to help TypeScript understand the news object structure
  // const typedNews = news as {
  //   title: string;
  //   type: "naujiena" | "renginys" | null;
  //   excerpt: string;
  //   publishedAt: string;
  //   content?: any;
  //   coverImage?: {
  //     asset?: { url: string };
  //     alt?: string;
  //   };
  //   eventStartDate?: string;
  //   eventEndDate?: string;
  //   organizers?: string[];
  //   location?: string;
  //   googleMapsLocation?: string;
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 dotted-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center text-gray-500 text-sm font-medium mb-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Pradžia
            </Link>
            <span className="mx-2">→</span>
            <span className="text-primary font-semibold">Naujienos</span>
            <span className="mx-2">→</span>
            <span className="text-primary font-semibold">{news.title}</span>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
              {news.type === "renginys" ? "Renginys" : "Naujiena"}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              {news.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              {news.excerpt}
            </p>
            <div className="text-sm text-gray-500">
              {news.type === "renginys" && news.eventStartDate
                ? formatEventTime(news.eventStartDate, news.eventEndDate)
                : formatDate(news.publishedAt)}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          {news.coverImage?.asset?.url && (
            <div className="relative w-full h-96 mb-8 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={news.coverImage.asset.url}
                alt={news.coverImage.alt || news.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Event Information */}
          {news.type === "renginys" && (
            <div className="mb-8 bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Renginio informacija
              </h3>
              <div className="space-y-3">
                {news.eventStartDate && (
                  <div className="flex items-start gap-3">
                    <Calendar className="size-5 text-[#fe9a00] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-gray-700">
                        Laikas
                      </div>
                      <div className="text-gray-900">
                        {formatEventTime(
                          news.eventStartDate,
                          news.eventEndDate
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {news.location && (
                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-[#fe9a00] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-gray-700">
                        Vieta
                      </div>
                      <div className="text-gray-900">{news.location}</div>
                    </div>
                  </div>
                )}
                {news.organizers &&
                  (news.organizers as string[])?.length > 0 && (
                    <div className="flex items-start gap-3">
                      <Users className="size-5 text-[#fe9a00] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-gray-700">
                          Organizatoriai
                        </div>
                        <div className="text-gray-900">
                          {(news.organizers as string[])?.join(", ")}
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          )}

          {news.content && (
            <div className="prose prose-lg max-w-none">
              <PortableText value={news.content as any} />
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/naujienos"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              ← Grįžti į naujienas
            </Link>
          </div>
        </div>
      </section>

      {/* Google Map for Events */}
      {news.type === "renginys" &&
        (news.googleMapsLocation || news.location) && (
          <section className="bg-white pb-12">
            <div className="max-w-7xl mx-auto px-6">
              <GoogleMap
                address={news.googleMapsLocation || news.location || ""}
              />
            </div>
          </section>
        )}
    </div>
  );
}
