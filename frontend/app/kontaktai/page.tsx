import { sanityFetch } from "@/sanity/lib/live";
import { contactInfoQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import { Mail, Phone, MapPin, Building2, Navigation, MessageSquare } from "lucide-react";

export default async function KontaktaiPage() {
  const { data } = await sanityFetch({
    query: contactInfoQuery,
  });
  const address: string | undefined = data?.address || undefined;
  const contactPhone: string | undefined = data?.phone || undefined;
  const contactEmail: string | undefined = data?.email || undefined;
  const searchText: string | undefined = data?.googleAddress || data?.address || undefined;

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
              <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </svg>
            <span className="text-sm text-gray-900">Kontaktai</span>
          </div>
          
          <h1 className="text-5xl text-gray-900 mb-6">Kontaktai</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Mielai susisieksime. Jeigu turite klausimų, reikia pagalbos ar norite sužinoti daugiau apie mūsų veiklą, parašykite arba paskambinkite
          </p>
          
          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#fe9a00] to-[#e17100] rounded-full" />
        </div>
      </div>

      {/* Contact Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Contact Information */}
          {(contactPhone || contactEmail) && (
            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                {contactPhone && contactEmail ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <a 
                      href={`tel:${contactPhone.replace(/\s/g, "")}`}
                      className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-[#fe9a00] hover:shadow-md transition-all group"
                    >
                      <div className="size-14 bg-gradient-to-br from-[#fe9a00] to-[#e17100] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="size-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Telefonas</div>
                        <div className="text-sm md:text-lg text-gray-900 group-hover:text-[#fe9a00] transition-colors">
                          {contactPhone}
                        </div>
                      </div>
                    </a>

                    {/* Email */}
                    <a 
                      href={`mailto:${contactEmail}`}
                      className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-[#fe9a00] hover:shadow-md transition-all group"
                    >
                      <div className="size-14 bg-gradient-to-br from-[#fe9a00] to-[#e17100] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="size-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">El. paštas</div>
                        <div className="text-sm md:text-lg text-gray-900 group-hover:text-[#fe9a00] transition-colors break-all">
                          {contactEmail}
                        </div>
                      </div>
                    </a>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    {contactPhone && (
                      <a 
                        href={`tel:${contactPhone.replace(/\s/g, "")}`}
                        className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-[#fe9a00] hover:shadow-md transition-all group"
                      >
                        <div className="size-14 bg-gradient-to-br from-[#fe9a00] to-[#e17100] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Phone className="size-7 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Telefonas</div>
                          <div className="text-sm md:text-lg text-gray-900 group-hover:text-[#fe9a00] transition-colors">
                            {contactPhone}
                          </div>
                        </div>
                      </a>
                    )}
                    {contactEmail && (
                      <a 
                        href={`mailto:${contactEmail}`}
                        className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-[#fe9a00] hover:shadow-md transition-all group"
                      >
                        <div className="size-14 bg-gradient-to-br from-[#fe9a00] to-[#e17100] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Mail className="size-7 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">El. paštas</div>
                          <div className="text-sm md:text-lg text-gray-900 group-hover:text-[#fe9a00] transition-colors break-all">
                            {contactEmail}
                          </div>
                        </div>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Map Section */}
          {searchText && (
            <div className="max-w-5xl mx-auto">
              <div className="mb-6">
                <h2 className="text-base text-gray-900">Adresas</h2>
              </div>
              
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden relative h-[600px]">
                {/* Map iframe */}
                <div className="absolute inset-0">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'}&q=${encodeURIComponent(searchText)}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Location info overlay */}
                {address && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-sm border-t border-gray-200">
                    <div className="flex gap-4 items-start max-w-3xl">
                      <div className="bg-orange-50 rounded-lg size-12 flex items-center justify-center shrink-0">
                        <MapPin className="size-6 text-[#fe9a00]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base text-gray-900 mb-1">
                          Kauno krašto pramonininkų ir darbdavių asociacija
                        </h3>
                        <p className="text-base text-gray-600 mb-2">
                          {address}
                        </p>
                        <div className="flex items-center gap-3 flex-wrap">
                          <a 
                            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(searchText!)}`} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#fe9a00] hover:text-[#e17100] inline-flex items-center gap-1"
                          >
                            Gauti nuorodas
                            <svg className="size-4" fill="none" viewBox="0 0 16 16">
                              <path d="M10 2H14V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              <path d="M6.66667 9.33333L14 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              <path d="M9.33333 14H2.66667C2.48986 14 2.32029 13.9298 2.19526 13.8047C2.07024 13.6797 2 13.5101 2 13.3333V6.66667C2 6.48986 2.07024 6.32029 2.19526 6.19526C2.32029 6.07024 2.48986 6 2.66667 6H6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quick Links / CTA Section */}
      <section className="bg-gradient-to-br from-[#fe9a00] to-[#e17100] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4">Norite sužinoti daugiau?</h2>
            <p className="text-lg text-amber-50 max-w-2xl mx-auto">
              Susipažinkite su mūsų veikla, nariais ir galimybėmis tapti asociacijos nariu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/apie/istorija" className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl p-6 hover:bg-white/20 transition-all group">
              <div className="size-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="size-6 text-white" />
              </div>
              <h3 className="text-lg text-white mb-2">Apie mus</h3>
              <p className="text-sm text-amber-100">
                Sužinokite daugiau apie mūsų organizaciją ir veiklą
              </p>
            </Link>

            <Link href="/nariai/kaip-tapti-nariu" className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl p-6 hover:bg-white/20 transition-all group">
              <div className="size-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Navigation className="size-6 text-white" />
              </div>
              <h3 className="text-lg text-white mb-2">Kaip tapti nariu</h3>
              <p className="text-sm text-amber-100">
                Sužinokite apie narystės privalumus ir procesą
              </p>
            </Link>

            <Link href="/naujienos-ir-renginiai" className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl p-6 hover:bg-white/20 transition-all group">
              <div className="size-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="size-6 text-white" />
              </div>
              <h3 className="text-lg text-white mb-2">Naujienos</h3>
              <p className="text-sm text-amber-100">
                Skaitykite naujausias naujienas ir renginius
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

