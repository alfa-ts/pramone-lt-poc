import { sanityFetch } from "@/sanity/lib/live";
import { allNewsQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const months = ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rug', 'Rgs', 'Spa', 'Lap', 'Grd'];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} • ${day} • ${year}`;
}

function formatCategory(category: string) {
  const categoryMap: { [key: string]: string } = {
    'bendros': 'Bendros',
    'renginiai': 'Renginiai',
    'projektai': 'Projektai',
    'spaudai': 'Pranešimai spaudai'
  };
  return categoryMap[category] || 'Bendros';
}

export default async function NewsListPage() {
  const { data: newsData } = await sanityFetch({
    query: allNewsQuery,
  });

  const news = newsData?.map((item: any) => ({
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
      {/* Header */}
      <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 dotted-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Naujienos
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
            Sužinokite paskutinius organizacijos įvykius ir naujienas
          </p>
          <div className="flex items-center justify-center text-gray-500 text-sm font-medium">
            <Link href="/" className="hover:text-primary transition-colors">
              Pradžia
            </Link>
            <span className="mx-2">→</span>
            <span className="text-primary font-semibold">Naujienos</span>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {news.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                             {news.map((item: any, index: number) => (
                 <div
                   key={index}
                   className="flex flex-col"
                 >
                   <Link 
                     href={item.slug ? `/naujienos/${item.slug}` : "#"}
                     className="relative w-full h-56 mb-4 overflow-hidden rounded-lg shadow-lg block cursor-pointer group"
                   >
                     {item.image ? (
                       <Image
                         src={item.image}
                         alt={item.alt || item.title}
                         fill
                         className="object-cover group-hover:scale-105 transition-transform duration-300"
                       />
                     ) : (
                       <div className="w-full h-full bg-yellow-400 rounded-lg group-hover:scale-105 transition-transform duration-300" />
                     )}
                     <div className="absolute top-2 left-2 bg-white text-xs font-bold text-blue-900 px-2 py-1 rounded shadow">
                       {item.date}
                     </div>
                   </Link>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-sm text-gray-500 mb-1">
                      {item.category}
                    </h3>
                    <h4 className="font-bold text-blue-900 mb-2 text-lg">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm flex-grow">
                      {item.excerpt}
                    </p>
                    <div className="mt-4">
                      <Link
                        href={item.slug ? `/naujienos/${item.slug}` : "#"}
                        className="text-blue-900 text-sm font-bold hover:underline inline-flex items-center transition-colors"
                      >
                        Plačiau <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Naujienų kol kas nėra
              </h3>
              <p className="text-gray-500">
                Grįžkite vėliau arba susisiekite su mumis dėl naujienų.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 