import packageJson from "@/package.json";
import Link from "next/link";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Footer } from "./footer";

interface LegalPageProps extends React.PropsWithChildren {
    title: string;
}

/** Plain text page (Impressum, Datenschutz) with the site header and footer, no generator. */
export function LegalPage({ title, children }: LegalPageProps) {
    return (
        <div className="flex min-h-dvh w-full flex-col">
            <header className="shrink-0 h-14 flex flex-row items-center px-4 justify-between">
                <Button
                    nativeButton={false}
                    variant="ghost"
                    className="-ml-2"
                    render={<Link href="/" aria-label="4ELEMENTS QR Kit Startseite" />}
                >
                    <Logo className="size-4 fill-foreground" />
                </Button>

                <Button nativeButton={false} variant="outline" render={<Link href="/" />}>
                    Zum QR-Code-Generator
                </Button>
            </header>

            <Separator orientation="horizontal" />

            <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-14">
                <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
                <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed [&_h2]:text-base [&_h2]:font-semibold [&_a]:underline [&_a]:underline-offset-2">
                    {children}
                </div>
            </main>

            <Separator orientation="horizontal" />
            <Footer version={packageJson.version} />
        </div>
    );
}
