import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { leadershipQuery } from "@/sanity/lib/queries";
import { GovernanceStructureCard } from "@/app/components/GovernanceStructureCard";
import { LeadershipMemberCard } from "@/app/components/LeadershipMemberCard";
import { User, Users, UsersRound } from "lucide-react";

interface LeadershipMember {
  _id: string;
  name: string;
  position: string | null;
  role: "prezidentas" | "viceprezidentas" | "prezidiumoNarys" | "prezidiumoGarbesNarys";
  photo: {
    asset: {
      url: string | null;
    } | null;
  };
  phone?: string | null;
  email?: string | null;
}

export default async function ValdymasPage() {
  const { data: leadershipData } = await sanityFetch({
    query: leadershipQuery,
  });

  // Group leadership data by role
  const president = leadershipData?.filter(
    (member: LeadershipMember) => member.role === "prezidentas"
  )[0];

  const vicePresidents = leadershipData?.filter(
    (member: LeadershipMember) => member.role === "viceprezidentas"
  );

  const presidiumMembers = leadershipData?.filter(
    (member: LeadershipMember) => member.role === "prezidiumoNarys"
  );

  const honoraryMembers = leadershipData?.filter(
    (member: LeadershipMember) => member.role === "prezidiumoGarbesNarys"
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Pradžia
            </Link>
            <svg
              className="size-3.5 text-gray-400"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                d="M5.25 10.5L8.75 7L5.25 3.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.16667"
              />
            </svg>
            <Link href="/apie/istorija" className="text-gray-500 hover:text-gray-700">
              Apie mus
            </Link>
            <svg
              className="size-3.5 text-gray-400"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                d="M5.25 10.5L8.75 7L5.25 3.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.16667"
              />
            </svg>
            <span className="text-gray-900">Valdymas</span>
          </div>

          <h1 className="mb-6 text-5xl text-gray-900">Valdymas</h1>
          <p className="text-gray-600 max-w-3xl text-xl">
            Asociacijos valdymo struktūra ir pagrindiniai sprendimų priėmimo
            organai
          </p>

          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#fe9a00] to-[#e17100] rounded-full" />
        </div>
      </div>

      {/* Governance Structure Overview */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <h2 className="mb-4 text-2xl text-gray-900">
            Visuotinė narių konferencija – aukščiausias valdymo organas
          </h2>
          <p className="text-gray-600 text-lg">
            Ji šaukiama ne rečiau kaip kartą per dvejus metus. Konferencija
            nustato pagrindinius asociacijos tikslus ir uždavinius, renka ir
            atšaukia asociacijos Prezidiumą, vertina Prezidiumo veiklos
            rezultatus.
          </p>
        </div>
      </section>

      {/* President Section */}
      {president && (
        <section className="max-w-7xl mx-auto px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* President Info Card */}
            <div className="lg:sticky lg:top-24">
              <GovernanceStructureCard
                title="Prezidentas"
                description="Atstovauja asociaciją valstybinėse valdžios institucijose, savarankiškai vykdo Prezidiumo pavestas funkcijas, sprendžia organizacinius asociacijos klausimus."
                icon={
                  <User className="size-6 text-white" strokeWidth={2} />
                }
                variant="blue"
              />
            </div>

            {/* President Card */}
            <div className="max-w-sm mx-auto lg:mx-0">
              <LeadershipMemberCard
                name={president.name}
                position={president.position || ""}
                image={president.photo?.asset?.url || "/placeholder.jpg"}
                alt={`${president.name} nuotrauka`}
                phone={president.phone || undefined}
                email={president.email || undefined}
              />
            </div>
          </div>
        </section>
      )}

      {/* Vice Presidents Section */}
      {vicePresidents && vicePresidents.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12 max-w-4xl mx-auto">
              <GovernanceStructureCard
                title="Viceprezidentai"
                description="Vykdo Prezidiumo ir Prezidento apibrėžtas veiklos funkcijas. Padeda prezidentui vadovauti asociacijai ir atstovauja strateginėms veiklos kryptims."
                icon={
                  <Users className="size-6 text-white" strokeWidth={2} />
                }
                variant="orange"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vicePresidents.map((member: LeadershipMember) => (
                <LeadershipMemberCard
                  key={member._id}
                  name={member.name}
                  position={member.position || ""}
                  image={member.photo?.asset?.url || "/placeholder.jpg"}
                  alt={`${member.name} nuotrauka`}
                  phone={member.phone || undefined}
                  email={member.email || undefined}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Presidium Members Section */}
      {presidiumMembers && presidiumMembers.length > 0 && (
        <section className="max-w-7xl mx-auto px-8 py-20">
          <div className="mb-12 max-w-4xl mx-auto">
            <GovernanceStructureCard
              title="Prezidiumas – kolegialus valdymo organas"
              description="Prezidiumas renkamas visuotinėje narių konferencijoje 4 metams. Jis priima strateginius veiklos sprendimus, susijusius su asociacijos nuostatomis ir tikslais, tarp asociacijos narių konferencijų svarsto ir tvirtina asociacijos metinę finansinę atskaitomybę, priima bei šalina asociacijos narius, skiria ir atleidžia asociacijos administracijos vadovą ir vyriausiąjį finansininką, tvirtina administracijos etatus, vadovo darbo reglamentą, priima sprendimus dėl nario mokesčio."
              icon={
                <UsersRound className="size-6 text-white" strokeWidth={2} />
              }
              variant="blue"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presidiumMembers.map((member: LeadershipMember) => (
              <LeadershipMemberCard
                key={member._id}
                name={member.name}
                position={member.position || ""}
                image={member.photo?.asset?.url || "/placeholder.jpg"}
                alt={`${member.name} nuotrauka`}
                phone={member.phone || undefined}
                email={member.email || undefined}
              />
            ))}
          </div>
        </section>
      )}

      {/* Honorary Presidium Members Section */}
      {honoraryMembers && honoraryMembers.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12">
              <h2 className="text-2xl text-gray-900 mb-2">
                Prezidiumo garbės nariai
              </h2>
              <p className="text-gray-600 text-lg">
                Asmenys, įnešę ypatingą indėlį į asociacijos veiklą ir verslo
                bendruomenės plėtrą
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {honoraryMembers.map((member: LeadershipMember) => (
                <LeadershipMemberCard
                  key={member._id}
                  name={member.name}
                  position={member.position || ""}
                  image={member.photo?.asset?.url || "/placeholder.jpg"}
                  alt={`${member.name} nuotrauka`}
                  phone={member.phone || undefined}
                  email={member.email || undefined}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
