import Image from "next/image";
import { Mail, Phone } from "lucide-react";

interface LeadershipMemberCardProps {
  name: string;
  position: string;
  image: string;
  alt?: string;
  phone?: string;
  email?: string;
}

export function LeadershipMemberCard({
  name,
  position,
  image,
  alt,
  phone,
  email,
}: LeadershipMemberCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <div className="aspect-[3/4] bg-gray-100 overflow-hidden p-4">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={alt || name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-lg font-medium text-gray-900 mb-1">{name}</h4>
        <p className="text-gray-600 mb-4 text-sm">{position}</p>
        {(phone || email) && (
          <div className="space-y-2 text-sm">
            {phone && (
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-gray-600 hover:text-[#fe9a00] transition-colors"
              >
                <Phone className="size-4 text-[#fe9a00] flex-shrink-0" />
                <span>{phone}</span>
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-gray-600 hover:text-[#fe9a00] transition-colors break-all"
              >
                <Mail className="size-4 text-[#fe9a00] flex-shrink-0" />
                <span>{email}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

