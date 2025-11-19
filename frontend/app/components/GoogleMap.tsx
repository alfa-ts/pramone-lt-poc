import { FaMapMarkerAlt } from "react-icons/fa";

interface GoogleMapProps {
  address: string;
}

export function GoogleMap({ address }: GoogleMapProps) {
  const encodedQuery = encodeURIComponent(address);

  const embedUrl = `https://www.google.com/maps?q=${encodedQuery}&output=embed`;

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
    </div>
  );
}
