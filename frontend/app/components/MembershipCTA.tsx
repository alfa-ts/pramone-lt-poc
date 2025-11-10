'use client';

import { Button } from './ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import Link from 'next/link';

interface MembershipCTAProps {
  membersCount: number;
  yearsOfActivity: number;
}

export function MembershipCTA({ membersCount, yearsOfActivity }: MembershipCTAProps) {
  const benefits = [
    `Prisijunkite prie ${membersCount}+ verslo lyderių bendruomenės`,
    'Gaukite ekspertų konsultacijas ir palaikymą',
    'Dalyvaukite eksklityviuose renginiuose ir mokymuose',
    'Plėskite savo verslo tinklą ir galimybes',
  ];

  return (
    <section className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-white">
            <h2 className="text-5xl mb-6 font-bold">
              Tapkite mūsų nariais šiandien
            </h2>
            <p className="text-xl text-amber-50 mb-8 leading-relaxed">
              Prisijunkite prie Kauno krašto pramonininkų ir darbdavių asociacijos 
              ir atidarykite naujas verslo galimybes.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-200 flex-shrink-0 mt-0.5" />
                  <span className="text-amber-50">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/nariai/kaip-tapti-nariu">
                <Button 
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-amber-50 text-lg px-8"
                >
                  Užpildyti prašymą
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/apie/valdymas">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
                >
                  Sužinoti daugiau
                </Button>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-amber-400/30">
              <p className="text-amber-100 text-sm">
                Turite klausimų? Susisiekite su mumis: <a href="mailto:info@kkpda.lt" className="underline hover:text-white">info@kkpda.lt</a> arba tel. +370 37 409 578
              </p>
            </div>
          </div>

          {/* Right: Image/Visual */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzYxNzQ2NzQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business team"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl text-amber-600 font-bold">{membersCount}+</div>
                  <div className="text-sm text-gray-600">Narių</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl text-amber-600 font-bold">{yearsOfActivity}</div>
                  <div className="text-sm text-gray-600">Metų</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl text-amber-600 font-bold">500+</div>
                  <div className="text-sm text-gray-600">Renginių</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

