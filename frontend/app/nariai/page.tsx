import { settingsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Member } from "../components/MemberItem";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default async function Page() {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
  });

  const query = `*[_type == "member"] | order(company asc) {
    _id,
    person,
    title,
    company,
    address,
    activity,
    "logo": logo{
      asset->{
        _id,
        url
      },
      alt
    }
  }`;
  const results = await client.fetch(query);

  const members: Member[] = results.map((m: any) => ({
    _id: m._id,
    person: m.person,
    title: m.title,
    company: m.company,
    address: m.address,
    activity: m.activity,
    logo: m.logo?.asset?.url ? urlFor(m.logo).width(200).url() : undefined,
    logoAlt: m.logo?.alt || "",
  }));

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
          <div className="absolute inset-0 dotted-pattern opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
              Organizacijos nariai
            </h1>
          </div>
        </section>

        {/* Members Grid Section */}
        <section className="relative py-12 bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0">
              {members.map((member, index) => (
                <div
                  key={member._id}
                  className="group relative bg-white overflow-hidden flex items-center justify-center h-36 sm:h-40 md:h-48 border-x border-b border-gray-200"
                  style={{
                    animationDelay: `${index * 60}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {/* Logo */}
                  <div className="relative w-[70%] h-20 sm:h-24 md:h-28">
                    <Image
                      src={member.logo || "/images/default-logo.png"}
                      alt={member.logoAlt || member.company}
                      fill
                      sizes="(max-width: 768px) 70vw, 300px"
                      className="object-contain transition duration-300"
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-4">
                    <div className="text-gray-900 font-semibold leading-tight">
                      {member.company}
                    </div>
                    <div className="text-gray-600 text-sm mt-1 line-clamp-2">
                      {member.activity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 