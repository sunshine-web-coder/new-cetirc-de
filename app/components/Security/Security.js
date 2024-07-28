import React from 'react';
import Image from 'next/image';
import SecurityImage from '@/app/assets/images/security-thumb.png';

export default function Security() {
  return (
    <>
      <section className="md:py-[120px] pt-[60px] pb-0">
        <div className="container">
          <div className="grid md:grid-cols-[5fr_7fr] gap-x-[50px] items-center">
            <div className="md:mb-0 mb-[30px]">
              <Image className="" src={SecurityImage} alt="Security Thumb" />
            </div>
            <div>
              <h2 className="section-title mb-[15px]">
                <span className="font-normal">Sicherheit und Datenschutz bei</span> <br /> Alice 1 und Alice 2
              </h2>
              <p className="mb-[30px]">
                Bei Cetirc legen wir großen Wert auf Ihre Sicherheit und den Schutz Ihrer Daten und stellen sicher, dass Alice 1 und Alice 2 kompromisslose Sicherheitsstandards einhalten. Darüber hinaus verwenden beide Produkte robuste Verschlüsselungstechniken, um Benutzerdaten und
                Handflächensignaturen zu schützen. Der Zugang zu sensiblen Informationen wird streng kontrolliert und überwacht, um unbefugten Zugriff oder Missbrauch zu verhindern. Tatsächlich kontrollieren Sie, wann und wo Sie Zahlungen und Zugangskontrollen mit Ihrer Handflächensignatur
                authentifizieren.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
