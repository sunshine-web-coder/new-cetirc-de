import Link from 'next/link';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="">
      <div className="border-b pb-4">
        <h2 className="text-2xl leading-[30px] font-[700] text-[#222]">Datenschutzoffenlegung</h2>
      </div>
      <div className="text-[13px] text-[#43474E] py-4">
        <p>
          Diese <b>Datenschutzerklärung</b> („Datenschutzerklärung“) erklärt, wie Cetirc und seine Tochtergesellschaften zusammen („<b>unser</b>“, „<b>wir</b>“, „<b>uns</b>“) Ihre persönlichen Daten über ihre Websites, Hardwaregeräte, Produkte („<b>Alice 1</b> und <b>Alice 2</b>“, andere) und
          Dienstleistungen (zusammen "<b>Cetirc-Dienste</b>", "<b>Dienst</b>") sammeln und verarbeiten.
          <br />
          <br />
          Wir wissen, wie wichtig Ihnen diese Informationen sind und dass Sie uns vertrauen, diese verantwortungsvoll zu behandeln. Daher haben wir diese Mitteilung vorbereitet, um Sie darüber zu informieren, wie wir die Verantwortung für Ihre Datensicherheit und -verteilung übernehmen. Durch die
          Nutzung der Cetirc-Dienste stimmen Sie dieser Datenschutzerklärung zu und erklären sich damit einverstanden.
          <br />
          <br />
          Bitte lesen Sie unsere{' '}
          <Link href="/rechtlich/Nutzungsbedingungen" className="linkStyle">
            Nutzungsbedingungen
          </Link>{' '}
          für zusätzliche Informationen über die Nutzung unserer Dienste, die Verarbeitung Ihrer persönlichen Daten und Ihre Rechte nach den geltenden Datenschutzgesetzen.
        </p>

        <div>
          <h3 className="text-[22px] my-2 mt-4">1. Informationen, die wir sammeln</h3>
          <p>Wir sammeln Ihre persönlichen Informationen, um unsere Dienste kontinuierlich zu verbessern und bessere Leistungen zu bieten. Die Arten von persönlichen Informationen, die wir sammeln, umfassen:</p>
          <div className="mt-6">
            <span>1.1. Informationen, die Sie uns bereitstellen</span>
            <p>Wir erhalten und speichern alle Informationen, die Sie in Bezug auf Cetirc-Dienste bereitstellen. Dazu gehören:</p>
            <ul className="list-disc ml-6">
              <li>Informationen in Bezug auf Ihre Cetirc-ID, wie z.B. Palmdaten ("Palm Signature"), Informationen, die Sie auf Cetirc-Geräten oder unserer Website bereitstellen, und alle anderen Informationen, die mit der Nutzung unserer Dienste verbunden sind.</li>
              <li>
                Informationen, die Sie über Cetirc-Dienste bereitstellen, z.B. wenn Sie ein Konto erstellen, mit unseren Diensten interagieren oder den Kunden{' '}
                <a href="mailto:support@cetirc.com" className="linkStyle">
                  support{' '}
                </a>
                kontaktieren.
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <span>1.2. Informationen, die wir automatisch sammeln</span>
            <p>Wir sammeln und speichern automatisch bestimmte Informationen, während Sie die Cetirc-Dienste nutzen, einschließlich:</p>
            <ul className="list-disc ml-6">
              <li>Cookies und andere einzigartige Identifikatoren, wenn Ihr Gerät oder Browser mit den Cetirc-Diensten interagiert.</li>
              <li>Daten, die gesammelt werden, wenn Sie auf irgendeine Weise mit unseren Produkten oder Diensten interagieren.</li>
              <li>Informationen, die durch Technologie oder Geräte an unseren physischen Standorten gesammelt werden, wie Sensoren und Kameras, um Ihre Erfahrung zu verbessern.</li>
            </ul>
          </div>
          <div className="mt-6">
            <span>1.3. Informationen aus anderen Quellen</span>
            <p>Wir können Informationen über Sie aus anderen Quellen erhalten, wie z.B.:</p>
            <ul className="list-disc ml-6">
              <li>Aktualisierte Liefer- und Adressinformationen von unseren Zustellern.</li>
              <li>Informationen von Drittanbietern, Partnern und Händlerdiensten, die unsere Dienste verbessern.</li>
            </ul>
          </div>
          <div className="mt-6">
            <span>1.4. Sammlung und Nutzung von Standortdaten</span>
            <p>Unsere App sammelt Ihre Standortdaten, um Ihre Erfahrung zu verbessern und Ihnen personalisierte Dienstleistungen anzubieten. Insbesondere verwenden wir Ihre Standortinformationen für folgende Zwecke:</p>
            <ul className="list-disc ml-6">
              <li>
                <b>Anzeigen der nächsten Geschäfte:</b> Wir erfassen Ihre genauen Standortdaten, um die nächstgelegenen Geschäfte anzuzeigen, in denen unsere Produkte verfügbar sind, und so Komfort und eine bessere Nutzererfahrung zu gewährleisten.
              </li>
              <p className="mb-1 mt-1">
                <b>Wie Standortdaten erfasst werden:</b>
              </p>
              <li>Wir erfassen diese Daten über das GPS Ihres Geräts oder andere Standortdienste.</li>

              <p className="mb-1">
                <b>Wie Standortdaten verwendet werden:</b>
              </p>
              <li>Die Standortdaten werden ausschließlich verwendet, um nahegelegene Geschäfte anzuzeigen und die Funktionalität der App zu verbessern.</li>
              <li>Die Daten werden nicht an Dritte für Werbe- oder Marketingzwecke weitergegeben.</li>
              <p className="mb-1">
                <b>Benutzerkontrolle:</b>
              </p>
              <li>Sie können die Standortberechtigungen jederzeit über die Einstellungen Ihres Geräts verwalten oder widerrufen.</li>
              <li>Wenn Sie die Standortdienste deaktivieren, können Sie die App weiterhin verwenden, aber bestimmte Funktionen, wie das Auffinden nahegelegener Geschäfte, funktionieren möglicherweise nicht ordnungsgemäß.</li>
            </ul>
            <p className="mb-1 mt-2">Geschäftskunden</p>
            <span>Für Geschäftskunden wird die Adresse, die Sie bei der Registrierung eingeben, gespeichert und verwendet, um anderen Kunden die Suche nach Ihrem Geschäft zu ermöglichen.</span>
          </div>
        </div>

        <div>
          <h3 className="text-[22px] my-2 mt-4">2. Wie wir Ihre persönlichen Informationen verwenden</h3>
          <p>Wir verwenden Ihre persönlichen Informationen, um unsere Produkte und Dienstleistungen zu betreiben, bereitzustellen, zu entwickeln und zu verbessern. Dazu gehören:</p>
          <div className="">
            <ul className="list-disc ml-6">
              <li>Ermöglichung des Kaufs und der Lieferung von Produkten und Dienstleistungen.</li>
              <li>Bereitstellung, Fehlersuche und Verbesserung der Cetirc-Dienste.</li>
              <li>Personalisierung Ihrer Erfahrung und Abgabe von Empfehlungen.</li>
              <li>Einhaltung gesetzlicher Verpflichtungen.</li>
              <li>Kommunikation mit Ihnen über verschiedene Kanäle.</li>
              <li>Betrugsprävention und Verwaltung von Kreditrisiken.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 class="text-[22px] my-2 mt-4">3. Cookies und andere Kennungen</h3>
          <p>
            Wir verwenden Cookies und andere Kennungen, um Ihren Browser oder Ihr Gerät zu erkennen und die Cetirc-Dienste bereitzustellen und zu verbessern. Bitte lesen Sie unsere{' '}
            <Link href="/rechtlich/Nutzungsbedingungen" className="linkStyle">
              Nutzungsbedingungen
            </Link>{' '}
            für weitere Informationen über Cookies und andere Kennungen.
          </p>
        </div>

        <div>
          <h3 class="text-[22px] my-2 mt-4">4. Gibt Cetirc Ihre persönlichen Daten weiter?</h3>
          <p>
            Wir schätzen die Informationen unserer Kunden und verkaufen sie nicht. Wir können jedoch persönliche Kundendaten mit Tochtergesellschaften und ausgewählten Partnern, die wir mehrheitlich kontrollieren, und denen, auf die unsere Datenschutzerklärung zutrifft, wie unten beschrieben,
            teilen:
          </p>
          <div className="mt-6">
            <span>4.1. Transaktionen mit Dritten</span>
            <p>Die Dienstleistungen, Produkte, Software oder Partnerschaften, die wir Ihnen über Cetirc anbieten und die andere Dienstleistungen umfassen, stellen Transaktionen mit Dritten dar. Während solcher Transaktionen können wir relevante Kundendaten weitergeben.</p>
          </div>
          <div className="mt-4">
            <span>4.2. Drittanbieter-Dienstleister</span>
            <p>
              Wir beauftragen oder engagieren andere Unternehmen und Einzelpersonen, um Funktionen in unserem Namen auszuführen. Diese Unternehmen oder Einzelpersonen können Zugriff auf persönliche Kundendaten für diese Dienstleistungen haben. Sie dürfen diese jedoch nicht für andere Zwecke
              verwenden.
            </p>
          </div>
          <div className="mt-4">
            <span>4.3. Unternehmensübertragungen</span>
            <p>Im Falle eines Unternehmensverkaufs werden Kundendaten als Teil der Übernahme übertragen. Sie bleiben jedoch den in unserer bestehenden Datenschutzerklärung gemachten Versprechungen unterworfen.</p>
          </div>
          <div className="mt-4">
            <span>4.4. Rechtliche Gründe</span>
            <p>
              Wir geben Kontoinformationen und andere persönliche Daten weiter, wenn dies als angemessen erachtet wird und in Situationen, die dem Gesetz entsprechen, unsere{' '}
              <Link href="/rechtlich/Nutzungsbedingungen" className="linkStyle">
                Nutzungsbedingungen
              </Link>{' '}
              durchsetzen oder die Rechte, das Eigentum oder die Sicherheit von Cetirc oder unseren Nutzern schützen, unter anderem aus diesen Gründen.
            </p>
          </div>
        </div>

        <div>
          <h3 class="text-[22px] my-2 mt-4">5. Wie sicher sind Ihre Informationen?</h3>
          <p>
            Wir priorisieren und schätzen Ihre Sicherheit und Privatsphäre. Aus diesem Grund verwenden wir Verschlüsselungsprotokolle und -software, um Ihre persönlichen Daten während jeder Form der Übertragung zu schützen. Während dieser Verfahren halten wir industrielle physische und elektronische
            Sicherheitsmaßnahmen ein, um persönliche Kundendaten zu schützen.
          </p>
        </div>

        <div>
          <h3 class="text-[22px] my-2 mt-4">6. Werbung und Ihre Entscheidungen</h3>
          <p>
            Drittanbieter-Werbetreibende und andere Website- oder App-Links können Ihre persönlichen Daten erfassen, wenn Sie mit deren Plattform oder Inhalt interagieren. In diesem Fall haben wir keine Macht oder Einfluss darauf, wie diese Informationen gesammelt oder verteilt werden. Stellen Sie
            sicher, dass Sie deren Datenschutzerklärungen und Datenschutzbestimmungen lesen, bevor Sie fortfahren, einschließlich der Informationen, wie Sie sich von personalisierter Werbung abmelden können.
          </p>
        </div>

        <div>
          <h3 class="text-[22px] my-2 mt-4">7. Zugriff auf Ihre Informationen und Auswahlmöglichkeiten</h3>
          <p>
            Sie können über unsere Website in Ihrem Cetirc/Alice 1-Profil auf Ihre Informationen, einschließlich Ihres Namens, Ihrer Palm-ID, Adresse, Zahlungsmöglichkeiten und Profilinformationen, zugreifen. Sie können auch Ihre persönlichen Informationen und Kommunikationspräferenzen ändern und
            auswählen.
          </p>
        </div>

        <div>
          <h3 class="text-[22px] my-2 mt-4">8. Kinder und Cetirc-Dienste</h3>
          <p>
            Cetirc verkauft keine Produkte an Kinder. Wir verkaufen Kinderprodukte, die von Erwachsenen gekauft werden können. Sollten Sie unter 18 Jahre alt sein, dürfen Sie die Cetirc-Dienste nur mit Hilfe oder unter Beteiligung eines Elternteils oder Erziehungsberechtigten nutzen. Wir sammeln
            nicht wissentlich persönliche Informationen von Kindern unter 13 Jahren ohne elterliche Zustimmung.
          </p>
        </div>

        <div>
          <h3 class="text-[22px] my-2 mt-4">9. Änderungen dieser Datenschutzerklärung</h3>
          <p>
            Da sich unser Geschäft weiterentwickelt, ändert sich auch unsere Datenschutzerklärung. Stellen Sie sicher, dass Sie regelmäßig unsere Website besuchen, um die neuesten Änderungen zu sehen. Wir werden Sie immer im Abschnitt "Zuletzt aktualisiert" über das Datum der letzten Aktualisierung
            unserer Datenschutzerklärung informieren. Sofern nicht anders angegeben, gilt unsere aktuelle Datenschutzerklärung oder Mitteilung für alle Informationen, die wir über Sie und Ihr Konto haben.
          </p>
        </div>

        <div>
          <h3 class="text-[22px] my-2 mt-4">10. Kontakt und Beschwerden</h3>
          <p>
            Wenn Sie Bedenken oder Fragen zur Datenschutzerklärung von Cetirc oder dazu haben, wie wir Ihre persönlichen Daten verarbeiten, wenden Sie sich bitte an unseren Kundensupport unter{' '}
            <Link href="mailto:support@cetirc.com" class="linkStyle">
              support
            </Link>
            . Wir werden unser Bestes tun, um Ihre Anliegen so schnell wie möglich zu bearbeiten und zu lösen.
          </p>
        </div>
      </div>
    </div>
  );
}
