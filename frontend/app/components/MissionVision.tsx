'use client';

interface StrategicDirection {
  _id?: string;
  title: string;
}

interface MissionVisionProps {
  strategicDirections?: StrategicDirection[];
}

export function MissionVision({ strategicDirections }: MissionVisionProps) {
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
                Atstovauti nariams, vienijant verslo, mokslo ir visuomenės interesus.
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
                Vedanti ir atvira verslo organizacija, kurioje narystė yra vertinga ir garbinga.
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
          </div>

          {/* Bubbles in single line */}
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 max-w-6xl mx-auto">
            {strategic.map((item, index) => (
              <div
                key={item.title || index}
                className="group relative flex-shrink-0"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity scale-110"></div>
                
                {/* Bubble */}
                <div className="relative w-52 h-52 lg:w-60 lg:h-60 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-2xl hover:shadow-amber-300/50 transition-all duration-300 hover:scale-105 p-6 border-4 border-white">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center shadow-xl border-4 border-amber-100 group-hover:border-amber-200 transition-colors">
                    <span className="text-2xl font-bold bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <p className="text-center text-white leading-relaxed text-sm lg:text-base font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

