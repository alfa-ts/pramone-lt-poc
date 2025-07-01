import { sanityFetch } from "@/sanity/lib/live";
import { singleNewsQuery } from "@/sanity/lib/queries";
import PortableText from "@/app/components/PortableText";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("lt-LT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatCategory(category: string) {
  const categoryMap: { [key: string]: string } = {
    bendros: "Bendros",
    renginiai: "Renginiai",
    projektai: "Projektai",
    spaudai: "Pranešimai spaudai",
  };
  return categoryMap[category] || "Bendros";
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
  const typedNews = news as {
    title: string;
    category: string;
    excerpt: string;
    publishedAt: string;
    content?: any;
    coverImage?: {
      asset?: { url: string };
      alt?: string;
    };
  };

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
            <span className="text-primary font-semibold">{typedNews.title}</span>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
              {formatCategory(typedNews.category)}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              {typedNews.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              {typedNews.excerpt}
            </p>
            <div className="text-sm text-gray-500">
              {formatDate(typedNews.publishedAt)}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          {typedNews.coverImage?.asset?.url && (
            <div className="relative w-full h-96 mb-8 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={typedNews.coverImage.asset.url}
                alt={typedNews.coverImage.alt || typedNews.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {typedNews.content && (
            <div className="prose prose-lg max-w-none">
              <PortableText value={typedNews.content} />
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              ← Grįžti į pradžią
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
