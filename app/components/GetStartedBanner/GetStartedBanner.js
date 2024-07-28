import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BannerLinesBg from '@/app/assets/images/banner-lines-bg.png';
import ProductBannerThumb from '@/app/assets/images/product-banner-thumb.png';
import ProductBannerThumbMobile from '@/app/assets/images/product-banner-thumb-mobile.png';

export default function GetStartedBanner() {
  return (
    <>
      <section className="banner-area relative z-10 overflow-hidden md:pt-[160px] pt-[120px] md:pb-[40px] pb-0">
        <div className="container">
          <div className="md:grid grid-cols-2 items-center md:text-left text-center">
            <div className="z-30">
              <div className="subtitle">
                <span></span>
                <p>Produktdetails</p>
              </div>
              <h1 className="main-title !leading-[1.4] mb-[15px]">
                <span className="xl:text-[48px] lg:text-[36px] text-[26px] font-normal">Erste Schritte mit </span>
                <br />
                Alice 1 und Alice 2
              </h1>
              <p className="text-[#070707] max-w-[600px] mb-[30px]">
                Cetirc heißt Sie in der Welt der Handvenen-Biometrie mit Alice 1 und Alice 2 willkommen. Wir bieten Ihnen sichere Zahlungslösungen oder fortschrittliche Zugangskontroll- und Identifikationsdienste. Dieser Leitfaden führt Sie durch die ersten Schritte mit Alice 1 und Alice 2, deren
                Funktionen und unsere Sicherheits- und Datenschutzgarantie bei der Verwendung der Cetirc-Handvenen-Biometrieprodukte.
              </p>
            </div>
            <div className="relative z-50 xl:-ml-[140px] lg:-ml-[100px] md:-ml-[50px] ml-0">
              <Image className="md:block hidden" src={ProductBannerThumb} alt="Banner Daumen" />
              <Image className="md:hidden block w-full" src={ProductBannerThumbMobile} alt="Banner Daumen Mobil" />
            </div>
          </div>
        </div>
        <Image className="absolute top-0 right-0 z-20 h-full md:block hidden" src={BannerLinesBg} alt="Banner Linien Hintergrund" />
      </section>
    </>
  );
}
