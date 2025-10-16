import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import {
  leadershipQuery,
  pastPresidentsQuery,
  membersCountQuery,
} from "@/sanity/lib/queries";
import { FaUsers, FaClock, FaTrophy } from "react-icons/fa";

export default async function IstorijaPage() {
  const [
    { data: leadershipData },
    { data: pastPresidents },
    { data: membersCount },
  ] = await Promise.all([
    sanityFetch({ query: leadershipQuery }),
    sanityFetch({ query: pastPresidentsQuery }),
    sanityFetch({ query: membersCountQuery }),
  ]);

  // Find the current president
  const president = leadershipData?.find(
    (member: any) =>
      member.role?.trim().replace(/[\u200B-\u200D\uFEFF]/g, "") ===
      "prezidentas"
  );

  // Calculate years of activity (from 1989 to current year)
  const foundingYear = 1989;
  const currentYear = new Date().getFullYear();
  const yearsOfActivity = currentYear - foundingYear;

  // Services data
  const services = [
    {
      icon: "📋",
      title: "Narių interesų atstovavimas valdžios institucijose",
      description:
        "Dėka ilgametės veiklos ir sukuptos patirties KKPDA turi užmezgusi gerus ryšius su įvairiomis vietos ir valstybinės valdžios institucijomis, todėl nuolat efektyviai atstovauja savo narių interesus jose. KKPDA nariai gali deleguoti savo atstovus į valstybinės ir vietos valdžios sudaromus komitetus, komisijas ir darbo grupes, kuriuose dalyvauti teisę turi KKPDA atstovai.",
    },
    {
      icon: "🤝",
      title: "Konsultacijos",
      description:
        "Tikslinės konsultacijos verslininkų pageidaujamais aktualiais klausimais.",
    },
    {
      icon: "✈️",
      title: "Tarptautinės verslo misijos",
      description:
        "Tarptautinės verslo misijos. Nariai turi galimybę dalyvauti Lietuvos pramonininkų konfederacijos organizuojamose verslo forumuose, tarptautinėse verslo kelionėse, vykdyti partnerių paiešką ar lydėti Vyriausybės vadovą ir kitus aukščiausius pareigūnus į Europos ir kitas pasaulio šalis.",
    },
    {
      icon: "📰",
      title: "Ryšiai su žiniasklaida",
      description:
        "Ryšiai su žiniasklaida, sudarant galimybę viešai pareikšti verslininkų nuomonę bei stiprinti gerą verslo įvaizdį.",
    },
    {
      icon: "💼",
      title: "Ekonominė diplomatija",
      description:
        "Ryšiai su Lietuvos, Europos Sąjungos ir pasaulio šalių ambasadomis, jų komercijos atašė, per kuriuos teikiami komerciniai pasiūlymai verslininkams, vykdoma partnerių paieška, verslo įstatymų ir norminių aktų išsiaiškini­mas.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 dotted-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight uppercase">
            Istorija
          </h1>
        </div>
      </section>

      {/* History Text Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                1930 metų balandžio 12 d. buvo įsteigta pirmoji Lietuvoje
                gamybininkų ir prekybininkų organizacija, Lietuvių prekybininkų,
                pramonininkų ir amatininkų sąjunga, kuri vėliau pasivadinę
                Verslininkų sąjunga.
              </p>
              <p className="leading-relaxed">
                Pagrindiniai šios sąjungos tikslai, kaip skelbė jos įstatai,
                buvo &quot;kelti ekonominę lietuvių tautos gerovę, jungiant
                visus lietuvių prekybininkus, pramoninkus ir amatininkus,
                rūpinantis jų teisiniais, ekonominiais ir kultūriniais
                reikalais, keliant jų specialybės kvalifikaciją, remiant
                Lietuvos prekybą, pramonę ir amatus&quot;. Sąjunga gynė savo
                narių interesus valstybinėse įstaigose, visuomeninėse
                organizacijose, organizavo juridinę pagalbą.
              </p>
              <p className="leading-relaxed">
                Po beveik 60-ies metų, 1989 m. gruodžio 22 d. buvo įsteigta
                Kauno pramonininkų asociacija.
              </p>
              <p className="leading-relaxed">
                Vystantis veiklai, formuojantis naujiems veiklos prioritetams
                bei įsiįungiant naujiems nariams, 1996 m. rugpjūčio 15 d.
                asociacija buvo perregistruota ir pavadinta Kauno krašto
                pramonininkų ir darbdavių asociacija (KKPDA). Jos narių veiklos
                prioritetai išliko iki šių dienų.
              </p>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Kauno krašto pramonininkų ir darbdavių asociacija – savarankiška
                pelno nesiekianti organizacija, kurios tikslas yra suvienyti
                Kauno regiono pramonės įmones, kitus juridinius ir fizinius
                asmenis, vadovaujantis geranoriškumo bei tarpusavio supratimo
                principais atstovauti ir ginti narių teisėtus interesus
                valstybinės ir vietos valdžios bei kitose institucijose,
                siekiant valstybės ir verslo bendruomenės socialinės, ekonominės
                ir finansinės politikos suderinamumo. Asociacijai priklauso
                įvairių pramonės šakų ir teikiamų paslaugų įmonės, mokymo
                įstaigos bei advokatų kontora.
              </p>
              <p className="leading-relaxed">
                Kauno krašto pramonininkų ir darbdavių asociacija yra{" "}
                <strong className="text-blue-900">
                  Lietuvos pramonininkų konfederacijos narė
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {pastPresidents && pastPresidents.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase text-center">
              KKPDA vadovai
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Asociacijos prezidentai nuo pat įkūrimo 1989 metais iki šių dienų
            </p>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-stone-300 via-amber-200 to-stone-300"></div>

              {/* Timeline items */}
              <div className="space-y-8">
                {pastPresidents.map((president: any, index: number) => (
                  <div
                    key={president._id}
                    className="relative flex items-center"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 w-0.5 h-full bg-transparent">
                      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-yellow-500 border-4 border-white shadow-md"></div>
                    </div>

                    {/* Content */}
                    <div className="ml-20 flex-1">
                      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-l-4 border-amber-300">
                        <div className="flex items-baseline gap-3 mb-2">
                          <span className="text-xl font-semibold text-stone-700">
                            {president.startYear}
                          </span>
                          <span className="text-stone-400">—</span>
                          <span className="text-xl font-semibold text-stone-700">
                            {president.endYear || "dabartis"}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-blue-900">
                          {president.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* President's Message Section */}
      {president && (
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 uppercase text-center">
              Asociacijos prezidento žodis
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
              {/* President's message text */}
              <div className="space-y-4 text-gray-700 italic leading-relaxed">
                <p>
                  Keičiasi verslo karta ir ateina jauni verslininkai. Norime
                  kalbėti apie Kauno krašto pramonę, darbdavius ir
                  transformaciją. Transformuojame pramonę, o mūsų, verslo
                  atstovų, niekas neklausia kaip tą daryti, kokie iššūkiai
                  laukia ir kokių sprendimų reikia. Regioninė asociacija turi
                  būti regiono visuomenės dalis. Matau norą sukurti tokią
                  aplinką, kad verslas ir toliau sėkmingai dirbtų, o darbuotojai
                  liktų patenkinti. Kartu turėtų bendradarbiauti verslo,
                  savivaldybių ir mokslo atstovai. Po penkerių metų norėtųsi,
                  kad verslas matytų asociacijos teikiamą naudą, vadovai
                  tarpusavyje bendrautų ir bendradarbiautų, regiono verslo
                  aplinka įgautų didesnį tvarumą. Kiekvienas iš mūsų galėtų
                  atsakyti į klausimą kuo aš galėčiau būti naudingas
                  asociacijai.
                </p>
              </div>

              {/* President's photo */}
              <div className="flex justify-center">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src={president.photo?.asset?.url || "/placeholder.jpg"}
                    alt={president.photo?.alt || president.name}
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* President's info */}
            <div className="text-left mb-12">
              <h3 className="text-2xl font-bold text-blue-900 uppercase mb-2">
                {president.name}
              </h3>
              <p className="text-yellow-500 font-semibold text-lg">
                {president.position}
              </p>
            </div>

            {/* Stats Section */}
            <div className="bg-white rounded-xl shadow-md py-8 px-6 border-t-4 border-yellow-500">
              <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {/* Members count */}
                <div className="flex-1 flex items-center gap-3 py-6 md:py-0 px-8 justify-center">
                  <div className="text-4xl font-bold text-blue-900">
                    {membersCount || 0}
                  </div>
                  <div className="text-gray-600 font-medium">Nariai</div>
                </div>

                {/* Years of activity */}
                <div className="flex-1 flex items-center gap-3 py-6 md:py-0 px-8 justify-center">
                  <div className="text-4xl font-bold text-blue-900">
                    {yearsOfActivity}
                  </div>
                  <div className="text-gray-600 font-medium">Metų veiklos</div>
                </div>

                {/* Successful events */}
                <div className="flex-1 flex items-center gap-3 py-6 md:py-0 px-8 justify-center">
                  <div className="text-4xl font-bold text-blue-900">500</div>
                  <div className="text-gray-600 font-medium">
                    Sėkmingų renginių
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase text-center">
            Teikiamos paslaugos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-yellow-500 hover:scale-105 transform"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className="text-6xl">{service.icon}</div>

                  {/* Title */}
                  <h3 className="font-bold text-blue-900 text-lg leading-tight min-h-[3.5rem]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
