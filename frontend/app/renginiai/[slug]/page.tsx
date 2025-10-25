import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { singleEventQuery } from "@/sanity/lib/queries";
import PortableText from "@/app/components/PortableText";

const formatRange = (event: any): string | null => {
  if (!event?.startAt) return null;
  const dateFmt: Intl.DateTimeFormatOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
  const timeFmt: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };
  const start = new Date(event.startAt);
  const startStr = `${start.toLocaleDateString("lt-LT", dateFmt)} @ ${start.toLocaleTimeString("lt-LT", timeFmt)}`;
  if (event.endAt) {
    const end = new Date(event.endAt);
    const endStr = `${end.toLocaleDateString("lt-LT", dateFmt)} @ ${end.toLocaleTimeString("lt-LT", timeFmt)}`;
    return `${startStr} - ${endStr}`;
  }
  return startStr;
};

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data } = await sanityFetch({ query: singleEventQuery, params: { slug } });
  const event: any = data as any;

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">Renginys nerastas.</div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 dotted-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-2 tracking-tight uppercase">{event.title}</h1>
          <p className="text-gray-600">
            {event.startAt
              ? `${new Date(event.startAt).toLocaleDateString('lt-LT', {year: 'numeric', month: '2-digit', day: '2-digit'})} @ ${new Date(event.startAt).toLocaleTimeString('lt-LT', {hour: '2-digit', minute: '2-digit'})}${event.endAt ? ` - ${new Date(event.endAt).toLocaleDateString('lt-LT', {year: 'numeric', month: '2-digit', day: '2-digit'})} @ ${new Date(event.endAt).toLocaleTimeString('lt-LT', {hour: '2-digit', minute: '2-digit'})}` : ''}`
              : `${event.date || ''}${event.time ? ` • ${event.time}` : ''}`}
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-gray-700">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left: Large poster/image */}
            <div className="md:col-span-1">
              {Array.isArray(event.images) && event.images.length > 0 && (
                <div className="relative w-full h-96 md:h-[720px] bg-white rounded-lg overflow-hidden">
                  <Image
                    src={event.images[0].asset.url}
                    alt={event.title}
                    fill
                    className="object-contain object-top"
                  />
                </div>
              )}
            </div>

            {/* Right: Info + content */}
            <div className="md:col-span-2 space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-lg border border-gray-200 p-5 bg-gray-50 md:col-span-1">
                  <div className="font-semibold text-blue-900 mb-1">Informacija</div>
                  {formatRange(event) ? (
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold text-blue-900">Data:</span>{" "}
                      {formatRange(event)}
                    </div>
                  ) : (
                    <>
                      {event.date && (
                        <div className="text-sm text-gray-600">
                          <span className="font-semibold text-blue-900">Data:</span>{" "}
                          {event.date}
                        </div>
                      )}
                      {event.time && (
                        <div className="text-sm text-gray-600 mt-1">
                          <span className="font-semibold text-blue-900">Laikas:</span>{" "}
                          {event.time}
                        </div>
                      )}
                    </>
                  )}
                  {event.location && (
                    <div className="text-sm text-gray-600 mt-2">
                      <span className="font-semibold text-blue-900">Vieta:</span>{" "}
                      {event.location}
                    </div>
                  )}
                </div>
                <div className="rounded-lg border border-gray-200 p-5 bg-gray-50 md:col-span-2">
                  <div className="font-semibold text-blue-900 mb-1">Organizatoriai</div>
                  <div className="text-sm text-gray-600">{event.organizers || "—"}</div>
                </div>
              </div>

              {event.content && (
                <div className="prose max-w-none">
                  <PortableText value={event.content} />
                </div>
              )}

              {(event.location || (event.locationLat && event.locationLng)) && (
                <div className="rounded-lg border border-gray-200 p-5 bg-gray-50">
                  <div className="font-semibold text-blue-900 mb-3">Vieta žemėlapyje</div>
                  {/* Simple Google Maps embed using lat/lng */}
                  <iframe
                    title="Google Map"
                    width="100%"
                    height="360"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      event.locationLat && event.locationLng
                        ? `${event.locationLat},${event.locationLng}`
                        : event.location
                    )}&z=15&output=embed`}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


