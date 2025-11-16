import { FaMapMarkerAlt } from "react-icons/fa";

interface GoogleMapProps {
  address: string;
}

export function GoogleMap({ address }: GoogleMapProps) {
  const encodedQuery = encodeURIComponent(address);
  
  const embedUrl = `https://www.google.com/maps?q=${encodedQuery}&output=embed`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;

  if (!address) {
    return null;
  }

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
      <iframe
        src={embedUrl}
        title="Vietos žemėlapis"
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
  );
}

