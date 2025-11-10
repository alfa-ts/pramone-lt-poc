'use client';

import { Target, Eye, TrendingUp, Users, Lightbulb, Shield } from 'lucide-react';

interface StrategicDirection {
  _id?: string;
  title: string;
  icon?: string;
}

interface MissionVisionProps {
  strategicDirections?: StrategicDirection[];
}

export function MissionVision({ strategicDirections }: MissionVisionProps) {
  // Default strategic directions with icons
  const defaultStrategic = [
    {
      icon: TrendingUp,
      title: 'Pramonės transformacija ir konkurencinių pranašumų sukūrimas',
    },
    {
      icon: Lightbulb,
      title: 'Verslo ir mokslo bendradarbiavimas',
    },
    {
      icon: Users,
      title: 'Narių vienijimas',
    },
    {
      icon: Shield,
      title: 'Narių interesų atstovavimas',
    },
  ];

  // Use Sanity data if available, otherwise use defaults
  const strategic = strategicDirections && strategicDirections.length > 0
    ? strategicDirections.map((item, index) => ({
        icon: defaultStrategic[index % defaultStrategic.length]?.icon || TrendingUp,
        title: item.title,
      }))
    : defaultStrategic;

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission & Vision - Hero Style */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 text-white">
          {/* Mission */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Misija</h3>
            </div>
            <p className="text-xl text-amber-50 leading-relaxed">
              Atstovauti nariams, vienijant verslo, mokslo ir visuomenės interesus.
            </p>
          </div>

          {/* Vision */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Vizija</h3>
            </div>
            <p className="text-xl text-amber-50 leading-relaxed">
              Vedanti ir atvira verslo organizacija, kurioje narystė yra vertinga ir garbinga.
            </p>
          </div>
        </div>

        {/* Strategic Directions - List Format */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-3 font-bold">
              Strateginės veiklos kryptys
            </h2>
            <div className="w-24 h-1 bg-white/30 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {strategic.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:translate-x-2 transition-all duration-300"
                >
                  {/* Number */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl font-bold text-white group-hover:text-amber-600 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-amber-200 group-hover:text-white transition-colors" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-white text-lg font-medium">
                      {item.title}
                    </h3>
                  </div>

                  {/* Connector line for visual flow */}
                  <div className="hidden lg:block w-8 h-px bg-white/20 group-hover:bg-white/40 transition-colors"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

