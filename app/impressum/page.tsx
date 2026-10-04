import { LegalPage } from "@/components/layout/legal-page";
import { COMPANY, SITE_NAME } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `Impressum | ${SITE_NAME}`,
    alternates: { canonical: "/impressum" },
};

// Placeholder: have the final legal notice reviewed (e.g. phone number, VAT ID) before going live.
export default function ImpressumPage() {
    return (
        <LegalPage title="Impressum">
            <section>
                <h2>Angaben gemäß § 5 DDG</h2>
                <p>
                    {COMPANY.name}
                    <br />
                    Inhaber: {COMPANY.owner}
                    <br />
                    {COMPANY.street}
                    <br />
                    {COMPANY.postalCode} {COMPANY.city}
                </p>
            </section>

            <section>
                <h2>Kontakt</h2>
                <p>
                    E-Mail: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </p>
            </section>

            <section>
                <h2>Registereintrag</h2>
                <p>
                    Registergericht: {COMPANY.registerCourt}
                    <br />
                    Registernummer: {COMPANY.registerNumber}
                </p>
            </section>
        </LegalPage>
    );
}
