import { sanityFetch } from "@/sanity/lib/live";
import { newsQuery, membersCountQuery, strategicDirectionsQuery, partnersQuery, membershipInfoQuery } from "@/sanity/lib/queries";
import { NewsCarousel } from "./components/NewsCarousel";
import { OrganizationFacts } from "./components/OrganizationFacts";
import { MissionVision } from "./components/MissionVision";
import { MemberBenefits } from "./components/MemberBenefits";
import { MembershipCTA } from "./components/MembershipCTA";

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
  const [
    { data: newsData },
    { data: membersCount },
    { data: directions },
    { data: partners },
    { data: membership }
  ] = await Promise.all([
    sanityFetch({ query: newsQuery }),
    sanityFetch({ query: membersCountQuery }),
    sanityFetch({ query: strategicDirectionsQuery }),
    sanityFetch({ query: partnersQuery }),
    sanityFetch({ query: membershipInfoQuery }),
  ]);

  // Calculate full years of activity since 1989-12-22
  const now = new Date();
  const foundingYear = 1989;
  const anniversaryMonth = 11; // December (0-based)
  const anniversaryDay = 22;
  let yearsOfActivity = now.getFullYear() - foundingYear;
  const anniversaryThisYear = new Date(
    now.getFullYear(),
    anniversaryMonth,
    anniversaryDay
  );
  if (now < anniversaryThisYear) {
    yearsOfActivity -= 1;
  }

  // Transform news data to match expected format
  const news =
    newsData?.slice(0, 5).map((item: any) => ({
      date: formatDate(item.publishedAt),
      title: item.title,
      category: formatCategory(item.category),
      excerpt: item.excerpt,
      image: item.coverImage?.asset?.url || "",
      alt: item.coverImage?.alt || item.title,
      slug: item.slug?.current || "",
    })) || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero News Carousel */}
      <NewsCarousel news={news} />

      {/* Organization Facts / Stats */}
      <OrganizationFacts 
        yearsOfActivity={yearsOfActivity} 
        membersCount={membersCount || 0} 
      />

      {/* Mission, Vision & Strategic Directions */}
      <MissionVision strategicDirections={directions} />

      {/* Member Benefits */}
      <MemberBenefits />

      {/* Membership CTA */}
      <MembershipCTA 
        membersCount={membersCount || 0} 
        yearsOfActivity={yearsOfActivity} 
      />
    </div>
  );
}
