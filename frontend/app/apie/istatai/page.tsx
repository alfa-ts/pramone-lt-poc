"use client";

export default function IstataiPage() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
            Įstatai
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-6 text-gray-700">
          <p className="leading-relaxed">
            Kauno krašto pramonininkų ir darbdavių asociacija (toliau – Asociacija) yra ribotos civilinės atsakomybės viešasis juridinis
            asmuo, kurio teisinė forma – asociacija. Asociacija yra savarankiška savanoriškumo principu atsikrus Lietuvos Respublikos ūkio
            subjektus, veikiančius gamybos ir gamybos aptarnavimo bei kitose verslo, švietimo ir paslaugų teikimo srityse, jungianti
            organizacija.
          </p>

          <p className="leading-relaxed">
            Asociacijos įstatai, įregistruoti Juridinių asmenų registre 2021 m. gruodžio 7 dieną: {" "}
            <a
              href="#"
              onClick={handleClick}
              className="text-amber-500 underline underline-offset-2 hover:text-amber-600 font-semibold"
            >
              KKPDA įstatai 2021
            </a>
          </p>

          <p className="leading-relaxed">
            Asociacijos {" "}
            <a
              href="#"
              onClick={handleClick}
              className="text-amber-500 underline underline-offset-2 hover:text-amber-600 font-semibold"
            >
              Etikos kodeksas
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}


