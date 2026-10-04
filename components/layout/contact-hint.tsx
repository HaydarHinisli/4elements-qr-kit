import { COMPANY } from "@/lib/site";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";

const MAILTO = `mailto:${COMPANY.email}?subject=${encodeURIComponent("Anfrage über das 4ELEMENTS QR Kit")}`;

/** Low-key 4ELEMENTS service note shown directly below the generator. */
export function ContactHint() {
    return (
        <aside aria-label="Angebot von 4ELEMENTS" className="mx-auto w-full max-w-5xl px-6 py-8">
            <div className="flex flex-col gap-4 rounded-2xl border bg-muted/30 p-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground text-pretty">
                    <span className="font-medium text-foreground">
                        Mehr Google-Bewertungen und weniger Kündigungen?
                    </span>{" "}
                    4ELEMENTS automatisiert Bewertungsanfragen und Kundenbindung für lokale Betriebe.
                </p>

                <Button
                    nativeButton={false}
                    variant="outline"
                    className="w-fit shrink-0"
                    render={<a href={MAILTO} />}
                >
                    <EnvelopeSimpleIcon />
                    Kontakt aufnehmen
                </Button>
            </div>
        </aside>
    );
}
