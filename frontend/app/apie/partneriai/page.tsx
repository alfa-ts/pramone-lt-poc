import { sanityFetch } from "@/sanity/lib/live";
import { partnersQuery } from "@/sanity/lib/queries";

type Partner = { _id: string; title: string; extra?: string };

export default async function PartneriaiPage() {
  const { data } = await sanityFetch<{ data: { cooperate: Partner[]; agreements: Partner[] } }>({
    query: partnersQuery,
  });
  const cooperate = data?.cooperate || [];
  const agreements = data?.agreements || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 dotted-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight uppercase">Partneriai</h1>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* Left column */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-amber-500 mb-6 uppercase">Mes bendradarbiaujame su</h2>
            <ul className="divide-y">
              {cooperate.map((p, idx) => (
                <li key={p._id} className="py-3 flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-white text-sm font-semibold">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700">{p.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-amber-500 mb-6 uppercase">Pasirašytos bendradarbiavimo sutartys</h2>
            <ul className="divide-y">
              {agreements.map((p, idx) => (
                <li key={p._id} className="py-3 flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-white text-sm font-semibold">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 flex-1">{p.title}</span>
                  {p.extra && <span className="text-gray-500 text-sm">{p.extra}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}


