import { sanityFetch } from "@/sanity/lib/live";
import { singleNewsQuery, recentNewsQuery } from "@/sanity/lib/queries";
import PortableText from "@/app/components/PortableText";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GoogleMap } from "@/app/components/GoogleMap";
import { NewsSidebar } from "@/app/components/NewsSidebar";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
} from "lucide-react";

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

  const { data: recentNews } = await sanityFetch({
    query: recentNewsQuery,
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
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Pradžia
            </Link>
            <ChevronRight className="size-4 text-gray-400" />
            <Link
              href="/naujienos"
              className="text-gray-500 hover:text-gray-700"
            >
              Naujienos
            </Link>
            <ChevronRight className="size-4 text-gray-400" />
            <span className="text-gray-900">{news.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fe9a00] to-[#e17100] text-white px-4 py-2 rounded-full text-sm font-medium">
              <Tag className="size-4" />
              {news.type === "renginys" ? "Renginiai" : "Naujienos"}
            </span>
          </div>

          <h1 className="mb-6 text-5xl lg:text-6xl text-gray-900">
            {news.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-[#fe9a00]" />
              <span>
                {news.type === "renginys" && news.eventStartDate
                  ? formatEventTime(news.eventStartDate, news.eventEndDate)
                  : formatDate(news.publishedAt)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-5 text-[#fe9a00]" />
              <span>5 min skaitymo</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-600 text-sm font-medium">Dalintis:</span>
            <div className="flex items-center gap-2">
              <button className="size-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] transition-all group">
                <Facebook className="size-5" />
              </button>
              <button className="size-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-[#1da1f2] hover:text-white hover:border-[#1da1f2] transition-all group">
                <Twitter className="size-5" />
              </button>
              <button className="size-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all group">
                <Linkedin className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {news.coverImage?.asset?.url && (
        <section className="py-8 bg-white">
          <div className="max-w-5xl mx-auto px-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={news.coverImage.asset.url}
                alt={news.coverImage.alt || news.title}
                width={1200}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content & Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
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

              <article className="prose prose-lg max-w-none">
                {news.excerpt && (
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    {news.excerpt}
                  </p>
                )}

                {news.content && <PortableText value={news.content as any} />}
              </article>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                  href="/naujienos"
                  className="inline-flex items-center text-[#fe9a00] hover:text-[#e17100] transition-colors font-medium"
                >
                  ← Grįžti į naujienas
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <NewsSidebar
                  recentNews={recentNews || []}
                  currentNewsId={news._id}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map for Events */}
      {news.type === "renginys" &&
        (news.googleMapsLocation || news.location) && (
          <section className="bg-white pb-12">
            <div className="max-w-7xl mx-auto px-8">
              <GoogleMap
                address={news.googleMapsLocation || news.location || ""}
              />
            </div>
          </section>
        )}
    </div>
  );
}
