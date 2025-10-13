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
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-3 tracking-tight uppercase">
            Misija ir vizija
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Mūsų organizacijos kryptys ir tikslai – trumpai ir aiškiai išdėstyti žemiau.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:divide-x md:divide-gray-200">
            <div className="bg-white rounded-lg border border-gray-100 p-6 md:p-8 border-l-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center">
                  <FaBullseye />
                </div>
                <h2 className="text-2xl font-extrabold text-blue-900 uppercase tracking-tight">Misija</h2>
              </div>
              <p className="text-gray-700 leading-8 max-w-prose">
                Atstovauti nariams, vienijant verslo, mokslo ir visuomenės interesus.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-6 md:p-8 border-l-4 border-yellow-500 md:pl-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center">
                  <FaEye />
                </div>
                <h2 className="text-2xl font-extrabold text-blue-900 uppercase tracking-tight">Vizija</h2>
              </div>
              <p className="text-gray-700 leading-8 max-w-prose">
                Vedanti ir atvira verslo organizacija, kurioje narystė yra vertinga ir garbinga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Directions */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase text-center">
            Strateginės veiklos kryptys
          </h2>
          <div className="h-1 w-20 bg-yellow-500 rounded mx-auto my-4"></div>
          <div className="grid gap-4 lg:gap-6 md:grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto">
            {(directions || []).map((item: any, index: number) => (
              <div
                key={item._id}
                className="group relative bg-white rounded-md p-4 border border-gray-100 pl-5 hover:bg-gray-50 transition-colors"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500 rounded-l" />
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center mt-0.5 text-xs font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-gray-800 font-medium leading-7">{item.title}</p>
                </div>
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


