import { sanityFetch } from "@/sanity/lib/live";
import { contactsQuery } from "@/sanity/lib/queries";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";

export default async function KontaktaiPage() {
  const { data } = await sanityFetch({
    query: contactsQuery,
  });
  const contacts = data?.ordered?.length ? data.ordered : data.fallback || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 dotted-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight uppercase">
            Kontaktai
          </h1>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contacts list */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">
              Kontaktinė informacija
            </h2>

            <div className="space-y-6">
              {contacts.map((c) => {
                const isAddress =
                  c.kind === "address" || (!!c.address && !c.name);
                return (
                  <div
                    key={c._id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-yellow-500 hover:scale-105 transform"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {isAddress ? (
                        <span className="text-amber-500">
                          <FaMapMarkerAlt />
                        </span>
                      ) : (
                        <span className="text-amber-500">
                          <FaUser />
                        </span>
                      )}
                      <div className="font-semibold text-blue-900">
                        {isAddress ? "Adresas" : c.position}
                      </div>
                    </div>
                    {isAddress ? (
                      <p className="text-gray-700">{c.address || ""}</p>
                    ) : (
                      <>
                        <p className="text-gray-800 font-medium">{c.name}</p>
                      </>
                    )}
                    {c.phone && (
                      <p className="text-gray-700 mt-1">
                        Mob. tel.{" "}
                        <a
                          href={`tel:${c.phone}`}
                          className="text-amber-600 underline"
                        >
                          {c.phone}
                        </a>
                      </p>
                    )}
                    <p className="text-gray-700">
                      {c.email && (
                        <>
                          El. paštas:{" "}
                          <a
                            href={`mailto:${c.email}`}
                            className="text-amber-600 underline"
                          >
                            {c.email}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
