'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BannerLinesBg from '@/app/assets/images/banner-lines-bg.png';
import BannerThumb from '@/app/assets/images/banner-thumb.png';
import BannerThumbMobile from '@/app/assets/images/banner-thumb-mobile.png';
import BannerEggShame from '@/app/assets/images/egg-shape.png';

const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.4
    }
  }
};

export default function Banner() {
  return (
    <>
      <section className="banner-area relative z-10 overflow-hidden xl:pt[0] lg:pt-[80px] md:pt-[160px] pt-[120px] xl:pb-[0] md:pb-[80px] pb-[0]">
        <div className="container">
          <motion.div className="md:grid grid-cols-2 items-center" variants={stagger} initial="initial" animate="animate">
            <motion.div className="z-30 md:mb-0 mb-[30px]" variants={fadeInDown}>
              <div className="subtitle">
                <span></span>
                <p>Für alle Benutzer für immer kostenlos.</p>
              </div>
              <h1 className="main-title sm:!leading-[1.4] leading-[1.2] md:mb-[15px] mb-[8px]">
                <span className="xl:text-[48px] lg:text-[36px] text-[26px] font-medium">Erleben Sie Spitzentechnologie</span> <br className="" />
                Palm Vein <span className="font-normal">Identitätsdienst</span>
              </h1>
              <p className="text-[#070707] max-w-[525px] md:mb-[30px] mb-[25px]">Einmal scannen und Sie können sich authentifizieren, Ihre Identität nachweisen, Zugangskontrolle erhalten und für immer einkaufen. Es ist KOSTENLOS, SCHNELL und EINFACH.</p>
              <div className="flex xl:gap-8 gap-4">
                <Link href="/loslegen" className="primary-btn">
                  Loslegen
                </Link>
                <Link href="/" className="bordered-btn">
                  App herunterladen
                </Link>
              </div>
            </motion.div>
            <motion.div className="relative z-50 xl:-ml-[100px] md:-mr-[80px]" variants={fadeInDown}>
              <Image className="md:block hidden" src={BannerThumb} alt="Banner Daumen" />
              <Image className="md:hidden block w-full" src={BannerThumbMobile} alt="Banner Daumen Mobil" />
              <Image className="absolute left-[12%] bottom-[16%] -z-10 hidden lg:block" src={BannerEggShame} alt="Banner Eiform" />
            </motion.div>
          </motion.div>
        </div>
        <Image className="absolute top-0 right-0 z-20 h-full md:block hidden" src={BannerLinesBg} alt="Banner Linien Hintergrund" />
      </section>
    </>
  );
}
