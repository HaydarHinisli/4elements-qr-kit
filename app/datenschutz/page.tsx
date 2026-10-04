import { LegalPage } from "@/components/layout/legal-page";
import { COMPANY, SITE_NAME } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `Datenschutzerklärung | ${SITE_NAME}`,
    alternates: { canonical: "/datenschutz" },
};

// Placeholder until the final privacy policy text is supplied.
export default function DatenschutzPage() {
    return (
        <LegalPage title="Datenschutzerklärung">
            <p className="rounded-2xl border border-dashed p-5 text-muted-foreground">
                Die vollständige Datenschutzerklärung wird in Kürze an dieser Stelle veröffentlicht.
            </p>

            <p>
                Bei Fragen zum Datenschutz erreichen Sie uns unter{" "}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            </p>
        </LegalPage>
    );
}
