import { sanityFetch } from "@/sanity/lib/live";
import { membershipInfoQuery } from "@/sanity/lib/queries";

export default async function KaipTaptiNariuPage() {
  const { data } = await sanityFetch({ query: membershipInfoQuery });
  const benefitsLines: string[] = typeof data?.benefitsText === "string"
    ? data.benefitsText
        .split(/\r?\n/)
        .map((line: string) => line.replace(/^\s*[•\-]\s*/, "").trim())
        .filter((line: string) => line.length > 0)
    : [];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 dotted-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-2 tracking-tight uppercase">
            Kaip tapti nariu
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 space-y-10 text-gray-700">
          <div>
            <h2 className="text-xl font-extrabold text-blue-900 mb-3">
              {data?.whyJoinTitle || "Kodėl verta tapti KKPDA nariu?"}
            </h2>
            {data?.whyJoinText && (
              <p className="leading-relaxed whitespace-pre-line">{data.whyJoinText}</p>
            )}
            {data?.whyJoinFileUrl && (
              <div className="mt-4">
                <a
                  href={data.whyJoinFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 underline underline-offset-2 font-semibold"
                >
                  {data.whyJoinFileName || "Atsisiųsti dokumentą"}
                </a>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-blue-900 mb-3">
              {data?.benefitsTitle || "Narystės Kauno krašto pramoninkų ir darbdavių asociacijoje privalumai"}
            </h2>
            {benefitsLines.length > 0 ? (
              <ul className="list-disc pl-6 space-y-2">
                {benefitsLines.map((item: string, idx: number) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            ) : (
              data?.benefitsText && (
                <p className="leading-relaxed whitespace-pre-line">{data.benefitsText}</p>
              )
            )}
            {data?.benefitsFileUrl && (
              <div className="mt-4">
                <a
                  href={data.benefitsFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 underline underline-offset-2 font-semibold"
                >
                  {data.benefitsFileName || "Atsisiųsti dokumentą"}
                </a>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-blue-900 mb-3">
              {data?.requiredDocumentsTitle || "Kokie dokumentai reikalingi?"}
            </h2>
            <ol className="space-y-4">
              {Array.isArray(data?.requiredDocuments) && data.requiredDocuments.length > 0 ? (
                data.requiredDocuments.map((doc: any, index: number) => (
                  <li key={doc._key || index} className="rounded-lg border border-gray-200 p-5 bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-100 text-amber-600 font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-blue-900">{doc.title}</div>
                        {doc.description && (
                          <div className="text-sm text-gray-600 whitespace-pre-line">{doc.description}</div>
                        )}
                        {doc.fileUrl && (
                          <a
                            href={doc.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-500 underline underline-offset-2 hover:text-amber-600 font-semibold"
                          >
                            {doc.fileName || "Parsisiųsti"}
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">Nėra dokumentų.</li>
              )}
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-blue-900 mb-3">
              {data?.feeTitle || "Koks yra KKPDA nario mokestis?"}
            </h2>
            {data?.feeText && (
              <p className="leading-relaxed whitespace-pre-line">{data.feeText}</p>
            )}
            {data?.feeFileUrl && (
              <div className="mt-4">
                <a
                  href={data.feeFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 underline underline-offset-2 font-semibold"
                >
                  {data.feeFileName || "Atsisiųsti dokumentą"}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}


