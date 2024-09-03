import React from 'react';
import Image from 'next/image';
import AliceWorkIcon1 from '@/app/assets/images/alice-work-icon1.svg';

export default function AliceWork1() {
  return (
    <>
      <section className='md:pt-[140px] md:bg-[#CAF7CE] relative z-10 before:absolute before:bottom-0 before:left-0 before:h-[180px] before:w-full before:content-[""] before:bg-white before:-z-10'>
        <div className="container">
          <div className="flex items-center flex-col md:mb-[50px] mb-[30px] text-center">
            <h2 className="section-title md:mb-[20px] mb-[10px]">
              <span className="font-normal">Wie funktioniert</span> <br /> Alice 2?
            </h2>
            <p className="max-w-[830px] xl:text-[24px] lg:text-[18px] text-[14px]">Alice 2 verwendet Handvenen-Biometrie-Technologie, um Zugangskontrollen und Identifikationsaktivitäten zu authentifizieren.</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            {/* single box */}
            <div className="bg-white p-[30px] rounded-[23px] shadow-[0_30px_60px_rgba(0,0,0,0.05)] md:text-left text-center lg:mt-[40px]">
              <Image className="mb-[10px] xl:max-w-[90px] max-w-[60px] md:mx-0 mx-auto" src={AliceWorkIcon1} alt="Alice Work Icon1" />
              <h3 className="xl:text-[30px] lg:text-[24px] text-[20px] font-medium xl:mb-[15px] mb-[10px] leading-[1.3]">Zugangskontrolle</h3>
              <p className="xl:text-[20px] text-[14px]">
                Alice 2 ermöglicht sichere Zugangskontrollen zu eingeschränkten Bereichen oder Einrichtungen, indem Benutzer basierend auf ihrer mit Alice 1 erstellten Handsignatur authentifiziert werden. Mitarbeiter oder autorisiertes Personal können durch Scannen ihrer Handfläche an den
                vorgesehenen Zugangspunkten eintreten.
              </p>
            </div>
            {/* single box */}
            <div className="bg-white py-[30px] px-[20px] rounded-[23px] shadow-[0_30px_60px_rgba(0,0,0,0.05)] md:text-left text-center">
              <Image className="mb-[10px] xl:max-w-[90px] max-w-[60px] md:mx-0 mx-auto" src={AliceWorkIcon1} alt="Alice Work Icon1" />
              <h3 className="xl:text-[30px] lg:text-[24px] text-[20px] font-medium xl:mb-[15px] mb-[10px] leading-[1.3]">Identifikation</h3>
              <p className="xl:text-[20px] text-[14px]">
                Neben der Zugangskontrolle bietet Alice 2 Identitätsüberprüfung in verschiedenen Szenarien, wie Anwesenheitserfassung, Besuchermanagement oder sicherer Dokumentenzugriff. Benutzer können schnell, genau und bequem ihre Identität durch Scannen ihres Handvenenmusters bestätigen.
              </p>
            </div>
            {/* single box */}
            <div className="bg-white py-[30px] px-[20px] rounded-[23px] shadow-[0_30px_60px_rgba(0,0,0,0.05)] md:text-left text-center lg:mt-[90px]">
              <Image className="mb-[10px] xl:max-w-[90px] max-w-[60px] md:mx-0 mx-auto" src={AliceWorkIcon1} alt="Alice Work Icon1" />
              <h3 className="xl:text-[30px] lg:text-[24px] text-[20px] font-medium xl:mb-[15px] mb-[10px] leading-[1.3]">B2B-Integration</h3>
              <p className="xl:text-[20px] text-[14px]">Egal, ob Sie ein kleines Unternehmen sind, das Ihre Sicherheitsprotokolle aktualisieren möchte, oder eine große Organisation, die Ihre Zutrittskontrollsysteme verstärken muss, Alice 2 bietet eine bessere, zuverlässigere Lösung, die umfassenden Schutz und Sicherheit gewährleistet. Alice 2 ist einfach zu installieren und verfügt über fortschrittliche Zugangskontrollsysteme zur Überwachung und zum Schutz sensibler Daten und kritischer Ressourcen in der heutigen sich entwickelnden Technologielandschaft.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
