'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WorksIcon1 from '@/app/assets/images/works-icon.svg';
import WorksIcon2 from '@/app/assets/images/works-icon2.svg';
import WorksIcon3 from '@/app/assets/images/works-icon3.svg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

export default function HowItWorks() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <>
      <section ref={ref} className="md:py-[80px] py-0">
        <div className="container">
          <motion.div className="flex flex-col items-center text-center mb-[50px]" variants={stagger} initial="hidden" animate={controls}>
            <motion.div className="subtitle" variants={fadeInUp}>
              <span></span>
              <p>Wie es funktioniert</p>
            </motion.div>
            <motion.h2 className="section-title max-w-[550px] mb-[5px]" variants={fadeInUp}>
              <span className="font-normal">Beginnen Sie Ihre</span> sichere Erfahrung
            </motion.h2>
            <motion.p className="text-[24px] text-[#5E5E5E] mb-[30px]" variants={fadeInUp}>
              Das ist alles, was Sie brauchen, um loszulegen
            </motion.p>
            <motion.div className="flex items-center xl:gap-8 gap-4" variants={fadeInUp}>
              <Link href="/loslegen" className="primary-btn">
                Loslegen
              </Link>
              <Link href="/Cetric.apk" className="bordered-btn">
                App herunterladen
              </Link>
            </motion.div>
          </motion.div>
          <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4" variants={stagger} initial="hidden" animate={controls}>
            {/* single box  */}
            <motion.div className="bg-[#CAF7CE] md:py-[45px] py-[25px] md:px-[30px] px-[20px] xl:rounded-[43px] rounded-[20px] text-center" variants={fadeInUp}>
              <Image className="xl:mb-[10px] mb-[5px] mx-auto md:max-w-[105px] max-w-[60px]" src={WorksIcon1} alt="Wie es funktioniert Icon1" />
              <h3 className="xl:text-[30px] sm:text-[24px] text-[20px] font-normal mb-[15px] leading-[1.3]">Laden Sie die Cetirc-App kostenlos herunter:</h3>
              <p className="text-[#121212] sm:text-[16px] text-[14px]">Laden Sie die App herunter und registrieren Sie sich mit Alice 1, um ein Online-Profil und eine ID für alle Cetirc-Handvenen- und Biometrieprodukte und -partner zu erstellen. Dies schließt Alice 2 ein.</p>
            </motion.div>
            {/* single box  */}
            <motion.div className="bg-[#CAF7CE] md:py-[45px] py-[25px] md:px-[30px] px-[20px] xl:rounded-[43px] rounded-[20px] text-center" variants={fadeInUp}>
              <Image className="xl:mb-[10px] mb-[5px] mx-auto md:max-w-[105px] max-w-[60px]" src={WorksIcon2} alt="Wie es funktioniert Icon2" />
              <h3 className="xl:text-[30px] sm:text-[24px] text-[20px] font-normal mb-[15px]">Registrierung und Biometrie</h3>
              <p className="text-[#121212] sm:text-[16px] text-[14px]">Vervollständigen Sie KYC und grundlegende Biometrie und erhalten Sie Zugang zu Angeboten der Stufen 1 und 2, einschließlich der Möglichkeit, Zahlungen zu leisten.</p>
            </motion.div>
            {/* single box  */}
            <motion.div className="bg-[#CAF7CE] md:py-[45px] py-[25px] md:px-[30px] px-[20px] xl:rounded-[43px] rounded-[20px] text-center" variants={fadeInUp}>
              <Image className="xl:mb-[10px] mb-[5px] mx-auto md:max-w-[105px] max-w-[60px]" src={WorksIcon3} alt="Wie es funktioniert Icon3" />
              <h3 className="xl:text-[30px] sm:text-[24px] text-[20px] font-normal mb-[15px]">Aktivieren Sie Ihr Profil mit Alice 1</h3>
              <p className="text-[#121212] sm:text-[16px] text-[14px]">Aktivieren Sie Ihr Profil mit dem Alice 1 Gerät und genießen Sie die vollen Vorteile und Premium-Angebote von Cetirc, einschließlich eingeschränkter Zugangskontrolle und POS-Zahlungen.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
