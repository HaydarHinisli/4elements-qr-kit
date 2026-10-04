/**
 * Content for the per-type landing pages (/wlan-qr-code, /visitenkarte-qr-code, ...).
 *
 * Each entry is a full, self-contained page: metadata, hero copy, steps and
 * type-specific FAQs. This is the site's main SEO surface, every page targets
 * one search intent ("wlan qr code erstellen", "google bewertung qr code", ...)
 * with the tool preselected to that type. Several pages share a code type (a
 * Google review, WhatsApp or menu code is a URL code), only the copy differs.
 * Copy must stay honest: the kit generates static codes locally in the
 * browser, free, no signup, no expiry, no tracking, and never claim more than that.
 */

export interface QrTypePage {
    /** URL segment, e.g. "wlan-qr-code". */
    slug: string;
    /** The code type the tool is preselected to. */
    type: CodeType;
    /** Short human name used in cross-links ("WLAN", "Visitenkarte", ...). */
    name: string;
    /** Shown prominently on the homepage ("Beliebt bei lokalen Betrieben"). */
    featured?: boolean;
    /** One-line teaser for the homepage cards. */
    teaser: string;
    /** <title>, keyword first, brand last. */
    title: string;
    /** Meta description, ~150-160 chars. */
    description: string;
    /** Visible h1. */
    h1: string;
    /** Hero paragraph under the h1. */
    intro: string;
    /** "How to" steps, type-specific. */
    steps: [string, string, string];
    /** Type-specific FAQs (also emitted as FAQPage JSON-LD). */
    faqs: { question: string; answer: string }[];
}

export const QR_TYPE_PAGES: QrTypePage[] = [
    {
        slug: "google-bewertung-qr-code",
        type: "url",
        name: "Google-Bewertung",
        featured: true,
        teaser: "Kunden landen mit einem Scan direkt im Bewertungsformular Ihres Google-Profils.",
        title: "Google-Bewertung QR-Code erstellen: kostenlos | 4ELEMENTS QR Kit",
        description:
            "Erstellen Sie kostenlos einen QR-Code, der direkt zu Ihrem Google-Bewertungsformular führt. Ideal für Theke, Kasse und Rechnung. Ohne Anmeldung, läuft nie ab.",
        h1: "QR-Code für Google-Bewertungen",
        intro: "Zufriedene Kunden bewerten gern, wenn es schnell geht. Ein Scan an der Theke, auf dem Tisch oder auf der Rechnung öffnet direkt das Bewertungsformular Ihres Google-Unternehmensprofils, ohne Suchen und ohne Umwege. Perfekt für Gyms, Cafés, Friseure und Praxen.",
        steps: [
            "Öffnen Sie Ihr Google-Unternehmensprofil, wählen Sie „Nach Rezensionen fragen“ und kopieren Sie den Link.",
            "Fügen Sie den Link oben im Feld „Link“ ein und gestalten Sie den Code mit Ihren Farben und Ihrem Logo.",
            "Laden Sie den Code herunter und platzieren Sie ihn dort, wo Kunden zufrieden sind: an Kasse, Empfang oder Tisch.",
        ],
        faqs: [
            {
                question: "Wo finde ich meinen Google-Bewertungslink?",
                answer: "In Ihrem Google-Unternehmensprofil (über die Google-Suche oder Google Maps, während Sie angemeldet sind) unter „Nach Rezensionen fragen“ bzw. „Rezensionsformular teilen“. Der Link sieht meist so aus: g.page/r/…/review.",
            },
            {
                question: "Darf ich Kunden um eine Bewertung bitten?",
                answer: "Ja, das Bitten um ehrliche Bewertungen ist erlaubt. Nicht erlaubt sind Gegenleistungen für Bewertungen oder das gezielte Filtern nach nur positiven Stimmen, das verstößt gegen die Google-Richtlinien.",
            },
            {
                question: "Funktioniert der Code auch, wenn ich mein Profil ändere?",
                answer: "Solange der Bewertungslink gleich bleibt, ja. Der Link steckt direkt im Code, es gibt keine Weiterleitung, die abgeschaltet werden könnte.",
            },
        ],
    },
    {
        slug: "whatsapp-qr-code",
        type: "url",
        name: "WhatsApp",
        featured: true,
        teaser: "Ein Scan öffnet einen WhatsApp-Chat mit Ihrem Betrieb, ideal für Terminanfragen.",
        title: "WhatsApp QR-Code erstellen: Chat per Scan | 4ELEMENTS QR Kit",
        description:
            "Erstellen Sie einen QR-Code, der direkt einen WhatsApp-Chat mit Ihrem Betrieb öffnet. Für Terminanfragen, Bestellungen und Rückfragen. Kostenlos, ohne Anmeldung.",
        h1: "WhatsApp QR-Code",
        intro: "Viele Kunden schreiben lieber, als anzurufen. Mit einem WhatsApp-Code öffnet ein Scan sofort einen Chat mit Ihrer Geschäftsnummer, auf Wunsch mit vorformulierter Nachricht. Ideal für Terminanfragen beim Friseur, Probetrainings im Gym oder Vorbestellungen im Café.",
        steps: [
            "Bauen Sie Ihren Link: wa.me/ gefolgt von Ihrer Nummer im internationalen Format ohne + und ohne führende 0, z. B. wa.me/4915112345678.",
            "Optional eine Nachricht anhängen, z. B. wa.me/4915112345678?text=Hallo%20ich%20brauche%20einen%20Termin, und den Link oben im Feld „Link“ einfügen.",
            "Code gestalten, herunterladen und auf Flyer, Schaufenster oder Visitenkarte drucken.",
        ],
        faqs: [
            {
                question: "Brauche ich WhatsApp Business?",
                answer: "Nein, der Link funktioniert mit jeder WhatsApp-Nummer. WhatsApp Business bietet aber praktische Extras wie Abwesenheitsnachrichten und Geschäftszeiten.",
            },
            {
                question: "In welchem Format muss die Nummer stehen?",
                answer: "International ohne Pluszeichen, Leerzeichen und führende Null: Aus 0151 123 456 78 wird 4915112345678.",
            },
            {
                question: "Wird die Nachricht automatisch gesendet?",
                answer: "Nein. Der Scan öffnet nur den Chat mit dem vorausgefüllten Text, Ihr Kunde entscheidet selbst, ob er auf Senden tippt.",
            },
        ],
    },
    {
        slug: "speisekarte-qr-code",
        type: "url",
        name: "Speisekarte",
        featured: true,
        teaser: "Gäste öffnen Ihre Speise- oder Preisliste direkt am Tisch oder im Schaufenster.",
        title: "Speisekarte QR-Code erstellen: Menü per Scan | 4ELEMENTS QR Kit",
        description:
            "Erstellen Sie einen QR-Code für Ihre digitale Speisekarte, Preisliste oder Ihr Kursangebot. Für Tischaufsteller und Schaufenster. Kostenlos, ohne Wasserzeichen.",
        h1: "QR-Code für Speisekarte und Preisliste",
        intro: "Ob Speisekarte im Café, Preisliste im Salon oder Kursplan im Gym: Legen Sie die Karte als Webseite oder PDF online ab und verlinken Sie sie per QR-Code. Gäste scannen am Tisch, Sie sparen Druckkosten und können die Karte jederzeit online aktualisieren, solange der Link gleich bleibt.",
        steps: [
            "Laden Sie Ihre Karte als Webseite oder PDF hoch (z. B. auf Ihre Website) und kopieren Sie den Link.",
            "Fügen Sie den Link oben im Feld „Link“ ein und passen Sie Farben und Logo an Ihr Lokal an.",
            "Drucken Sie den Code auf Tischaufsteller, Fensteraufkleber oder Flyer.",
        ],
        faqs: [
            {
                question: "Kann ich die Karte ändern, ohne den Code neu zu drucken?",
                answer: "Ja, wenn Sie die Datei bzw. Seite unter derselben Adresse austauschen. Der Code speichert nur den Link, nicht den Inhalt der Karte.",
            },
            {
                question: "PDF oder Webseite, was ist besser?",
                answer: "Eine Webseite lädt auf dem Handy meist schneller und ist besser lesbar. Ein PDF ist schnell gemacht, sollte aber klein und für Smartphones gut lesbar sein.",
            },
        ],
    },
    {
        slug: "wlan-qr-code",
        type: "wifi",
        name: "WLAN",
        featured: true,
        teaser: "Gäste verbinden sich mit einem Scan, ohne das Passwort abzutippen.",
        title: "WLAN QR-Code erstellen: kostenlos, ohne Anmeldung | 4ELEMENTS QR Kit",
        description:
            "Erstellen Sie kostenlos einen WLAN-QR-Code, mit dem sich Gäste per Scan verbinden, ohne Passwort-Abtippen. Unterstützt WPA/WPA2, WEP, offene und versteckte Netzwerke.",
        h1: "WLAN QR-Code erstellen",
        intro: "Schluss mit dem Buchstabieren des WLAN-Passworts: Gäste im Café, Kunden im Wartezimmer oder Mitglieder im Gym verbinden sich mit einem Scan. Netzwerkname und Passwort eingeben, und der Code wird von Smartphones direkt erkannt: Kamera drauf, tippen, verbunden. Funktioniert mit WPA/WPA2, WEP, offenen und versteckten Netzwerken.",
        steps: [
            "Geben Sie den Netzwerknamen (SSID) ein, wählen Sie die Verschlüsselung und tragen Sie das Passwort ein.",
            "Gestalten Sie den Code mit Farben, Formen oder Ihrem Logo in der Mitte.",
            "Laden Sie ihn als SVG oder PNG herunter und hängen Sie ihn gut sichtbar auf.",
        ],
        faqs: [
            {
                question: "Wie funktioniert ein WLAN-QR-Code?",
                answer: "Der Code enthält Netzwerkname, Verschlüsselung und Passwort im Standardformat WIFI:. Die Kamera von iPhones (ab iOS 11) und Android-Geräten (ab Android 10) erkennt ihn ohne Zusatz-App und bietet die Verbindung an.",
            },
            {
                question: "Ist es sicher, das WLAN-Passwort in einen QR-Code zu packen?",
                answer: "Das Passwort steckt im Code und ist für jeden lesbar, der ihn scannt. Behandeln Sie den Code also wie ein ausgehängtes Passwort, am besten nutzen Sie ein separates Gäste-WLAN. Der Code wird komplett in Ihrem Browser erzeugt, Ihre Zugangsdaten werden nirgendwohin hochgeladen.",
            },
            {
                question: "Funktioniert das auch mit versteckten Netzwerken?",
                answer: "Ja, aktivieren Sie den Schalter „Verstecktes Netzwerk“, dann verbinden sich Geräte auch ohne sichtbare SSID.",
            },
            {
                question: "Was passiert, wenn ich das WLAN-Passwort ändere?",
                answer: "Der Code ist statisch und enthält weiter das alte Passwort. Erstellen Sie einfach einen neuen Code, das dauert Sekunden und bleibt kostenlos.",
            },
        ],
    },
    {
        slug: "visitenkarte-qr-code",
        type: "contact",
        name: "Visitenkarte",
        featured: true,
        teaser: "Ein Scan speichert Name, Telefon, E-Mail und Website direkt in den Kontakten.",
        title: "Visitenkarte QR-Code (vCard) erstellen | 4ELEMENTS QR Kit",
        description:
            "Machen Sie Ihre Kontaktdaten zum QR-Code: Ein Scan speichert Name, Telefon, E-Mail und Firma direkt im Adressbuch. Digitale Visitenkarte, kostenlos, ohne Anmeldung.",
        h1: "Digitale Visitenkarte als QR-Code",
        intro: "Bringen Sie Ihre Kontaktdaten auf Visitenkarte, Flyer oder Empfangstresen, als einen einzigen scanbaren Code. Er enthält eine Standard-vCard mit Name, Firma, Position, Telefon, E-Mail und Website, die iPhones und Android-Handys direkt unter „Kontakt hinzufügen“ öffnen.",
        steps: [
            "Füllen Sie die Kontaktfelder aus, die Sie teilen möchten, leere Felder werden einfach weggelassen.",
            "Passen Sie den Code mit eigenen Farben, Formen und Logo an Ihre Marke an.",
            "Exportieren Sie ein scharfes SVG für den Druck oder ein PNG für E-Mail-Signatur und Präsentationen.",
        ],
        faqs: [
            {
                question: "Welche Daten passen in einen vCard-QR-Code?",
                answer: "Vor- und Nachname, Firma, Position, Telefonnummer, E-Mail-Adresse und Website. Sie werden als Standard-vCard 3.0 gespeichert, die iOS und Android ohne Zusatz-App lesen.",
            },
            {
                question: "Warum sieht mein Visitenkarten-Code so dicht aus?",
                answer: "Eine vCard enthält mehr Text als ein kurzer Link, deshalb braucht der Code ein feineres Raster. Halten Sie die Felder knapp und testen Sie den Scan bei kleinem Druck aus der echten Entfernung, oder erhöhen Sie die Fehlerkorrektur.",
            },
            {
                question: "Kann ich meine Daten nach dem Druck noch ändern?",
                answer: "Nein, die Daten stecken direkt im Code. Dafür laden sie sofort und hängen von keinem fremden Server ab. Ändert sich etwas, erstellen Sie für die nächste Auflage einfach einen neuen Code.",
            },
        ],
    },
    {
        slug: "link-qr-code",
        type: "url",
        name: "Link",
        teaser: "Führt mit einem Scan auf Ihre Website, Ihren Online-Shop oder Ihre Buchungsseite.",
        title: "Link QR-Code erstellen: zu jeder Website | 4ELEMENTS QR Kit",
        description:
            "Erstellen Sie kostenlos einen QR-Code für jeden Link, etwa Ihre Buchungsseite. Eigene Farben, Formen und Logo, Export als SVG oder PNG. Ohne Wasserzeichen, läuft nie ab.",
        h1: "Link QR-Code erstellen",
        intro: "Bringen Sie Kunden vom Flyer direkt auf Ihre Website, Ihre Online-Terminbuchung oder Ihren Instagram-Account. Link einfügen, https:// wird automatisch ergänzt, Code gestalten und in Druckqualität herunterladen. Der Link steckt direkt im Code, ohne Weiterleitungsdienst, der ablaufen könnte.",
        steps: [
            "Fügen Sie die Adresse ein, das https:// wird automatisch ergänzt.",
            "Wählen Sie Farben, Modulformen und Eckenstil oder fügen Sie Ihr Logo ein.",
            "Laden Sie den Code als SVG für den Druck oder als PNG/JPEG bis 4096 px herunter.",
        ],
        faqs: [
            {
                question: "Sollte ich meinen Link vorher kürzen?",
                answer: "Es hilft: Kürzere Links ergeben einfachere Codes, die auch klein gedruckt zuverlässig scannen. Funktionieren tut aber jede Länge bis etwa 2.900 Zeichen, das Raster wird nur dichter.",
            },
            {
                question: "Hört mein QR-Code irgendwann auf zu funktionieren?",
                answer: "Der Code selbst läuft nie ab, der Link ist direkt gespeichert, ohne Weiterleitungsdienst. Er funktioniert, solange Ihre Website online ist.",
            },
            {
                question: "Kann ich den Link nach dem Druck ändern?",
                answer: "Nein. Statische Codes sind dafür zuverlässig und datensparsam: kein Tracking, kein Zwischenanbieter, keine Gebühren. Ändert sich das Ziel, erstellen Sie einen neuen Code.",
            },
        ],
    },
    {
        slug: "telefon-qr-code",
        type: "phone",
        name: "Telefon",
        teaser: "Ein Scan zeigt Ihre Nummer zum direkten Anrufen an.",
        title: "Telefon QR-Code erstellen: Anruf per Scan | 4ELEMENTS QR Kit",
        description:
            "Erstellen Sie einen QR-Code, der Ihre Telefonnummer mit einem Scan zum Anrufen bereitstellt. Für Schaufenster, Firmenwagen und Visitenkarten. Kostenlos, läuft nie ab.",
        h1: "Telefon QR-Code erstellen",
        intro: "Kein Abtippen mehr: Ein Scan zeigt Ihre Telefonnummer direkt zum Anrufen an. Ideal fürs Schaufenster, den Firmenwagen oder den Flyer, damit aus einem Blick ein Anruf wird.",
        steps: [
            "Geben Sie Ihre Telefonnummer ein, am sichersten im internationalen Format.",
            "Fügen Sie Farben oder Logo hinzu, damit der Code zu Ihrer Marke passt.",
            "Laden Sie ihn druckfertig als SVG oder als PNG bis 4096 px herunter.",
        ],
        faqs: [
            {
                question: "Startet der Anruf sofort beim Scannen?",
                answer: "Nein, das Handy zeigt die Nummer an und fragt nach, damit niemand versehentlich anruft.",
            },
            {
                question: "In welchem Format sollte die Nummer stehen?",
                answer: "International mit Ländervorwahl, z. B. +49 30 1234567. So funktioniert sie für alle Anrufer.",
            },
        ],
    },
    {
        slug: "e-mail-qr-code",
        type: "email",
        name: "E-Mail",
        teaser: "Öffnet eine vorausgefüllte E-Mail mit Empfänger, Betreff und Text.",
        title: "E-Mail QR-Code erstellen: vorausgefüllte Nachricht | 4ELEMENTS QR Kit",
        description:
            "Erstellen Sie einen QR-Code, der eine vorausgefüllte E-Mail öffnet: Empfänger, Betreff und Nachricht sind schon eingetragen. Kostenlos, mit jeder Mail-App.",
        h1: "E-Mail QR-Code erstellen",
        intro: "Ein Scan öffnet die Mail-App mit Empfänger, Betreff und Nachricht, alles schon ausgefüllt. Ideal für Feedback, Rückrufbitten oder Anfragen, Ihr Kunde muss nur noch auf Senden tippen.",
        steps: [
            "Geben Sie die Empfängeradresse ein und optional Betreff und Nachricht.",
            "Passen Sie das Aussehen an Ihre Unterlagen an.",
            "Herunterladen und auf Plakate, Kassenbons oder Verpackungen bringen.",
        ],
        faqs: [
            {
                question: "Wie funktioniert ein E-Mail-QR-Code?",
                answer: "Er enthält einen Standard-mailto:-Link mit Empfänger, Betreff und Text. Der Scan öffnet die Standard-Mail-App mit allem vorausgefüllt, gesendet wird erst nach Bestätigung.",
            },
            {
                question: "Kann ich Betreff und Nachricht vorausfüllen?",
                answer: "Ja, beide Felder sind optional. Was Sie leer lassen, wird einfach weggelassen.",
            },
        ],
    },
    {
        slug: "sms-qr-code",
        type: "sms",
        name: "SMS",
        teaser: "Öffnet eine SMS mit Ihrer Nummer und vorausgefülltem Text.",
        title: "SMS QR-Code erstellen: vorausgefüllte Nachricht | 4ELEMENTS QR Kit",
        description:
            "Erstellen Sie einen QR-Code, der eine SMS mit Nummer und Nachricht öffnet. Praktisch für Rückrufbitten und Aktionen. Kostenlos und unbegrenzt.",
        h1: "SMS QR-Code erstellen",
        intro: "Der Scan öffnet die Nachrichten-App mit Ihrer Nummer und einem vorformulierten Text. Ideal für Aktionen, Gewinnspiele oder schnelle Kontaktaufnahme, Ihr Kunde tippt nur noch auf Senden.",
        steps: [
            "Geben Sie die Zielnummer und optional eine vorausgefüllte Nachricht ein.",
            "Gestalten Sie den Code so, dass er auf Ihrem Material auffällt.",
            "Herunterladen und vor dem großen Druck einmal testweise scannen.",
        ],
        faqs: [
            {
                question: "Wird die Nachricht beim Scannen automatisch gesendet?",
                answer: "Nein, der Scan öffnet nur die Nachrichten-App mit Nummer und Text. Gesendet wird erst, wenn der Nutzer selbst auf Senden tippt.",
            },
            {
                question: "Welches Nummernformat sollte ich verwenden?",
                answer: "Das internationale Format mit Plus und Ländervorwahl (z. B. +49 151 12345678), damit der Code überall funktioniert.",
            },
        ],
    },
    {
        slug: "standort-qr-code",
        type: "geolocation",
        name: "Standort",
        teaser: "Öffnet Ihren genauen Standort in der Karten-App, ideal für Anfahrt und Parkplatz.",
        title: "Standort QR-Code erstellen: GPS-Koordinaten | 4ELEMENTS QR Kit",
        description:
            "Erstellen Sie einen QR-Code, der Ihren genauen Standort in der Karten-App öffnet. Ideal für Eingang, Parkplatz und Veranstaltungen. Kostenlos und unbegrenzt.",
        h1: "Standort QR-Code erstellen",
        intro: "Führen Sie Kunden zu einem genauen Punkt, nicht nur zu einer Adresse: zum Hintereingang der Praxis, zum Kundenparkplatz oder zum Treffpunkt fürs Outdoor-Training. Der Code enthält GPS-Koordinaten, die sich direkt in der Karten-App öffnen.",
        steps: [
            "Geben Sie Breiten- und Längengrad ein (aus jeder Karten-App kopierbar).",
            "Gestalten Sie den Code passend zu Ihrer Beschilderung.",
            "Herunterladen, drucken und dort anbringen, wo Kunden den Weg brauchen.",
        ],
        faqs: [
            {
                question: "Wie finde ich die Koordinaten meines Standorts?",
                answer: "In Google Maps oder Apple Karten lange auf den Punkt tippen, dann erscheinen Breiten- und Längengrad. Kopieren Sie sie in die beiden Felder.",
            },
            {
                question: "Welche Karten-App öffnet sich beim Scannen?",
                answer: "Der Code nutzt das Standardformat geo:, daher öffnet sich die Standard-Karten-App: Apple Karten auf dem iPhone, Google Maps auf den meisten Android-Geräten.",
            },
        ],
    },
    {
        slug: "termin-qr-code",
        type: "calendar",
        name: "Termin",
        teaser: "Speichert Ihren Termin oder Ihre Veranstaltung direkt im Kalender.",
        title: "Termin QR-Code erstellen: direkt in den Kalender | 4ELEMENTS QR Kit",
        description:
            "Erstellen Sie einen QR-Code, der Ihre Veranstaltung mit Titel, Ort, Beginn und Ende in den Kalender einträgt. Kostenlos, ohne Anmeldung, ohne Ablaufdatum.",
        h1: "Termin QR-Code erstellen",
        intro: "Aus Plakaten und Einladungen werden Kalendereinträge: Tag der offenen Tür, Kurs-Start im Gym oder Sommerfest im Café. Der Code enthält Titel, Ort, Beginn und Ende im iCalendar-Format, ein Scan und der Termin ist gespeichert.",
        steps: [
            "Geben Sie Titel, Ort, Beginn, Ende und optional eine Beschreibung ein.",
            "Gestalten Sie den Code für Plakat oder Einladung.",
            "Herunterladen und in gedruckte und digitale Unterlagen einbauen.",
        ],
        faqs: [
            {
                question: "Welche Kalender-Apps unterstützen Termin-QR-Codes?",
                answer: "Der Code nutzt das Standardformat iCalendar (VEVENT). Die meisten Handys öffnen ihn im Standardkalender, die Unterstützung variiert leicht je nach Gerät, testen Sie vor dem Druck also auf iOS und Android.",
            },
            {
                question: "Kann ich den Termin nach dem Erstellen ändern?",
                answer: "Die Termindaten stecken im Code, ein gedruckter Code behält also die ursprünglichen Daten. Ändert sich etwas, erstellen Sie einfach einen neuen Code, kostenlos und sofort.",
            },
        ],
    },
    {
        slug: "text-qr-code",
        type: "text",
        name: "Text",
        teaser: "Zeigt eine beliebige Nachricht an, auch ganz ohne Internet.",
        title: "Text QR-Code erstellen: beliebige Nachricht | 4ELEMENTS QR Kit",
        description:
            "Verpacken Sie beliebigen Text in einen QR-Code, der beim Scannen sofort erscheint, ganz ohne Internet. Kostenlos, unbegrenzt, anpassbar und ohne Ablaufdatum.",
        h1: "Text QR-Code erstellen",
        intro: "Packen Sie eine einfache Nachricht in einen QR-Code: eine Anleitung, einen Gutscheincode, eine Notiz. Der Text steckt im Code selbst und erscheint sofort beim Scannen, auch ohne Internetverbindung.",
        steps: [
            "Tippen oder fügen Sie Ihren Text in das Inhaltsfeld ein.",
            "Erhöhen Sie die Fehlerkorrektur, wenn der Code klein gedruckt wird oder verkratzen könnte.",
            "Gestalten und als SVG, PNG oder JPEG herunterladen.",
        ],
        faqs: [
            {
                question: "Wie viel Text passt in einen QR-Code?",
                answer: "Bis zu etwa 2.900 Zeichen bei der niedrigsten Fehlerkorrektur. In der Praxis lieber unter ein paar hundert Zeichen bleiben, kürzerer Text ergibt ein gröberes Raster, das schneller scannt.",
            },
            {
                question: "Braucht man zum Scannen Internet?",
                answer: "Nein. Der Text steckt im Code und erscheint sofort auf jedem Handy, komplett offline.",
            },
        ],
    },
];

export const FEATURED_QR_TYPE_PAGES = QR_TYPE_PAGES.filter((page) => page.featured);

export const QR_TYPE_PAGE_BY_SLUG = new Map(QR_TYPE_PAGES.map((page) => [page.slug, page]));

