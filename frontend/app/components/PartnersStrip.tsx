import Image from "next/image";

type Partner = {
  _id: string;
  title: string;
  extra?: string | null;
};

type PartnersStripProps = {
  title: string;
  partners: Partner[];
};

export default function PartnersStrip({ title, partners }: PartnersStripProps) {
  if (!partners || partners.length === 0) return null;
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-gray-600 font-semibold tracking-wide mb-6">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {partners.map((p) => (
            <div key={p._id} className="h-14 flex items-center justify-center rounded bg-gray-50 border border-gray-100">
              <span className="text-sm text-gray-700 px-3 text-center leading-tight line-clamp-2">{p.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


