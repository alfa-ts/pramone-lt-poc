import { sanityFetch } from "@/sanity/lib/live";
import { strategicDirectionsQuery } from "@/sanity/lib/queries";
import { FaBullseye, FaEye, FaCheckCircle } from "react-icons/fa";

export const dynamic = "force-static";

export default async function MisijaVizijaPage() {
  const { data: directions } = await sanityFetch({ query: strategicDirectionsQuery });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 dotted-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight uppercase">
            Misija ir vizija
          </h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-wide mb-4 flex items-center gap-3">
                <FaBullseye className="text-yellow-500" /> Misija
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Atstovauti nariams, vienijant verslo, mokslo ir visuomenės interesus.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-wide mb-4 flex items-center gap-3">
                <FaEye className="text-yellow-500" /> Vizija
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Vedanti ir atvira verslo organizacija, kurioje narystė yra vertinga ir garbinga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Directions */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 uppercase text-center">
            Strateginės veiklos kryptys
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {(directions || []).map((item: any) => (
              <div key={item._id} className="flex items-start gap-3 bg-white rounded-md p-4 shadow-sm border border-gray-100">
                <FaCheckCircle className="text-yellow-500 mt-1" />
                <p className="text-gray-800 font-medium">{item.title}</p>
              </div>
            ))}
            {(!directions || directions.length === 0) && (
              <p className="text-center text-gray-500">Nėra suvestų krypčių.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}


