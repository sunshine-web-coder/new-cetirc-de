import React from 'react';
import Image from 'next/image';
import AliceWorkThumb1 from '@/app/assets/images/alice1work-thumb.png';
import AliceWorkThumbMobile from '@/app/assets/images/alice1work-thumb-mobile.png';

export default function AliceWork1() {
  return (
    <>
      <section className="md:py-[140px] py-[60px]">
        <div className="container">
          <div className="flex flex-col mb-[50px]">
            <h2 className="section-title mb-[20px]">
              <span className="font-normal">Wie funktioniert</span> Alice 1?
            </h2>
            <p>
              Alice 1 verbessert die Zahlungserlebnisse im Einzelhandel und an POS-Terminals mit Handvenen-Biometrie. <br className="lg:block hidden" /> So funktioniert es:
            </p>
          </div>
          <div className="grid sm:grid-cols-[4fr_8fr] lg:gap-x-[60px] gap-x-[30px]">
            <div>
              <Image className="w-full sm:block hidden" src={AliceWorkThumb1} alt="AliceWorkThumb1" />
              <Image className="w-full sm:hidden block -ml-[16px] mb-[30px]" src={AliceWorkThumbMobile} alt="AliceWorkThumbMobile" />
            </div>
            <div className="relative">
              {/* single work item */}
              <div className='flex gap-x-[18px] relative lg:pb-[50px] pb-[30px] before:w-[2px] before:absolute before:h-[calc(100%-50px)] before:content-[unset] before:lg:content-[""] before:border-l-2 before:border-dashed before:top-[40px] before:left-[14px]'>
                <div className="lg:h-[30px] h-[20px] lg:w-[30px] w-[20px] lg:min-w-[30px] min-w-[20px] bg-[#CAF7CE] rounded-full"></div>
                <div>
                  <h4 className="text-[24px] md:mb-[15px] mb-[10px]">Registrierung:</h4>
                  <p className="text-[#646464] lg:text-[20px] text-[14px]">
                    Sie registrieren Ihre Handvenenmuster mit der Alice 1 App oder über von Cetirc unterstützte Geräte an bestimmten Registrierungsstellen. Der proprietäre Computer-Vision-Algorithmus unserer App oder unseres Geräts erfasst und speichert Ihre einzigartigen Handvenenmuster sicher
                    während der Registrierung. Dieses System verschlüsselt Ihr Handbild und erstellt Ihre einzigartige Handsignatur, die von allen unseren Partnergeräten von Cetirc oder Alice 1 weltweit gelesen werden kann.
                  </p>
                </div>
              </div>
              {/* single work item */}
              <div className='flex gap-x-[18px] relative lg:pb-[50px] pb-[30px] before:w-[2px] before:absolute before:h-full before:content-[unset] before:lg:content-[""] before:border-l-2 before:border-dashed before:top-[40px] before:left-[14px]'>
                <div className="lg:h-[30px] h-[20px] lg:w-[30px] w-[20px] lg:min-w-[30px] min-w-[20px] bg-[#C8C8C8] rounded-full"></div>
                <div>
                  <h4 className="text-[24px] md:mb-[15px] mb-[10px]">Zahlung:</h4>
                  <p className="text-[#646464] lg:text-[20px] text-[14px]">
                    Nach der Registrierung können Sie bei teilnehmenden Händlern, Einzelhandelsgeschäften oder Zentren bezahlen, indem Sie einfach Ihre Handfläche am Point-of-Sale-Terminal scannen. Das System vergleicht Ihr Handbild mit den in unserem System gespeicherten Handsignaturen, um die
                    Transaktion sicher und schnell zu authentifizieren.
                  </p>
                </div>
              </div>
              {/* single work item */}
              <div className="flex gap-x-[18px] relative">
                <div className="lg:h-[30px] h-[20px] lg:w-[30px] w-[20px] lg:min-w-[30px] min-w-[20px] bg-[#C8C8C8] rounded-full"></div>
                <div>
                  <h4 className="text-[24px] md:mb-[15px] mb-[10px]">Was noch?</h4>
                  <p className="text-[#646464] lg:text-[20px] text-[14px]">
                    Nach der Registrierung mit Alice 1 über die App oder die Registrierungsstelle erhalten Sie Zugriff auf die Angebote von Alice 2. Wir haben dies absichtlich ermöglicht, um ein nahtloses und integriertes Benutzererlebnis zu bieten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
