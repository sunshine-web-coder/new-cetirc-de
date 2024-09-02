import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhyUsIcon1 from '@/app/assets/images/why-us-icon1.svg';
import WhyUsIcon2 from '@/app/assets/images/why-us-icon2.svg';
import WhyUsIcon3 from '@/app/assets/images/why-us-icon3.svg';

export default function WhyUs() {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="flex flex-col items-center text-center lg:mb-[50px] mb-[30px]">
            <h2 className="section-title md:mb-[20px] mb-[10px]">
              <span className="font-normal">Warum Cetircs</span> <br /> Palmvenenlösungen?
            </h2>
            <p className="max-w-[830px]">Unsere Palmvenenlösungen übertreffen herkömmliche Authentifizierungs- und Verifikationsmethoden wie Passwörter, PINs oder Fingerabdrücke.</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-[30px] gap-[20px]">
            {/* Einzelne Box */}
            <div className="bg-white py-[30px] px-[20px] rounded-[23px] text-center shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
              <Image className="mb-[10px] mx-auto md:max-w-[90px] max-w-[60px]" src={WhyUsIcon1} alt="Warum Wir Icon 1" />
              <h3 className="xl:text-[30px] md:text-[24px] text-[20px] font-medium xl:mb-[30px] mb-[10px] leading-[1.3]">Sehr Sicher</h3>
              <p className="">Handvenenmuster sind bei jedem Individuum einzigartig und praktisch unmöglich zu replizieren. Diese Einzigartigkeit bietet ein hohes Maß an Sicherheit gegen Identitätsdiebstahl und Betrug.</p>
            </div>
            {/* Einzelne Box */}
            <div className="bg-white py-[30px] px-[20px] rounded-[23px] text-center shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
              <Image className="mb-[10px] mx-auto md:max-w-[90px] max-w-[60px]" src={WhyUsIcon2} alt="Warum Wir Icon 2" />
              <h3 className="xl:text-[30px] md:text-[24px] text-[20px] font-medium xl:mb-[30px] mb-[10px] leading-[1.3]">Kontaktlos</h3>
              <p className="">Im Gegensatz zu Fingerabdruck- oder Iris-Scans ist unser Handvenen-Biometriesystem nicht invasiv und erfordert keinen physischen Kontakt, was hygienischer und bequemer ist.</p>
            </div>
            {/* Einzelne Box */}
            <div className="bg-white py-[30px] px-[20px] rounded-[23px] text-center shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
              <Image className="mb-[10px] mx-auto md:max-w-[90px] max-w-[60px]" src={WhyUsIcon3} alt="Warum Wir Icon 3" />
              <h3 className="xl:text-[30px] md:text-[24px] text-[20px] font-medium xl:mb-[30px] mb-[10px] leading-[1.3]">Genau und Zuverlässig</h3>
              <p className="">Die Handvenen-Identifikationstechnologie ist gegen kompromittierende Umweltfaktoren wie Schmutz, Feuchtigkeit, Temperaturänderungen usw. unempfindlich und bietet hohe Genauigkeits- und Zuverlässigkeitsraten.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
