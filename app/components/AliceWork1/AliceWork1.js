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
            <p className="">
              Alice 1 verbessert das Einkaufserlebnis und die POS-Zahlungen mit Handvenen-Biometrie. <br className="lg:block hidden" /> So funktioniert es:
            </p>
          </div>
          <div className="grid sm:grid-cols-[4fr_8fr] lg:gap-x-[60px] gap-x-[30px]">
            <div className="mb-[30px]">
              <Image className="w-full" src={AliceWorkThumb1} alt="AliceWorkThumb1" />
            </div>
            <div className="relative">
              {/* single work item  */}
              <div className='flex gap-x-[18px] relative lg:pb-[50px] pb-[30px] before:w-[2px] before:absolute before:h-[calc(100%-50px)] before:content-[unset] before:lg:content-[""] before:border-l-2 before:border-dashed before:top-[40px] before:left-[14px]'>
                <div className="lg:h-[30px] h-[20px] lg:w-[30px] w-[20px] lg:min-w-[30px] min-w-[20px] bg-[#C9F5CD] rounded-full"></div>
                <div>
                  <h4 className="text-[24px] md:mb-[15px] mb-[10px]">Registrierung:</h4>
                  <p className="text-[#646464] lg:text-[20px] text-[14px]">
                    Sie registrieren Ihre Handvenenmuster über die Alice 1 App oder über Cetirc-unterstützte Geräte an den vorgesehenen Registrierungsstellen. Unser App- oder Geräte-eigenes Computer Vision-Algorithmus erfasst und speichert sicher Ihre einzigartigen Handvenenmuster während der
                    Registrierung. Dieses System verschlüsselt Ihr Handbild und erstellt Ihre einzigartige Handsignatur, die von jedem unserer Partnergeräte von Cetirc oder Alice 1 weltweit gelesen werden kann.
                  </p>
                </div>
              </div>
              {/* single work item  */}
              <div className='flex gap-x-[18px] relative lg:pb-[50px] pb-[30px] before:w-[2px] before:absolute before:h-full before:content-[unset] before:lg:content-[""] before:border-l-2 before:border-dashed before:top-[40px] before:left-[14px]'>
                <div className="lg:h-[30px] h-[20px] lg:w-[30px] w-[20px] lg:min-w-[30px] min-w-[20px] bg-[#C8C8C8] rounded-full"></div>
                <div>
                  <h4 className="text-[24px] md:mb-[15px] mb-[10px]">Zahlung:</h4>
                  <p className="text-[#646464] lg:text-[20px] text-[14px]">
                    Nach der Registrierung können Sie Zahlungen bei Partnerhändlern, Einzelhandelsgeschäften oder Zentren vornehmen, indem Sie einfach Ihre Hand am Verkaufsstellen-Terminal scannen. Das System vergleicht Ihr Handbild mit den Handsignaturen in unserem System, um die Transaktion sicher
                    und schnell zu authentifizieren.
                  </p>
                </div>
              </div>
              {/* single work item  */}
              <div className="flex gap-x-[18px] relative">
                <div className="lg:h-[30px] h-[20px] lg:w-[30px] w-[20px] lg:min-w-[30px] min-w-[20px] bg-[#C8C8C8] rounded-full"></div>
                <div>
                  <h4 className="text-[24px] md:mb-[15px] mb-[10px]">Was gibt es noch?</h4>
                  <p className="text-[#646464] lg:text-[20px] text-[14px]">
                    Sie erhalten Zugang zu Alice 2-Angeboten, nachdem Sie die Registrierung bei Alice 1 über die App oder die Registrierungsstelle abgeschlossen haben. Wir haben dies absichtlich so gemacht, um ein nahtloses und integriertes Benutzererlebnis zu bieten.
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
