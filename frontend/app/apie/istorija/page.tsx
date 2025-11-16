import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import {
  leadershipQuery,
  pastPresidentsQuery,
  membersCountQuery,
} from "@/sanity/lib/queries";
import { HistoryTimeline } from "@/app/components/HistoryTimeline";
import { ServiceCard } from "@/app/components/ServiceCard";
import {
  Users,
  TrendingUp,
  Calendar as CalendarIcon,
  Award,
  FileText,
  Briefcase,
  MessageSquare,
  Target,
  Building2,
  Globe,
  Handshake,
} from "lucide-react";

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
      icon: <Award className="w-8 h-8" />,
      title: "Narių interesų atstovavimas valdžios institucijose",
      description:
        "Dėka ilgametės veiklos ir sukuptos patirties KKPDA turi užmezgusi gerus ryšius su įvairiomis vietos ir valstybinės valdžios institucijomis, todėl nuolat efektyviai atstovauja savo narių interesus jose.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Konsultacijos",
      description:
        "Tikslinės konsultacijos verslininkų pageidaujamais aktualiais klausimais.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Tarptautinės verslo misijos",
      description:
        "Nariai turi galimybę dalyvauti Lietuvos pramonininkų konfederacijos organizuojamose verslo forumuose, tarptautinėse verslo kelionėse ir lydėti Vyriausybės vadovus į Europos ir kitas pasaulio šalis.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Ryšiai su žiniasklaida",
      description:
        "Ryšiai su žiniasklaida, sudarant galimybę viešai pareikšti verslininkų nuomonę bei stiprinti gerą verslo įvaizdį.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Ekonominė diplomatija",
      description:
        "Ryšiai su Lietuvos, Europos Sąjungos ir pasaulio šalių ambasadomis, jų komercijos atašė, per kuriuos teikiami komerciniai pasiūlymai verslininkams.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Projektų valdymas ir partnerių paieška",
      description:
        "Padedame nariams vykdyti partnerių paiešką ir dalyvauti nacionaliniuose bei tarptautiniuose projektuose.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="flex items-center gap-2 text-sm mb-6">
            <a href="/apie" className="text-gray-500 hover:text-gray-700">
              Apie mus
            </a>
            <svg
              className="size-3.5 text-gray-400"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                d="M5.25 10.5L8.75 7L5.25 3.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.16667"
              />
            </svg>
            <span className="text-gray-900">Istorija</span>
          </div>

          <h1 className="mb-6 text-5xl text-gray-900">Istorija</h1>
          <p className="text-gray-600 max-w-3xl text-xl">
            Kauno krašto pramonininkų ir darbdavių asociacija – viena seniausių
            ir įtakingiausių verslo organizacijų Lietuvoje
          </p>

          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#fe9a00] to-[#e17100] rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Introduction Section */}
        <div className="mb-16">
          <p className="text-lg text-[#4a5565] leading-[1.7] mb-6">
            <strong className="text-[#101828]">
              Įkurta 1989 m. gruodžio 22 d.
            </strong>{" "}
            Kauno pramonininkų asociacija yra viena seniausių ir įtakingiausių
            verslo organizacijų Lietuvoje. Per šį laikotarpį tapome patikimu
            partneriu tiek nariams, tiek valstybės institucijoms, nuolat
            prisidedant prie verslo aplinkos gerinimo ir ekonomikos plėtros.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 p-8 bg-gray-50 rounded-2xl border border-gray-100">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FE9A00] to-[#E17100] rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#101828] mb-1">
              {membersCount || 0}+
            </div>
            <div className="text-sm text-[#4a5565]">Narių</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FE9A00] to-[#E17100] rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#101828] mb-1">
              {yearsOfActivity}+
            </div>
            <div className="text-sm text-[#4a5565]">Metų patirtis</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FE9A00] to-[#E17100] rounded-xl flex items-center justify-center">
                <CalendarIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#101828] mb-1">500+</div>
            <div className="text-sm text-[#4a5565]">Renginių</div>
          </div>
        </div>

        {/* Historical Context Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#101828] mb-6">
            Istorinė raida
          </h2>

          <p className="text-lg text-[#4a5565] leading-[1.7] mb-6">
            1930 metų balandžio 12 d. buvo įsteigta pirmoji Lietuvoje
            gamybininkų ir prekybininkų organizacija, Lietuvių prekybininkų,
            pramonininkų ir amatininkų sąjunga, kuri vėliau pasivadinę
            Verslininkų sąjunga.
          </p>

          <div className="bg-amber-50 border-l-4 border-[#FE9A00] p-6 rounded-r-lg mb-6">
            <p className="text-lg text-[#4a5565] leading-[1.7]">
              Po beveik 60-ies metų, 1989 m. gruodžio 22 d. buvo įsteigta Kauno
              pramonininkų asociacija. Nuo pat įkūrimo dienos, asociacija
              aktyviai dalyvavo formuojant palankią verslo aplinką ir
              įtvirtinant socialinės rinkos ekonomikos principus.
            </p>
          </div>

          <p className="text-lg text-[#4a5565] leading-[1.7] mb-6">
            Vystantis veiklai, formuojantis naujiems veiklos prioritetams bei
            įsiįungiant naujiems nariams, 1996 m. rugpjūčio 15 d. asociacija
            buvo perregistruota ir pavadinta Kauno krašto pramonininkų ir
            darbdavių asociacija (KKPDA). Jos narių veiklos prioritetai išliko
            iki šių dienų.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#101828] mb-6">
            Mūsų organizacija
          </h2>

          <p className="text-lg text-[#4a5565] leading-[1.7] mb-6">
            Kauno krašto pramonininkų ir darbdavių asociacija – savarankiška
            pelno nesiekianti organizacija, kurios tikslas yra suvienyti Kauno
            regiono pramonės įmones, kitus juridinius ir fizinius asmenis,
            vadovaujantis geranoriškumo bei tarpusavio supratimo principais
            atstovauti ir ginti narių teisėtus interesus valstybinės ir vietos
            valdžios bei kitose institucijose.
          </p>
        </div>

        {/* Representation Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#101828] mb-6">
            Atstovavimas ir įtaka
          </h2>

          <p className="text-lg text-[#4a5565] leading-[1.7] mb-6">
            Asociacija atstovauja savo nariams nacionaliniu ir tarptautiniu
            lygiu, užtikrindama, kad jų interesai būtų išgirsti ir įgyvendinti
            sprendžiant svarbiausius verslo klausimus.
          </p>

          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FE9A00] to-[#E17100] rounded-lg flex items-center justify-center mt-1">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#101828] mb-2">
                  Lietuvos pramonininkų konfederacija
                </h3>
                <p className="text-[#4a5565] leading-[1.7]">
                  Aktyvūs nariai, prisidedantys prie nacionalinės verslo
                  politikos formavimo
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FE9A00] to-[#E17100] rounded-lg flex items-center justify-center mt-1">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#101828] mb-2">
                  Tarptautinės organizacijos
                </h3>
                <p className="text-[#4a5565] leading-[1.7]">
                  Dalyvaujame daugelyje tarptautinių verslo organizacijų
                  veikloje
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FE9A00] to-[#E17100] rounded-lg flex items-center justify-center mt-1">
                <Handshake className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#101828] mb-2">
                  Partnerystė su institucijomis
                </h3>
                <p className="text-[#4a5565] leading-[1.7]">
                  Glaudus bendradarbiavimas su valstybės institucijomis ir
                  savivalda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      {pastPresidents && pastPresidents.length > 0 && (
        <div className="bg-gray-50 py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#101828] mb-4">
                KKPDA vadovai
              </h2>
              <p className="text-lg text-[#4a5565] leading-[1.7]">
                Asociacijos prezidentai nuo pat įkūrimo 1989 metais iki šių
                dienų
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-[#FE9A00] to-[#E17100] mx-auto mt-6 rounded-full"></div>
            </div>
            <HistoryTimeline events={pastPresidents} />
          </div>
        </div>
      )}

      {/* President's Message */}
      {president && (
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#101828] mb-4">
                Asociacijos prezidento žodis
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#FE9A00] to-[#E17100] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <Image
                  src={president.photo?.asset?.url || "/placeholder.jpg"}
                  alt={president.photo?.alt || president.name}
                  width={600}
                  height={750}
                  className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
                />
              </div>

              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#101828] mb-2">
                    {president.name}
                  </h3>
                  <p className="text-lg text-[#FE9A00] font-semibold">
                    {president.position || "Asociacijos prezidentas"}
                  </p>
                </div>

                <div className="space-y-6 text-lg text-[#4a5565] leading-[1.7]">
                  <p>
                    Keičiasi verslo karta ir ateina jauni verslininkai. Norime
                    kalbėti apie Kauno krašto pramonę, darbdavius ir
                    transformaciją. Transformuojame pramonę, o mūsų, verslo
                    atstovų, niekas neklausia kaip tą daryti, kokie iššūkiai
                    laukia ir kokių sprendimų reikia.
                  </p>

                  <p>
                    Regioninė asociacija turi būti regiono visuomenės dalis.
                    Matau norą sukurti tokią aplinką, kad verslas ir toliau
                    sėkmingai dirbtų, o darbuotojai liktų patenkinti. Kartu
                    turėtų bendradarbiauti verslo, savivaldybių ir mokslo
                    atstovai.
                  </p>

                  <p className="italic">
                    Po penkerių metų norėtųsi, kad verslas matytų asociacijos
                    teikiamą naudą, vadovai tarpusavyje bendrautų ir
                    bendradarbiautų, regiono verslo aplinka įgautų didesnį
                    tvarumą. Kiekvienas iš mūsų galėtų atsakyti į klausimą kuo
                    aš galėčiau būti naudingas asociacijai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      <div className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#101828] mb-4">
              Teikiamos paslaugos
            </h2>
            <p className="text-lg text-[#4a5565] leading-[1.7] max-w-2xl mx-auto">
              Siūlome platų paslaugų spektrą, padedantį nariams augti ir
              sėkmingai plėtoti verslą
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#FE9A00] to-[#E17100] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
