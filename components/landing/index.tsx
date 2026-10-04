import { FEATURED_QR_TYPE_PAGES, QR_TYPE_PAGES, type QrTypePage } from "@/lib/qr-pages";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { Separator } from "@/components/ui/separator";
import type { Icon } from "@phosphor-icons/react";
import {
    AddressBookIcon,
    ForkKnifeIcon,
    StarIcon,
    WhatsappLogoIcon,
    WifiHighIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

/*
 * Landing content rendered below the generator. Pure server components, no
 * client JS, so this is fast, fully crawlable text: the page's h1, feature
 * copy, how-to steps, FAQs (with matching JSON-LD) and internal links between
 * the per-type landing pages.
 */

export interface Faq {
    question: string;
    answer: string;
}

export const HOME_FAQS: Faq[] = [
    {
        question: "Ist das 4ELEMENTS QR Kit wirklich kostenlos?",
        answer: "Ja, alle Funktionen sind kostenlos: unbegrenzt viele QR-Codes, volle Gestaltung, Logo und hochauflösende Downloads. Kein Konto, kein Wasserzeichen, kein Bezahl-Tarif.",
    },
    {
        question: "Laufen die QR-Codes ab?",
        answer: "Nein. Es entstehen statische QR-Codes: Ihr Inhalt steckt direkt im Muster, ohne Weiterleitungsdienst dazwischen. Der Code funktioniert dauerhaft und beliebig oft.",
    },
    {
        question: "Was ist mit meinen Daten?",
        answer: "Die Codes werden komplett in Ihrem Browser erzeugt. Texte, WLAN-Passwörter oder Kontaktdaten, die Sie eingeben, werden nicht an einen Server übertragen.",
    },
    {
        question: "Werden Scans gezählt?",
        answer: "Nein. Weil der Inhalt direkt im Code steckt und es keine Weiterleitung gibt, kann nichts mitgezählt werden, das ist Absicht. Wer Scan-Statistiken braucht, ist mit einem statischen Code falsch beraten; dafür bekommen Sie Datenschutz und Beständigkeit.",
    },
    {
        question: "Kann ich mein Logo in den QR-Code einfügen?",
        answer: "Ja. Laden Sie ein Bild hoch, passen Sie Größe und Deckkraft an und lassen Sie die Module dahinter optional aussparen, damit es gut lesbar bleibt. Wählen Sie dann eine höhere Fehlerkorrektur, damit der Code sicher scannbar bleibt.",
    },
    {
        question: "Welche Dateiformate kann ich herunterladen?",
        answer: "SVG für gestochen scharfen Druck in jeder Größe, außerdem PNG und JPEG mit 512, 1024, 2048 oder 4096 Pixeln für Bildschirm und Dokumente.",
    },
    {
        question: "Was bedeutet Fehlerkorrektur?",
        answer: "QR-Codes enthalten Redundanz, damit sie auch teilweise beschädigt oder verdeckt noch scannen. Die vier Stufen L, M, Q und H stellen etwa 7 %, 15 %, 25 % und 30 % des Codes wieder her. Höhere Stufen machen den Code dichter; mit Logo empfiehlt sich Q oder H.",
    },
    {
        question: "Wie viele Daten passen in einen QR-Code?",
        answer: "Bis zu etwa 2.900 Zeichen bei der niedrigsten Fehlerkorrektur. Kürzere Inhalte ergeben ein gröberes Raster, das schneller scannt, also lieber knapp halten.",
    },
];

const FEATURES: { title: string; body: string }[] = [
    {
        title: "Kostenlos, ohne Anmeldung",
        body: "Unbegrenzt viele Codes mit allen Funktionen. Kein Konto, kein Wasserzeichen, keine Testphase, die abläuft.",
    },
    {
        title: "Datensparsam",
        body: "Alles läuft in Ihrem Browser. WLAN-Passwörter, Kontakte, Links: Nichts davon wird hochgeladen.",
    },
    {
        title: "Läuft nie ab",
        body: "Statische Codes speichern den Inhalt direkt, ohne Weiterleitungsserver und ohne Scan-Limit. Einmal drucken, dauerhaft nutzen.",
    },
    {
        title: "Im Look Ihres Betriebs",
        body: "Zwölf Modulformen, eigene Eckenmuster, beliebige Farben, transparenter Hintergrund. So passt der Code zu Ihrer Marke.",
    },
    {
        title: "Mit Ihrem Logo",
        body: "Setzen Sie Ihr Logo in die Mitte, passen Sie Größe und Deckkraft an und sparen Sie die Module dahinter für klaren Kontrast aus.",
    },
    {
        title: "Druckfertig",
        body: "SVG für scharfen Druck auf Tischaufsteller, Flyer und Schaufenster, oder PNG/JPEG bis 4096 px für Bildschirm und Social Media.",
    },
];

const FEATURED_ICONS: Record<string, Icon> = {
    "google-bewertung-qr-code": StarIcon,
    "whatsapp-qr-code": WhatsappLogoIcon,
    "speisekarte-qr-code": ForkKnifeIcon,
    "wlan-qr-code": WifiHighIcon,
    "visitenkarte-qr-code": AddressBookIcon,
};

function JsonLd({ data }: { data: object }) {
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function faqJsonLd(faqs: Faq[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
    };
}

function Section({ id, title, children }: React.PropsWithChildren<{ id: string; title: string }>) {
    return (
        <section id={id} className="mx-auto w-full max-w-5xl px-6 py-14">
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <div className="mt-6">{children}</div>
        </section>
    );
}

function Hero({ h1, intro }: { h1: string; intro: string }) {
    return (
        <section className="mx-auto w-full max-w-5xl px-6 pt-20 pb-6">
            <h1 className="text-4xl font-semibold tracking-tight text-balance">{h1}</h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground text-pretty">{intro}</p>
        </section>
    );
}

function FeaturedTypes() {
    return (
        <Section id="beliebt" title="Beliebt bei lokalen Betrieben">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {FEATURED_QR_TYPE_PAGES.map((page) => {
                    const Icon = FEATURED_ICONS[page.slug];

                    return (
                        <Link
                            key={page.slug}
                            href={`/${page.slug}`}
                            className="flex flex-col rounded-2xl border p-5 transition-colors hover:bg-muted/50"
                        >
                            {Icon && <Icon size={28} aria-hidden />}
                            <h3 className="mt-3 font-medium">{page.name}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{page.teaser}</p>
                        </Link>
                    );
                })}
            </div>
        </Section>
    );
}

function FeatureGrid() {
    return (
        <Section id="vorteile" title={`Warum das ${SITE_NAME}?`}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {FEATURES.map((feature) => (
                    <div key={feature.title} className="rounded-2xl border p-5">
                        <h3 className="font-medium">{feature.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{feature.body}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

function Steps({ title, steps }: { title: string; steps: readonly string[] }) {
    return (
        <Section id="so-gehts" title={title}>
            <ol className="grid gap-4 sm:grid-cols-3">
                {steps.map((step, index) => (
                    <li key={step} className="rounded-2xl border p-5">
                        <span className="font-mono text-sm text-muted-foreground">{index + 1}</span>
                        <p className="mt-2 text-sm">{step}</p>
                    </li>
                ))}
            </ol>
        </Section>
    );
}

function TypeGrid({ current }: { current?: QrTypePage }) {
    // The homepage already shows the featured types prominently above.
    const pages = QR_TYPE_PAGES.filter((page) => (current ? page.slug !== current.slug : !page.featured));

    return (
        <Section id="typen" title={current ? "Weitere QR-Code-Typen" : "Noch mehr QR-Code-Typen"}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pages.map((page) => (
                    <Link
                        key={page.slug}
                        href={`/${page.slug}`}
                        className="rounded-2xl border p-5 transition-colors hover:bg-muted/50"
                    >
                        <h3 className="font-medium">{page.h1}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{page.teaser}</p>
                    </Link>
                ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
                Der Generator kann außerdem Kryptowährungs-Adressen und Rohdaten codieren. Dafür{" "}
                {current ? (
                    <Link href="/" className="underline underline-offset-3 hover:text-foreground">
                        öffnen Sie den vollständigen QR-Code-Generator
                    </Link>
                ) : (
                    "wählen Sie oben einfach den passenden Typ"
                )}
                .
            </p>
        </Section>
    );
}

function FaqSection({ faqs }: { faqs: Faq[] }) {
    return (
        <Section id="faq" title="Häufige Fragen">
            <div className="flex flex-col">
                {faqs.map((faq) => (
                    <details key={faq.question} className="group border-b py-4">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                            {faq.question}
                            <span aria-hidden className="text-muted-foreground transition-transform group-open:rotate-45">
                                +
                            </span>
                        </summary>
                        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </Section>
    );
}

/** Landing content for the homepage. */
export function HomeLanding() {
    return (
        <>
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    name: SITE_NAME,
                    url: SITE_URL,
                    inLanguage: "de",
                    applicationCategory: "UtilitiesApplication",
                    operatingSystem: "Any",
                    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
                    description:
                        "Kostenloser QR-Code-Generator für lokale Betriebe mit eigenen Farben, Formen und Logo. Läuft komplett im Browser, ohne Anmeldung, Codes laufen nie ab.",
                    featureList: FEATURES.map((feature) => feature.title),
                    author: { "@type": "Organization", name: "4ELEMENTS", url: SITE_URL },
                }}
            />
            <JsonLd data={faqJsonLd(HOME_FAQS)} />

            <Separator orientation="horizontal" />
            <Hero
                h1="QR-Codes für Gyms, Cafés, Friseure und Praxen"
                intro="Erstellen Sie in Sekunden QR-Codes für Ihren Betrieb: für Google-Bewertungen, WhatsApp-Kontakt, Speisekarte, Gäste-WLAN oder Ihre digitale Visitenkarte. Mit Ihren Farben und Ihrem Logo, druckfertig zum Herunterladen. Ohne Anmeldung, ohne Wasserzeichen, ohne Ablaufdatum. Alles läuft in Ihrem Browser, Ihre Eingaben bleiben auf Ihrem Gerät."
            />
            <FeaturedTypes />
            <Steps
                title="So erstellen Sie Ihren QR-Code"
                steps={[
                    "Typ wählen, etwa Link für Google-Bewertung, WhatsApp oder Speisekarte, WLAN oder Visitenkarte, und die Angaben eintragen.",
                    "Gestalten: Farben, Modulformen, Eckenmuster, Hintergrund oder Ihr Logo.",
                    "Als SVG, PNG oder JPEG herunterladen oder einen Link kopieren, der Ihr Design speichert.",
                ]}
            />
            <FeatureGrid />
            <TypeGrid />
            <FaqSection faqs={HOME_FAQS} />
        </>
    );
}

/** Landing content for a per-type page. */
export function TypeLanding({ page }: { page: QrTypePage }) {
    return (
        <>
            <JsonLd data={faqJsonLd(page.faqs)} />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        { "@type": "ListItem", position: 1, name: SITE_NAME, item: SITE_URL },
                        { "@type": "ListItem", position: 2, name: page.h1, item: `${SITE_URL}/${page.slug}` },
                    ],
                }}
            />

            <Separator orientation="horizontal" />
            <Hero h1={page.h1} intro={page.intro} />
            <Steps title={`So erstellen Sie einen ${page.name}-QR-Code`} steps={page.steps} />
            <FaqSection faqs={page.faqs} />
            <FeatureGrid />
            <TypeGrid current={page} />
        </>
    );
}
