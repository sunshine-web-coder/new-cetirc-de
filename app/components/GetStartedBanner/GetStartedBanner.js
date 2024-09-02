import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BannerLinesBg from '@/app/assets/images/banner-lines-bg.png';
import ProductBannerThumb from '@/app/assets/images/product-banner-thumb.png';
import ProductBannerThumbMobile from '@/app/assets/images/product-banner-thumb-mobile-new.png';

export default function GetStartedBanner() {
  return (
    <>
      <section className="banner-area relative z-10 overflow-hidden md:pt-[160px] pt-[120px] md:pb-[40px] pb-0">
        <div className="container">
          <div className="md:grid grid-cols-2 items-center md:text-left text-center">
            <div className="z-30">
              <h1 className="main-title !leading-[1.4] mb-[15px]">
                <span className="xl:text-[48px] lg:text-[36px] text-[26px] font-normal">Erste Schritte mit </span> <br /> Alice 1 und Alice 2
              </h1>
              <p className="text-[#070707] max-w-[600px] mb-[10px]">
                Cetirc etabliert die Handvenen-Biometrie mit den Flaggschiff-Produkten Alice 1 und Alice 2. Egal, ob Sie eine sichere Zahlung oder fortschrittliche Zugangskontrolle und Identifizierung suchen, unsere Lösungen decken all das und mehr ab.
              </p>
              <p className="text-[#070707] max-w-[600px] mb-[30px]">Dieser Leitfaden untersucht Alice 1 und Alice 2 und zeigt Ihnen deren Einzigartigkeit, Sicherheits- und Datenschutzgarantien sowie alles, was Sie für den Einstieg benötigen.</p>
            </div>
            <div className="relative z-50 xl:-ml-[140px] lg:-ml-[100px] md:-ml-[50px] ml-0">
              <Image className="md:block hidden" src={ProductBannerThumb} alt="Banner Thumb" />
              <Image className="md:hidden block w-full" src={ProductBannerThumbMobile} alt="Banner Thumb Mobile" />
            </div>
          </div>
        </div>
        <Image className="absolute top-0 right-0 z-20 h-full md:block hidden" src={BannerLinesBg} alt="Banner Lines Bg" />
      </section>
    </>
  );
}
