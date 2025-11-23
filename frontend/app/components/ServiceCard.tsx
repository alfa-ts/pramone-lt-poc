interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
}

export function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all group">
      <div className="bg-gradient-to-br from-[#FE9A00] to-[#E17100] rounded-2xl p-4 inline-flex mb-4 shadow-md w-16 h-16 items-center justify-center">
        <div className="text-white text-2xl font-bold">{number}</div>
      </div>
      
      <h3 className="text-[#101828] font-bold text-lg mb-3">{title}</h3>
      <p className="text-[#4a5565] leading-relaxed">{description}</p>
    </div>
  );
}

