'use client';

import { 
  Briefcase, 
  Users, 
  BookOpen, 
  Globe, 
  Shield, 
  TrendingUp,
  FileText,
  Award
} from 'lucide-react';

interface Benefit {
  _key: string;
  title: string;
  description1?: string | null;
}

interface MemberBenefitsProps {
  benefits?: Benefit[];
}

export function MemberBenefits({ benefits: sanityBenefits }: MemberBenefitsProps) {
  const defaultBenefits = [
    {
      icon: Briefcase,
      title: 'Verslo konsultacijos',
      description: 'Gaukite profesionalias konsultacijas verslo, teisės ir ekonomikos klausimais.',
    },
    {
      icon: Users,
      title: 'Tinklaveika',
      description: 'Prisijunkite prie didžiausio verslininkų tinklo Kauno regione.',
    },
    {
      icon: BookOpen,
      title: 'Mokymai ir seminarai',
      description: 'Dalyvaukite nemokamose mokymo programose ir konferencijose.',
    },
    {
      icon: Globe,
      title: 'Tarptautiniai ryšiai',
      description: 'Galimybė bendradarbiauti su užsienio verslo asociacijomis.',
    },
    {
      icon: Shield,
      title: 'Teisių apsauga',
      description: 'Atstovaujame narių interesus valstybinėse institucijose.',
    },
    {
      icon: TrendingUp,
      title: 'Verslo plėtra',
      description: 'Pagalba ieškant naujų verslo galimybių ir partnerių.',
    },
    {
      icon: FileText,
      title: 'Informacija',
      description: 'Reguliariai teikiame aktualią verslo ir teisės informaciją.',
    },
    {
      icon: Award,
      title: 'Pripažinimas',
      description: 'Dalyvavimas konkursuose ir nominacijose verslo bendruomenėje.',
    },
  ];

  const icons = [Briefcase, Users, BookOpen, Globe, Shield, TrendingUp, FileText, Award];

  // Use Sanity benefits if available, otherwise use defaults
  const benefits = sanityBenefits && sanityBenefits.length > 0
    ? sanityBenefits.map((b, idx) => ({
        icon: icons[idx % icons.length],
        title: b.title,
        description: b.description1 || '',
      }))
    : defaultBenefits;

  return (
    <section className="bg-white py-20 relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Narystės naudos</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Tapę mūsų asociacijos nariais, gausite prieigą prie išskirtinių galimybių 
            ir paslaugų, skirtų jūsų verslo augimui ir plėtrai
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-amber-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center group-hover:from-amber-500 group-hover:to-amber-600 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-gray-900 mb-2 font-semibold">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

