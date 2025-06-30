import { settingsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import MemberItem, { Member } from "./components/MemberItem";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default async function Page() {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
  });

  const query = `*[_type == "member"] | order(company asc)`;
  const results = await client.fetch(query);

  const members: Member[] = results.map((m: any) => ({
    _id: m._id,
    person: m.person,
    title: m.title,
    company: m.company,
    address: m.address,
    activity: m.activity,
    logo: m.logo ? urlFor(m.logo).width(200).url() : undefined,
  }));

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
          <div className="absolute inset-0 dotted-pattern opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Organizacijos nariai
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
              Susipažinkite su mūsų bendruomenės nariais ir jų veikla
            </p>
            <div className="flex items-center justify-center text-gray-500 text-sm font-medium">
              <span className="hover:text-primary transition-colors cursor-pointer">
                Pradžia
              </span>
              <span className="mx-2">→</span>
              <span className="text-primary font-semibold">Nariai</span>
            </div>
          </div>
        </section>

        {/* Members Section */}
        <section className="relative py-12 bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            {/* Compact Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {members.length} NARIŲ
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            {/* Members Grid */}
            <div className="space-y-6">
              {members.map((member, index) => (
                <div
                  key={member._id}
                  className="opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <MemberItem member={member} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
