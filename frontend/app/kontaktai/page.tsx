import { sanityFetch } from "@/sanity/lib/live";
import { contactInfoQuery } from "@/sanity/lib/queries";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";

export default async function KontaktaiPage() {
  const { data } = await sanityFetch({
    query: contactInfoQuery,
  });
  const address: string = data?.address || "";
  const contactPhone: string = data?.phone || "";
  const contactEmail: string = data?.email || "";
  const searchText: string = data?.googleAddress || address;
  const encodedAddress = encodeURIComponent(searchText || "");
  const embedUrl = searchText
    ? `https://www.google.com/maps?q=${encodedAddress}&output=embed`
    : "";
  const mapsUrl = searchText
    ? `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
    : "";

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 dotted-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-6">
              <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight uppercase">
                Kontaktai
              </h1>
              <p className="text-gray-700 max-w-prose">
                Mielai susisieksime. Jeigu turite klausimų, reikia pagalbos ar
                norite sužinoti daugiau apie mūsų veiklą, parašykite arba
                paskambinkite.
              </p>
            </div>
            <div className="lg:col-span-6 grid gap-6 sm:grid-cols-2">
              <div className="bg-white/80 backdrop-blur rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <FaMapMarkerAlt />
                  </span>
                  <div className="font-semibold text-blue-900">
                    Mūsų adresas
                  </div>
                </div>
                <p className="text-gray-700">{address || "Nenurodytas"}</p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                    <FaUser />
                  </span>
                  <div className="font-semibold text-blue-900">
                    Kontaktinė informacija
                  </div>
                </div>
                <div className="space-y-1">
                  {contactPhone && (
                    <p className="text-gray-700">
                      Mob. tel.{" "}
                      <a
                        href={`tel:${contactPhone}`}
                        className="text-amber-600 underline"
                      >
                        {contactPhone}
                      </a>
                    </p>
                  )}
                  {contactEmail && (
                    <p className="text-gray-700">
                      El. paštas:{" "}
                      <a
                        href={`mailto:${contactEmail}`}
                        className="text-amber-600 underline"
                      >
                        {contactEmail}
                      </a>
                    </p>
                  )}
                  {!contactPhone && !contactEmail && (
                    <p className="text-gray-700">
                      Kontaktinė informacija netrukus.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {searchText && (
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <iframe
                src={embedUrl}
                title="Organizacijos žemėlapis"
                className="w-full h-[420px] md:h-[560px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-6 bottom-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-5 py-3 shadow-lg hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <FaMapMarkerAlt />
                <span>Rodyti maršrutą</span>
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
