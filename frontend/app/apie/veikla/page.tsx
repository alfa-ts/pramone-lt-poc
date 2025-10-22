import { sanityFetch } from "@/sanity/lib/live";
import { activityReportsQuery } from "@/sanity/lib/queries";

export default async function VeiklaPage() {
  const { data: reports } = await sanityFetch({ query: activityReportsQuery });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 dotted-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight uppercase">
            Veikla
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-700 font-semibold mb-6">
            KKPDA atstovauja savo narių interesus įvairiose tarybose ir komisijose:
          </p>

          <div className="grid md:grid-cols-2 gap-12 text-gray-700">
            <div>
              <h3 className="font-bold text-blue-900 mb-3">Nacionaliniu mastu:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>LR Trišalėje taryboje</li>
                <li>LR Darbuotojų saugos ir sveikatos komisijoje</li>
                <li>LR darbo ginčų komisijose</li>
                <li>LPK Prezidiume</li>
                <li>LPK komitetuose</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-blue-900 mb-3">Regioniniu mastu:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Darbo ginčų komisijose prie Kauno darbo inspekcijos</li>
                <li>Kauno regiono plėtros tarybos kolegijos partnerių grupėje</li>
                <li>Kauno miesto savivaldybės Verslo taryboje</li>
                <li>Kauno miesto savivaldybės Trišalėje taryboje</li>
                <li>Kauno rajono savivaldybės Trišalėje taryboje</li>
                <li>
                  Kauno rajono savivaldybės smulkaus ir vidutinio verslo skatinimo fondo valdyboje
                </li>
                <li>Kauno technologijų mokymo centro taryboje</li>
                <li>Lietuvos sveikatos mokslų universiteto savivaldos grupėje</li>
              </ul>
            </div>
          </div>

          {/* Reports */}
          <div className="mt-10 space-y-6 text-gray-700">
            {Array.isArray(reports) && reports.length > 0 ? (
              reports.map((item: any) => (
                <div key={item._id} className="rounded-lg border border-gray-200 p-5 bg-gray-50">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className={`flex gap-3 ${item.fileName ? 'items-start' : 'items-center'}`}>
                      {/* Document icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-7 h-7 text-amber-500 mt-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h6l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 3v6h6" />
                      </svg>
                      <div>
                        <div className="font-semibold text-blue-900">KKPDA {item.period} m. veiklos ataskaita</div>
                        {item.fileName && (
                          <div className="text-sm text-gray-500">{item.fileName}</div>
                        )}
                      </div>
                    </div>
                    {item.fileUrl ? (
                      <a
                        href={item.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-500 underline underline-offset-2 hover:text-amber-600 font-semibold"
                      >
                        Atsisųsti dokumentą
                      </a>
                    ) : (
                      <span className="text-gray-400">(failas nepasiekiamas)</span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Šiuo metu ataskaitų nėra.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}


