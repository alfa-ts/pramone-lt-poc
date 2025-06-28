// components/MemberItem.tsx
import Image from "next/image";

export interface Member {
  _id: string;
  person: string;
  title: string;
  company: string;
  address: string;
  activity: string;
  logo?: string;
}

export default function MemberItem({ member }: { member: Member }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-200 hover:border-primary/20 p-8 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
      {/* Subtle accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      
      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
        {/* Logo Section */}
        <div className="flex-shrink-0 lg:w-48">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500 border border-gray-100 group-hover:border-primary/20">
            <Image
              src={member.logo || "/images/default-logo.png"}
              alt={member.company}
              width={160}
              height={80}
              className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
              {member.company}
            </h3>
            <div className="w-12 h-1 bg-accent rounded-full group-hover:w-20 transition-all duration-300"></div>
          </div>
          
          <div className="grid gap-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Adresas</p>
                <p className="text-gray-800 font-medium">{member.address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Vadovas</p>
                <p className="text-gray-800 font-medium">{member.person}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Veikla</p>
                <p className="text-gray-800 font-medium">{member.activity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
