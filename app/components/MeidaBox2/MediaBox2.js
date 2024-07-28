import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Media2Thumb1 from '@/app/assets/images/media-thumb3.png';
import Media2Thumb2 from '@/app/assets/images/media-thumb4.png';

export default function MediaBox2() {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid md:grid-cols-[5fr_7fr] gap-x-[30px] items-center md:mb-[140px] mb-[60px]">
            <div className="md:order-2 md:mb-0 mb-[30px]">
              <h2 className="section-title mb-[30px]">
                <span className="font-normal">Unser Engagement für </span> <br /> Sicherheit und Datenschutz
              </h2>
              <p className="mb-[20px]">
                Bei Cetirc verstehen wir die Bedeutung von Sicherheit und Datenschutz und wie sie unsere Marke und diejenigen, die uns vertrauen, beeinflussen. Deshalb halten wir uns an strenge Industriestandards und bewährte Praktiken, um Benutzerdaten und Palmvenen-Signaturen zu schützen.
              </p>
              <p className="mb-[30px]">
                Wir verpflichten uns, Integrität, Transparenz und Verantwortlichkeit in allen Aspekten unserer Aktivitäten zu wahren. Unsere Produkte, Alice 1 und Alice 2, verfügen über robuste Verschlüsselungsmechanismen zur sicheren Speicherung der Palmvenen-Signaturen unserer Nutzer. Wir führen
                auch regelmäßig Sicherheitsüberprüfungen durch, um Risiken und Schwachstellen zu reduzieren.
              </p>
              <Link href="/loslegen" className="primary-btn">
                Erfahren Sie, wie es funktioniert
              </Link>
            </div>
            <div className="h-full min-h-[360px] relative md:order-1">
              <Image className="object-cover rounded-l-[30px]" src={Media2Thumb1} alt="Medien Daumen1" />
            </div>
          </div>

          <div className="grid md:grid-cols-[7fr_5fr] gap-x-[30px] items-center md:mb-[140px] mb-[60px]">
            <div className="">
              <h2 className="section-title md:mb-0 mb-[30px]">
                <span className="font-medium">Unsere Geschichte</span>
              </h2>
              <p className="mb-[20px]">
                Seit unserer Gründung haben wir unermüdlich daran gearbeitet, die Grenzen der Palmvenen-Biometrie und Authentifizierungstechnologie zu erweitern. Wir haben unsere Vision, fortschrittliche biometrische Lösungen zu entwickeln, die die zunehmenden Identifikations- und digitalen
                Signaturprobleme und -ineffizienzen lösen, nie aus den Augen verloren. Wichtiger noch, wir haben enorme Fortschritte in Forschung, Entwicklung, Implementierung und Partnerschaft gemacht, um uns als vertrauenswürdiger Marktführer in der Biometrie-Branche zu etablieren.
              </p>
            </div>
            <div className="h-full min-h-[360px] relative">
              <Image className="object-cover rounded-l-[30px]" src={Media2Thumb2} alt="Medien Daumen2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
