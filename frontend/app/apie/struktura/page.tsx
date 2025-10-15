export default function StrukturaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 dotted-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight uppercase">
            Struktūra
          </h1>
        </div>
      </section>

      {/* Top description */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 text-center">
            Visuotinė narių konferencija – aukščiausias valdymo organas
          </h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Ji šaukiama ne rečiau kaip kartą per dvejus metus. Konferencija nustato pagrindinius asociacijos tikslus ir uždavinius,
            renka ir atšaukia asociacijos Prezidiumą, vertina Prezidiumo veiklos rezultatus.
          </p>
        </div>
      </section>

      {/* Two-column content */}
      <section className="bg-white pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="space-y-6 text-gray-700">
            <h3 className="font-bold text-blue-900 text-lg">Prezidiumas – kolegialus valdymo organas.</h3>
            <p className="leading-relaxed">
              Prezidiumas renkamas visuotinėje narių konferencijoje 4 metams. Jis priima strateginius veiklos sprendimus, susijusius su
              asociacijos nuostatomis ir tikslais, tarp asociacijos narių konferencijų svarsto ir tvirtina asociacijos metinę finansinę
              atskaitomybę, priima bei šalina asociacijos narius, skiria ir atleidžia asociacijos administracijos vadovą ir vyriausiąjį
              finansininką, tvirtina administracijos etatus, vadovo darbo reglamentą, priima sprendimus dėl nario mokesčio.
            </p>

            <h3 className="font-bold text-blue-900 text-lg">Prezidentas</h3>
            <p className="leading-relaxed">
              Atstovauja asociaciją valstybinėse valdžios institucijose, savarankiškai vykdo Prezidiumo pavestas funkcijas, sprendžia
              organizacinius asociacijos klausimus.
            </p>

            <h3 className="font-bold text-blue-900 text-lg">Viceprezidentai</h3>
            <p className="leading-relaxed">
              Vykdo Prezidiumo ir Prezidento apibrėžtas veiklos funkcijas.
            </p>
          </div>

          <div className="space-y-6 text-gray-700">
            <h3 className="font-bold text-blue-900 text-lg">Asociacijos administracija</h3>
            <p className="leading-relaxed">
              Vykdantysis organas, kuris organizuoja Asociacijos darbą, vykdo Prezidiumo sprendimus, teikia įmonėms įvairias paslaugas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


