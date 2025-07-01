import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { leadershipQuery, newsQuery } from "@/sanity/lib/queries";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

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

export default async function Page() {
  const [{ data: leadershipData }, { data: newsData }] = await Promise.all([
    sanityFetch({
      query: leadershipQuery,
    }),
    sanityFetch({
      query: newsQuery,
    })
  ]);

  // Group leadership data by role
  const groupedLeadership = leadershipData?.reduce((acc: any, member: any) => {
    const roleKey = member.role === 'prezidentas' ? 'Prezidentas' : 'Viceprezidentai';
    
    if (!acc[roleKey]) {
      acc[roleKey] = [];
    }
    
    acc[roleKey].push({
      name: member.name,
      position: member.position,
      image: member.photo?.asset?.url || '/placeholder.jpg',
    });
    
    return acc;
  }, {}) || {};

  // Convert to the expected format
  const people = Object.entries(groupedLeadership).map(([role, members]) => ({
    role,
    members: members as any[],
  }));

  // Transform news data to match expected format
  const news = newsData?.map((item: any) => ({
    date: formatDate(item.publishedAt),
    title: item.title,
    category: formatCategory(item.category),
    excerpt: item.excerpt,
    image: item.coverImage?.asset?.url || "",
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
                  <div className="relative w-full h-56 mb-4 overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-sm"
                      />
                    ) : (
                      <div className="w-full h-full bg-yellow-400 rounded-sm" />
                    )}
                    <div className="absolute top-2 left-2 bg-white text-xs font-bold text-blue-900 px-2 py-1 rounded shadow">
                      {item.date}
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-sm text-gray-500 mb-1">
                      {item.category}
                    </h3>
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      {item.title}
                    </h4>
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
      {people.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-5xl mx-auto px-4 space-y-16">
            {people.map((group) => (
              <div key={group.role}>
                <div className="flex items-center justify-center mb-8">
                  <hr className="flex-grow border-gray-300" />
                  <h2 className="text-xl md:text-2xl font-bold text-yellow-500 mx-4 uppercase text-center">
                    {group.role}
                  </h2>
                  <hr className="flex-grow border-gray-300" />
                </div>
                <div
                  className={`flex ${
                    group.members.length > 1
                      ? "flex-wrap justify-center gap-8"
                      : "justify-center"
                  }`}
                >
                  {group.members.map((member: any) => (
                    <div
                      key={member.name}
                      className="flex flex-col items-center text-center max-w-xs"
                    >
                      <div className="w-40 h-40 rounded-full overflow-hidden mb-4 shadow-lg">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={160}
                          height={160}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="font-bold text-blue-900 text-lg uppercase">
                        {member.name}
                      </h3>
                      <p className="text-blue-900 text-sm mt-1">
                        {member.position}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
