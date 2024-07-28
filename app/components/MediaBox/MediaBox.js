import React from 'react';
import Image from 'next/image';
import MediaThumb1 from '@/app/assets/images/media-thumb1.png';
import MediaThumb2 from '@/app/assets/images/media-thumb2.png';

export default function MediaBox() {
  return (
    <>
      <section className="md:py-[140px] py-[60px]">
        <div className="container">
          <div className="grid xl:grid-cols-[4fr_8fr] lg:grid-cols-[5fr_7fr] md:grid-cols-[5fr_7fr] grid-cols-1 xl:gap-x-[50px] gap-x-[30px] items-center md:border border-[#000000] rounded-[30px] md:mb-[80px] mb-[60px]">
            <div className="h-full min-h-[360px] relative md:block hidden">
              <Image className="object-cover rounded-l-[30px]" fill src={MediaThumb1} alt="Medien Daumen1" />
            </div>
            <div className="xl:pr-[80px] lg:pr-[30px] md:pr-[30px] pr-0 xl:py-[110px] lg:py-[60px] md:text-left text-center">
              <h2 className="section-title mb-[10px] font-medium">Wer Wir Sind</h2>
              <p>
                Wir sind eine erstklassige Lösung für Palmvenen-Biometrie, die sich der Verbesserung der Art und Weise verpflichtet hat, wie Menschen ihre Identitäten für verschiedene Anwendungen nutzen und damit interagieren. Unsere Technologie verwendet Palmvenenmuster, um die Sicherheit in
                verschiedenen Identitäts- und Authentifizierungsbereichen zu verbessern. Begleiten Sie uns auf dieser Reise, erfahren Sie mehr über unsere Mission und entdecken Sie die Produkte, die diese Veränderung bereits möglich machen.
              </p>
            </div>
          </div>
          <div className="grid xl:grid-cols-[8fr_4fr] lg:grid-cols-[7fr_5fr] md:grid-cols-[7fr_5fr] grid-cols-1 xl:gap-x-[50px] gap-x-[30px] items-center md:border border-[#A9ED12] rounded-[30px]">
            <div className="xl:pl-[80px] lg:pl-[30px] md:pl-[30px] pl-0 xl:py-[110px] lg:py-[60px] md:text-left text-center">
              <h2 className="section-title mb-[10px] font-medium">Unsere Mission</h2>
              <p>
                <b>Unsere Mission ist einfach:</b> sichere, bequeme und zuverlässige Palmvenen-Biometrie- und Authentifizierungslösungen bereitzustellen, die Einzelpersonen und Organisationen weltweit stärken. Wir nutzen die neuesten Technologien und Werkzeuge, um den Prozess zu optimieren und die
                Benutzererfahrungen in verschiedenen Branchen, die sichere Authentifizierungsmethoden benötigen, zu verbessern.
              </p>
            </div>
            <div className="h-full min-h-[360px] relative md:block hidden">
              <Image className="object-cover rounded-r-[30px]" fill src={MediaThumb2} alt="Medien Daumen2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
