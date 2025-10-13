import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { newsQuery } from "@/sanity/lib/queries";

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
    "Rug",
    "Rgs",
    "Spa",
    "Lap",
    "Grd",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} • ${day} • ${year}`;
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

export default async function Page() {
  const { data: newsData } = await sanityFetch({
    query: newsQuery,
  });

  // Transform news data to match expected format
  const news =
    newsData?.map((item: any) => ({
      date: formatDate(item.publishedAt),
      title: item.title,
      category: formatCategory(item.category),
      excerpt: item.excerpt,
      image: item.coverImage?.asset?.url || "",
      alt: item.coverImage?.alt || "",
      slug: item.slug?.current || "",
    })) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Landing Page */}
      <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 dotted-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Sveiki atvykę
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Čia bus pagrindinis puslapis
          </p>
        </div>
      </section>
      {news.length > 0 && (
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 uppercase text-center">
                Naujienos
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {news.map((item: any, index: number) => (
                <div key={index} className="flex flex-col">
                  <Link
                    href={item.slug ? `/naujienos/${item.slug}` : "#"}
                    className="relative w-full h-56 mb-4 overflow-hidden block cursor-pointer group"
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.alt || item.title}
                        fill
                        className="object-cover rounded-sm group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-yellow-400 rounded-sm group-hover:scale-105 transition-transform duration-300" />
                    )}
                    <div className="absolute top-2 left-2 bg-white text-xs font-bold text-blue-900 px-2 py-1 rounded shadow">
                      {item.date}
                    </div>
                  </Link>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-sm text-gray-500 mb-1">
                      {item.category}
                    </h3>
                    <Link
                      href={item.slug ? `/naujienos/${item.slug}` : "#"}
                      className="block"
                    >
                      <h4 className="font-bold text-blue-900 text-lg mb-2 hover:text-primary transition-colors cursor-pointer">
                        {item.title}
                      </h4>
                    </Link>
                    <p className="text-gray-700 text-sm flex-grow">
                      {item.excerpt}
                    </p>
                    <div className="mt-2">
                      <a
                        href={item.slug ? `/naujienos/${item.slug}` : "#"}
                        className="text-blue-900 text-sm font-bold hover:underline inline-flex items-center"
                      >
                        Plačiau <span className="ml-1">&gt;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
