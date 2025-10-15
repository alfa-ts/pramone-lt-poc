"use client";

export default function VeiklaPage() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert("link to");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 dotted-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight uppercase">
            Veikla
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-700 font-semibold mb-6">
            KKPDA atstovauja savo narių interesus įvairiose tarybose ir komisijose:
          </p>

          <div className="grid md:grid-cols-2 gap-12 text-gray-700">
            <div>
              <h3 className="font-bold text-blue-900 mb-3">Nacionaliniu mastu:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>LR Trišalėje taryboje</li>
                <li>LR Darbuotojų saugos ir sveikatos komisijoje</li>
                <li>LR darbo ginčų komisijose</li>
                <li>LPK Prezidiume</li>
                <li>LPK komitetuose</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-blue-900 mb-3">Regioniniu mastu:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Darbo ginčų komisijose prie Kauno darbo inspekcijos</li>
                <li>Kauno regiono plėtros tarybos kolegijos partnerių grupėje</li>
                <li>Kauno miesto savivaldybės Verslo taryboje</li>
                <li>Kauno miesto savivaldybės Trišalėje taryboje</li>
                <li>Kauno rajono savivaldybės Trišalėje taryboje</li>
                <li>
                  Kauno rajono savivaldybės smulkaus ir vidutinio verslo skatinimo fondo valdyboje
                </li>
                <li>Kauno technologijų mokymo centro taryboje</li>
                <li>Lietuvos sveikatos mokslų universiteto savivaldos grupėje</li>
              </ul>
            </div>
          </div>

          {/* Reports */}
          <div className="mt-10 space-y-3 text-gray-700">
            <p>
              KKPDA 2015-2016 m. veiklos ataskaita {" "}
              <a href="#" onClick={handleLinkClick} className="text-amber-500 underline underline-offset-2 hover:text-amber-600 font-semibold">
                KKPDA veiklos ataskaita 2015-2016 m
              </a>
            </p>
            <p>
              KKPDA 2017-2018 m. veiklos ataskaita {" "}
              <a href="#" onClick={handleLinkClick} className="text-amber-500 underline underline-offset-2 hover:text-amber-600 font-semibold">
                KKPDA veiklos ataskaita 2017-2018 m
              </a>
            </p>
            <p>
              KKPDA 2019-2020 m. veiklos ataskaita {" "}
              <a href="#" onClick={handleLinkClick} className="text-amber-500 underline underline-offset-2 hover:text-amber-600 font-semibold">
                KKPDA veiklos ataskaita 2019-2020 m
              </a>
            </p>
            <p>
              KKPDA 2021 m. veiklos ataskaita {" "}
              <a href="#" onClick={handleLinkClick} className="text-amber-500 underline underline-offset-2 hover:text-amber-600 font-semibold">
                KKPDA veiklos ataskaita 2021 m
              </a>
            </p>
            <p>
              KKPDA 2022 m. veiklos ataskaita {" "}
              <a href="#" onClick={handleLinkClick} className="text-amber-500 underline underline-offset-2 hover:text-amber-600 font-semibold">
                KKPDA veiklos ataskaita 2022 m
              </a>
            </p>
            <p>
              KKPDA 2023 m. veiklos ataskaita {" "}
              <a href="#" onClick={handleLinkClick} className="text-amber-500 underline underline-offset-2 hover:text-amber-600 font-semibold">
                KKPDA veiklos ataskaita 2023 m
              </a>
            </p>
            <p>
              KKPDA 2024 m. veiklos ataskaita {" "}
              <a href="#" onClick={handleLinkClick} className="text-amber-500 underline underline-offset-2 hover:text-amber-600 font-semibold">
                KKPDA veiklos ataskaita 2024 m
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


