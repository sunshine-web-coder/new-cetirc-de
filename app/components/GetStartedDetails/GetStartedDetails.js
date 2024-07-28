import React from 'react';
import Image from 'next/image';
import GetStartedDetailsIcon1 from '@/app/assets/images/product-details-icon1.svg';
import GetStartedDetailsIcon2 from '@/app/assets/images/product-details-icon2.svg';
import GetStartedDetailsIcon3 from '@/app/assets/images/product-details-icon3.svg';
import GetStartedDetailsIcon4 from '@/app/assets/images/product-details-icon4.svg';

export default function GetStartedDetails() {
  return (
    <>
      <section className="md:py-[140px] py-[60px]">
        <div className="container">
          <div className="relative z-10 text-center mb-[40px]">
            <div className="subtitle inline-block !mb-[20px]">
              <span></span>
              <p>Produktdetails</p>
            </div>
            <h2 className="section-title mb-[20px]">
              <span className="font-normal">Erkunden</span> Alice 1 und Alice 2
            </h2>
            <p>&quot;Alice 1 und Alice 2 sind hochmoderne Handvenen-Identifikationsdienste, die von Cetirc entwickelt wurden. Beide Produkte verwenden Handvenen-Biometrie, eine der sichersten und genauesten biometrischen Authentifizierungsmethoden von heute.</p>
          </div>
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 xl:gap-y-[60px] gap-y-[20px] xl:gap-x-[120px] gap-x-[20px]">
            {/* single details box */}
            <div className="md:text-left text-center">
              <div className="md:flex items-center gap-[20px] md:mb-[20px] mb-[8px]">
                <Image className="lg:h-[70px] h-[60px] lg:w-[70px] w-[60px] lg:min-w-[70px] min-w-[60px] md:mx-0 mx-auto md:mb-0 mb-[20px]" src={GetStartedDetailsIcon1} alt="Produktdetails Icon" />
                <h4 className="lg:text-[24px] text-[20px] font-medium">Alice 1 Funktionen</h4>
              </div>
              <p className="lg:text-[18px] text-[14px] text-[#686868]">&quot;Verwenden Sie Alice 1 für sichere Handvenen-Zahlungsdienste an POS- und Einzelhandelsgeschäften.&quot;</p>
            </div>
            {/* single details box */}
            <div className="md:text-left text-center">
              <div className="md:flex items-center gap-[20px] md:mb-[20px] mb-[8px]">
                <Image className="lg:h-[70px] h-[60px] lg:w-[70px] w-[60px] lg:min-w-[70px] min-w-[60px] md:mx-0 mx-auto md:mb-0 mb-[20px]" src={GetStartedDetailsIcon1} alt="Produktdetails Icon 1" />
                <h4 className="lg:text-[24px] text-[20px] font-medium">Alice 2 Funktionen</h4>
              </div>
              <p className="lg:text-[18px] text-[14px] text-[#686868]">&quot;Alice 2 bietet erweiterte Zugangskontroll- und Identifikationsmöglichkeiten.&quot;</p>
            </div>
            {/* single details box */}
            <div className="md:text-left text-center">
              <div className="md:flex items-center gap-[20px] md:mb-[20px] mb-[8px]">
                <Image className="lg:h-[70px] h-[60px] lg:w-[70px] w-[60px] lg:min-w-[70px] min-w-[60px] md:mx-0 mx-auto md:mb-0 mb-[20px]" src={GetStartedDetailsIcon2} alt="Produktdetails Icon 2" />
                <h4 className="lg:text-[24px] text-[20px] font-medium">Registrierung</h4>
              </div>
              <p className="lg:text-[18px] text-[14px] text-[#686868]">&quot;Registrieren Sie sich mit der Alice 1 App oder offline mit unserem Cetirc-Biometriegerät. Die App ist kostenlos herunterzuladen und einfach zu bedienen.&quot;</p>
            </div>
            {/* single details box */}
            <div className="md:text-left text-center">
              <div className="md:flex items-center gap-[20px] md:mb-[20px] mb-[8px]">
                <Image className="lg:h-[70px] h-[60px] lg:w-[70px] w-[60px] lg:min-w-[70px] min-w-[60px] md:mx-0 mx-auto md:mb-0 mb-[20px]" src={GetStartedDetailsIcon3} alt="Produktdetails Icon 3" />
                <h4 className="lg:text-[24px] text-[20px] font-medium">Biometrische Authentifizierung</h4>
              </div>
              <p className="lg:text-[18px] text-[14px] text-[#686868]">&quot;Beide Produkte verwenden Handvenen-Biometrie, eine der sichersten und genauesten Authentifizierungsmethoden von heute.&quot;</p>
            </div>
            {/* single details box */}
            <div className="md:text-left text-center">
              <div className="md:flex items-center gap-[20px] md:mb-[20px] mb-[8px]">
                <Image className="lg:h-[70px] h-[60px] lg:w-[70px] w-[60px] lg:min-w-[70px] min-w-[60px] md:mx-0 mx-auto md:mb-0 mb-[20px]" src={GetStartedDetailsIcon4} alt="Produktdetails Icon 4" />
                <h4 className="lg:text-[24px] text-[20px] font-medium">Kosteninformationen</h4>
              </div>
              <p className="lg:text-[18px] text-[14px] text-[#686868]">&quot;Alice 1 Hardware und Alice 2 Zugangskontrolle werden zu wettbewerbsfähigen Preisen für Unternehmen/Geschäftskunden angeboten.&quot;</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
