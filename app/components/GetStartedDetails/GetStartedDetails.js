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
            <h2 className="section-title mb-[20px]">
              <span className="font-normal">Was ist</span> Alice 1 und Alice 2?
            </h2>
            <p>Alice 1 und Alice 2 sind Cetircs hochmoderne Handvenenlösungen, die die Grenzen der sicheren biometrischen Zahlungen und Identifizierung mit Adleraugen-Genauigkeit vorantreiben.</p>
          </div>
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 xl:gap-y-[60px] gap-y-[20px] xl:gap-x-[120px] gap-x-[20px]">
            {/* single details box */}
            <div className="md:text-left text-center">
              <div className="md:flex items-center gap-[20px] md:mb-[20px] mb-[8px]">
                <Image className="lg:h-[70px] h-[60px] lg:w-[70px] w-[60px] lg:min-w-[70px] min-w-[60px] md:mx-0 mx-auto md:mb-0 mb-[20px]" src={GetStartedDetailsIcon1} alt="Produktdetails Symbol" />
                <h4 className="lg:text-[24px] text-[20px] font-medium">Alice 1 Funktionen</h4>
              </div>
              <p className="lg:text-[18px] text-[14px] text-[#686868]">&quot;Verwenden Sie Alice 1 für sichere Handvenen-Zahlungsdienste an POS- und Einzelhandelsgeschäften.&quot;</p>
            </div>
            {/* single details box */}
            <div className="md:text-left text-center">
              <div className="md:flex items-center gap-[20px] md:mb-[20px] mb-[8px]">
                <Image className="lg:h-[70px] h-[60px] lg:w-[70px] w-[60px] lg:min-w-[70px] min-w-[60px] md:mx-0 mx-auto md:mb-0 mb-[20px]" src={GetStartedDetailsIcon1} alt="Produktdetails Symbol 1" />
                <h4 className="lg:text-[24px] text-[20px] font-medium">Alice 2 Funktionen</h4>
              </div>
              <p className="lg:text-[18px] text-[14px] text-[#686868]">&quot;Alice 2 bietet fortschrittliche Zugangskontroll- und Identifizierungsfunktionen.&quot;</p>
            </div>
            {/* single details box */}
            <div className="md:text-left text-center">
              <div className="md:flex items-center gap-[20px] md:mb-[20px] mb-[8px]">
                <Image className="lg:h-[70px] h-[60px] lg:w-[70px] w-[60px] lg:min-w-[70px] min-w-[60px] md:mx-0 mx-auto md:mb-0 mb-[20px]" src={GetStartedDetailsIcon2} alt="Produktdetails Symbol 2" />
                <h4 className="lg:text-[24px] text-[20px] font-medium">Registrierung</h4>
              </div>
              <p className="lg:text-[18px] text-[14px] text-[#686868]">&quot;Registrieren Sie sich mit der Alice 1 App oder offline mit unserem Cetirc-Biometriegerät. Die App ist kostenlos zum Herunterladen und einfach zu bedienen.&quot;</p>
            </div>
            {/* single details box */}
            <div className="md:text-left text-center">
              <div className="md:flex items-center gap-[20px] md:mb-[20px] mb-[8px]">
                <Image className="lg:h-[70px] h-[60px] lg:w-[70px] w-[60px] lg:min-w-[70px] min-w-[60px] md:mx-0 mx-auto md:mb-0 mb-[20px]" src={GetStartedDetailsIcon3} alt="Produktdetails Symbol 3" />
                <h4 className="lg:text-[24px] text-[20px] font-medium">Biometrische Authentifizierung</h4>
              </div>
              <p className="lg:text-[18px] text-[14px] text-[#686868]">&quot;Beide Produkte verwenden Handvenen-Biometrie, eine der sichersten und genauesten Authentifizierungsmethoden von heute.&quot;</p>
            </div>
            {/* single details box */}
            <div className="md:text-left text-center">
              <div className="md:flex items-center gap-[20px] md:mb-[20px] mb-[8px]">
                <Image className="lg:h-[70px] h-[60px] lg:w-[70px] w-[60px] lg:min-w-[70px] min-w-[60px] md:mx-0 mx-auto md:mb-0 mb-[20px]" src={GetStartedDetailsIcon4} alt="Produktdetails Symbol 4" />
                <h4 className="lg:text-[24px] text-[20px] font-medium">Kosteninformationen</h4>
              </div>
              <p className="lg:text-[18px] text-[14px] text-[#686868]">&quot;Die Alice 1-Hardware und die Alice 2-Zugangskontrolle werden zu wettbewerbsfähigen Preisen für den Unternehmens-/Geschäftsgebrauch angeboten.&quot;</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
