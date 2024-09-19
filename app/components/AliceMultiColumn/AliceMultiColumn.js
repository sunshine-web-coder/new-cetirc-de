'use client';
import React from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import backgroundShape from '@/app/assets/images/product-bg.png';
import MachineThumb from '@/app/assets/images/new-payment-machine.png';
import MachineThumbMobile from '@/app/assets/images/payment-machine-mobile.png';
import SecurityThumb from '@/app/assets/images/secure-thumb2.png';

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

export default function AliceMultiColumn() {
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
      <section ref={ref} className="alice-multi-column relative z-10 md:pt-[70px] pt-0">
        <Image className="absolute left-0 top-0 w-full -z-10 md:block hidden" src={backgroundShape} alt="Hintergrundform" />
        <div className="container">
          {/* erste Spalte */}
          <motion.div className="grid md:grid-cols-2" variants={stagger} initial="hidden" animate={controls}>
            <motion.div variants={fadeInUp}>
              <h2 className="2xl:text-[48px] lg:text-[36px] text-[26px] font-normal md:mb-[15px] mb-[8px]">Bequeme Zahlungen mit Alice 1</h2>
              <p className="lg:text-[24px] md:text-[18px] text-[14px] md:mb-[35px] mb-[30px]">Wir haben Alice 1 entwickelt, um Ihre POS- und Einzelhandelszahlungen weltweit nahtlos und schnell zu gestalten.</p>
              <ul className="flex flex-col md:gap-[30px] gap-[15px] lg:w-[85%] w-full">
                <motion.li className="flex lg:gap-[15px] gap-[10px] md:text-[20px] text-[14px] bg-white border border-[#A9ED12] md:rounded-[20px] rounded-[15px] py-[20px] px-[15px] mr-[50px]" variants={fadeInUp}>
                  <span className="text-[#424242] text-[16px] mt-[5px]">
                    <IoMdCheckmarkCircle />
                  </span>
                  Einmal registrieren und für Ihre Lieblingsartikel überall, jederzeit bezahlen
                </motion.li>
                <motion.li className="flex lg:gap-[15px] gap-[10px] md:text-[20px] text-[14px] bg-white border border-[#A9ED12] md:rounded-[20px] rounded-[15px] py-[20px] px-[15px] ml-[50px]" variants={fadeInUp}>
                  <span className="text-[#424242] text-[16px] mt-[5px]">
                    <IoMdCheckmarkCircle />
                  </span>
                  Kontaktlos und sicher: Sie müssen nur Ihre Handfläche auf das POS-Gerät halten
                </motion.li>
                <motion.li className="flex lg:gap-[15px] gap-[10px] md:text-[20px] text-[14px] bg-white border border-[#A9ED12] md:rounded-[20px] rounded-[15px] py-[20px] px-[15px] mr-[50px]" variants={fadeInUp}>
                  <span className="text-[#424242] text-[16px] mt-[5px]">
                    <IoMdCheckmarkCircle />
                  </span>
                  Sie haben die volle Kontrolle: Sie entscheiden, wo und wann Sie Ihre Handflächen-ID verwenden oder genehmigen
                </motion.li>
              </ul>
            </motion.div>
            <div className="md:ml-auto flex items-center sm:items-start justify-center sm:justify-start mt-[30px] md:mt-0">
              <Image className="w-[200px] sm:w-[350px]" width={5000} height={5000} src={MachineThumb} alt="Zahlungsmaschine" />
            </div>
          </motion.div>
          {/* zweite Spalte */}
          <motion.div className="grid md:grid-cols-2 gap-[40px] md:mt-[-100px] mt-[60px]" variants={stagger} initial="hidden" animate={controls}>
            <motion.div className="mt-[150px] md:block hidden" variants={fadeInUp}>
              <Image className="" src={SecurityThumb} alt="Sicherheitsbild" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className="2xl:text-[48px] lg:text-[36px] text-[26px] font-normal mb-[30px]">Nahtlose Zugangskontrolle mit Alice 2</h2>
              <ul className="flex flex-col md:gap-[30px] gap-[15px] lg:w-[90%] w-full">
                <motion.li className="flex lg:gap-[15px] gap-[10px] md:text-[20px] text-[14px] bg-[#CAF7CE] border border-[#A0EFA6] md:rounded-[20px] rounded-[15px] py-[20px] px-[15px] mr-[50px]" variants={fadeInUp}>
                  <span className="text-[#424242] text-[16px] mt-[5px]">
                    <IoMdCheckmarkCircle />
                  </span>
                  Durchqueren Sie mühelos jeden eingeschränkten Ort, Eingang, Ressource oder Informationen mit Alice 2.
                </motion.li>
                <motion.li className="flex lg:gap-[15px] gap-[10px] md:text-[20px] text-[14px] bg-[#CAF7CE] border border-[#A0EFA6] md:rounded-[20px] rounded-[15px] py-[20px] px-[15px] ml-[50px]" variants={fadeInUp}>
                  <span className="text-[#424242] text-[16px] mt-[5px]">
                    <IoMdCheckmarkCircle />
                  </span>
                  Es ist schnell, flexibel und sicher: Sie autorisieren den Zugang nur mit Ihrer Handfläche.
                </motion.li>
                <motion.li className="flex lg:gap-[15px] gap-[10px] md:text-[20px] text-[14px] bg-[#CAF7CE] border border-[#A0EFA6] md:rounded-[20px] rounded-[15px] py-[20px] px-[15px] mr-[50px]" variants={fadeInUp}>
                  <span className="text-[#424242] text-[16px] mt-[5px]">
                    <IoMdCheckmarkCircle />
                  </span>
                  Jeder hat eine einzigartige Identität, was zusätzliche Zuverlässigkeit und Sicherheit bietet.
                </motion.li>
                <motion.li className="flex lg:gap-[15px] gap-[10px] md:text-[20px] text-[14px] bg-[#CAF7CE] border border-[#A0EFA6] md:rounded-[20px] rounded-[15px] py-[20px] px-[15px] ml-[50px]" variants={fadeInUp}>
                  <span className="text-[#424242] text-[16px] mt-[5px]">
                    <IoMdCheckmarkCircle />
                  </span>
                  Kontaktloser Zugangskontrollservice, nur mit Ihrer Handfläche
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
