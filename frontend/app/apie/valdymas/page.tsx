import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { leadershipQuery } from "@/sanity/lib/queries";

export default async function ValdymasPage() {
  const { data: leadershipData } = await sanityFetch({
    query: leadershipQuery,
  });

  // Group leadership data by role
  const groupedLeadership =
    leadershipData?.reduce((acc: any, member: any) => {
      // Clean the role value by trimming whitespace and removing invisible characters
      const cleanRole =
        member.role?.trim().replace(/[\u200B-\u200D\uFEFF]/g, "") || "";

      let roleKey: string;
      if (cleanRole === "prezidentas") {
        roleKey = "Prezidentas";
      } else if (cleanRole === "viceprezidentas") {
        roleKey = "Viceprezidentai";
      } else if (cleanRole === "prezidiumoNarys") {
        roleKey = "Prezidiumo nariai";
      } else if (cleanRole === "prezidiumoGarbesNarys") {
        roleKey = "Prezidiumo garbės nariai";
      } else {
        roleKey = "Kita"; // fallback
      }

      if (!acc[roleKey]) {
        acc[roleKey] = [];
      }

      acc[roleKey].push({
        name: member.name,
        position: member.position,
        image: member.photo?.asset?.url || "/placeholder.jpg",
        alt: member.photo?.alt || "",
      });

      return acc;
    }, {}) || {};

  // Convert to the expected format
  const desiredOrder = [
    "Prezidentas",
    "Viceprezidentai",
    "Prezidiumo nariai",
    "Prezidiumo garbės nariai",
  ];

  const people = desiredOrder
    .filter((role) => groupedLeadership[role])
    .map((role) => ({ role, members: groupedLeadership[role] as any[] }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 dotted-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Valdymas
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Asociacijos vadovybė ir valdymo struktūra
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      {people.length > 0 && (
        <section className="bg-white py-12">
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
                          alt={member.alt || member.name}
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

