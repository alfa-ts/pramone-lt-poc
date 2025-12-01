'use client';

interface StrategicDirection {
  _key?: string;
  title: string;
}

interface MissionVisionProps {
  misija?: string;
  vizija?: string;
  strategicDirections?: StrategicDirection[];
}

export function MissionVision({ misija, vizija, strategicDirections }: MissionVisionProps) {
  // Default strategic directions
  const defaultStrategic = [
    {
      title: 'Pramonės transformacija ir konkurencinių pranašumų sukūrimas',
    },
    {
      title: 'Verslo ir mokslo bendradarbiavimas',
    },
    {
      title: 'Narių vienijimas',
    },
    {
      title: 'Narių interesų atstovavimas',
    },
  ];

  // Use Sanity data if available, otherwise use defaults
  const strategic = strategicDirections && strategicDirections.length > 0
    ? strategicDirections
    : defaultStrategic;

  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-amber-50 overflow-hidden min-h-screen">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            Mūsų veikla
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl text-amber-600 mb-4">Misija</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {misija || "Atstovauti nariams, vienijant verslo, mokslo ir visuomenės interesus."}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl text-amber-600 mb-4">Vizija</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {vizija || "Vedanti ir atvira verslo organizacija, kurioje narystė yra vertinga ir garbinga."}
              </p>
            </div>
          </div>
        </div>

        {/* Divider with decorative element */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-full max-w-md"></div>
          <div className="mx-6 w-3 h-3 bg-amber-400 rounded-full"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-full max-w-md"></div>
        </div>

        {/* Strategic Directions Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">
              Strateginės veiklos kryptys
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Keturios pagrindinės kryptys, kuriomis judame siekdami savo tikslų ir kuriame vertę nariams
            </p>
          </div>

          {/* Vertical Flowing Design with Alternating Layout */}
          <div className="max-w-5xl mx-auto space-y-12">
            {strategic.map((item, index) => {
              const isLeft = index % 2 === 0;
              const gradients = [
                'from-amber-500 to-orange-600',
                'from-amber-600 to-amber-700',
                'from-orange-500 to-amber-600',
                'from-amber-400 to-orange-500',
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <div key={item.title || index} className="group relative">
                  {/* Background Gradient Blob */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`}></div>
                  
                  <div className={`relative flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
                    {/* Large Decorative Number Side */}
                    <div className="flex-shrink-0 lg:w-1/3">
                      <div className={`flex ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                        <div className="relative">
                          {/* Giant Number */}
                          <div className={`text-[120px] lg:text-[160px] leading-none bg-gradient-to-br ${gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-500 select-none`}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Side */}
                    <div className="flex-1 lg:w-2/3">
                      <div className={`${isLeft ? 'lg:text-left' : 'lg:text-right'} text-center`}>
                        <h3 className="text-2xl lg:text-3xl text-gray-900 mb-4 leading-tight group-hover:text-amber-700 transition-colors duration-300">
                          {item.title}
                        </h3>
                        
                        {/* Decorative Line */}
                        <div className={`flex ${isLeft ? 'lg:justify-start' : 'lg:justify-end'} justify-center`}>
                          <div className={`h-1 w-24 bg-gradient-to-r ${gradient} rounded-full group-hover:w-40 transition-all duration-500`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connecting Line to Next Item */}
                  {index < strategic.length - 1 && (
                    <div className="hidden lg:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-6 w-px h-12 bg-gradient-to-b from-amber-300 to-transparent opacity-30"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

