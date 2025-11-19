import { sanityFetch } from "@/sanity/lib/live";
import { membershipInfoQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, TrendingUp, Send, Mail, Phone, MapPin } from "lucide-react";

export default async function KaipTaptiNariuPage() {
  const { data } = await sanityFetch({ query: membershipInfoQuery });
  const benefitsLines: string[] =
    typeof data?.benefitsText === "string"
      ? data.benefitsText
          .split(/\r?\n/)
          .map((line: string) => line.replace(/^\s*[•\-]\s*/, "").trim())
          .filter((line: string) => line.length > 0)
      : [];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-11">
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
              Pradžia
            </Link>
            <svg className="size-3.5 text-gray-400" fill="none" viewBox="0 0 14 14">
              <path
                d="M5.25 10.5L8.75 7L5.25 3.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.16667"
              />
            </svg>
            <span className="text-sm text-gray-900">Kaip tapti nariu</span>
          </div>

          <h1 className="text-5xl text-gray-900 mb-6">Kaip tapti nariu?</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            KKPDA vienija įvairių sektorių įmones, teikiančias kvalifikuotas
            paslaugas įmonėms socialinės partnerystės, viešųjų pirkimų ir kitais
            klausimais
          </p>

          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#fe9a00] to-[#e17100] rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section 1: Why become a member */}
          <div className="mb-16">
            <h2 className="text-[32px] leading-[40px] text-[#2c3e5a] mb-6">
              {data?.whyJoinTitle || "Kodėl verta tapti KKPDA nariu?"}
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-gray-600">
              {data?.whyJoinText && (
                <div className="whitespace-pre-line">{data.whyJoinText}</div>
              )}
            </div>

            {data?.whyJoinFileUrl && (
              <div className="mt-4">
                <a
                  href={data.whyJoinFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fe9a00] hover:underline font-medium"
                >
                  {data.whyJoinFileName || "Atsisiųsti dokumentą"}
                </a>
              </div>
            )}
          </div>

          {/* Section 2: Membership Benefits */}
          <div className="mb-16">
            <h2 className="text-[32px] leading-[40px] text-[#2c3e5a] mb-6">
              {data?.benefitsTitle ||
                "Narystės Kauno krašto pramonininkų ir darbdavių asociacijoje privalumai"}
            </h2>

            <div className="space-y-5">
              {benefitsLines.map((item: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="size-6 shrink-0 mt-1 flex items-center justify-center">
                    <div className="size-2 bg-[#fe9a00] rounded-full" />
                  </div>
                  <p className="text-base leading-relaxed text-gray-600">{item}</p>
                </div>
              ))}
            </div>

            {data?.benefitsFileUrl && (
              <div className="mt-6">
                <a
                  href={data.benefitsFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fe9a00] hover:underline font-medium"
                >
                  {data.benefitsFileName || "Atsisiųsti dokumentą"}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-orange-100 rounded-full px-4 py-2 mb-4 border border-orange-200">
              <CheckCircle className="size-5 text-[#fe9a00]" />
              <span className="text-base text-gray-900 font-medium">
                Paprastas procesas
              </span>
            </div>
            <h2 className="text-4xl text-[#2c3e5a] mb-4">
              {data?.requiredDocumentsTitle || "Kokie dokumentai reikalingi?"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prisijungti prie KKPDA yra paprasta. Paruoškite šiuos dokumentus ir
              pradėkite kelionę kartu su mumis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Array.isArray(data?.requiredDocuments) && data.requiredDocuments.length > 0 ? (
              data.requiredDocuments.slice(0, 3).map((doc: any, index: number) => (
                <div key={doc._key || index} className="relative">
                  <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#fe9a00] transition-all h-full flex flex-col">
                    <div className="size-16 bg-gradient-to-br from-[#fe9a00] to-[#e17100] rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <span className="text-white text-2xl font-medium">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl text-center mb-3 text-gray-900 font-medium">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center flex-grow">
                      {doc.description && (
                        <span className="whitespace-pre-line">{doc.description}</span>
                      )}
                      {doc.fileUrl && (
                        <>
                          <br />
                          <a
                            href={doc.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#fe9a00] hover:underline font-medium"
                          >
                            {doc.fileName || "Parsisiųsti"}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                  {/* Connector Arrow */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-8 -translate-y-1/2 z-10">
                      <ArrowRight className="size-8 text-[#fe9a00]" />
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-500">
                Nėra dokumentų.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-orange-100 rounded-full px-4 py-2 mb-4 border border-orange-200">
              <TrendingUp className="size-5 text-[#fe9a00]" />
              <span className="text-base text-gray-900 font-medium">
                Narystės mokestis
              </span>
            </div>
            <h2 className="text-4xl text-[#2c3e5a] mb-4">
              {data?.feeTitle || "Kokia yra KKPDA nario mokestis?"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {data?.feeText || "Metinis mokestis priklauso nuo organizacijos dydžio"}
            </p>
          </div>

          {data?.feeImage?.asset?.url && (
            <div className="max-w-4xl mx-auto">
              <a
                href={data.feeImage.asset.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group cursor-pointer"
              >
                <Image
                  src={data.feeImage.asset.url}
                  alt={data.feeImage.alt || "Metinis KKPDA nario mokestis"}
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-lg transition-transform group-hover:scale-[1.02]"
                  style={{ width: "100%", height: "auto" }}
                />
                {/* Overlay hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span className="text-sm text-gray-900 font-medium">Spustelėkite peržiūrėti</span>
                  </div>
                </div>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#fe9a00] to-[#e17100] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-white mb-6">Pasiruošę prisijungti?</h2>
              <p className="text-lg text-amber-50 mb-8">
                Tapkite mūsų organizacijos nariu ir pradėkite naudotis visais
                narystės privalumais jau šiandien. Mūsų komanda mielai padės visame
                narystės registracijos procese.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white">
                  <div className="size-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle className="size-5" />
                  </div>
                  <span className="text-base">Profesionalus verslo tinklas</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="size-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle className="size-5" />
                  </div>
                  <span className="text-base">
                    Ekspertinė pagalba ir konsultacijos
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="size-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle className="size-5" />
                  </div>
                  <span className="text-base">Įtaka verslo aplinkai regione</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-8">
              <h3 className="text-2xl text-white mb-6">Susisiekite su mumis</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 text-white">
                  <MapPin className="size-5 text-amber-200 shrink-0 mt-1" />
                  <div>
                    <p className="text-base mb-1">Adresas</p>
                    <p className="text-sm text-amber-100">
                      Donelaičio g. 2, 119 kab., Kaunas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-white">
                  <Phone className="size-5 text-amber-200 shrink-0 mt-1" />
                  <div>
                    <p className="text-base mb-1">Telefonas</p>
                    <p className="text-sm text-amber-100">+370 37 409 578</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-white">
                  <Mail className="size-5 text-amber-200 shrink-0 mt-1" />
                  <div>
                    <p className="text-base mb-1">El. paštas</p>
                    <p className="text-sm text-amber-100">info@pramone.lt</p>
                  </div>
                </div>
              </div>

              <a
                href="mailto:info@pramone.lt"
                className="bg-white text-[#fe9a00] px-6 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors w-full inline-flex items-center justify-center gap-2"
              >
                <Send className="size-5" />
                Siųsti užklausą
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


