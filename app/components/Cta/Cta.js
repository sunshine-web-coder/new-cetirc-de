import React from 'react';
import Link from 'next/link';
import CtaBackground from '@/app/assets/images/product-bg.png';

export default function Cta() {
  return (
    <>
      <section className="cta-area md:pt-[40px] pt-[60px] md:pb-[150px] bg-cover bg-bottom" style={{ backgroundImage: `url(${CtaBackground.src})` }}>
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title mb-[20px]">
              <span className="font-normal">
                Bereit, die <br />
                Zukunft der biometrischen Authentifizierung mit
              </span>{' '}
              <br /> Alice 1 und Alice 2 zu erleben?
            </h2>
            <p className="xl:text-[24px] lg:text-[18px] text-[14px] text-[#5E5E5E] lg:mb-[60px] mb-[30px]">Laden Sie noch heute die Cetirc-App herunter und registrieren Sie sich persönlich mit dem Cetirc Palm-ID-Gerät, um ein neues Maß an Sicherheit und Komfort freizuschalten!</p>
            <div className="items-center hidden md:gap-8 gap-4">
              <Link href="/getstarted" className="primary-btn">
                Loslegen
              </Link>
              <Link href="/Cetric.apk" className="bordered-btn">
                App herunterladen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
