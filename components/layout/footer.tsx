import { SITE_NAME, UPSTREAM } from "@/lib/site";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface FooterProps {
    version?: string;
}

export function Footer({ version }: FooterProps) {
    const year = new Date().getFullYear();

    return (
        <footer className="shrink-0 font-mono text-xs min-h-8 py-2 flex flex-row flex-wrap items-center px-4 gap-x-4 gap-y-1 *:opacity-70 *:hover:opacity-100 *:transition-opacity">
            <span>
                &copy;{year}&nbsp;{SITE_NAME} · basiert auf{" "}
                <a href={UPSTREAM.repository} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
                    {UPSTREAM.name} von {UPSTREAM.author}
                </a>{" "}
                (MIT-Lizenz)
            </span>

            {version && (
                <Tooltip>
                    <TooltipTrigger render={<span className="hidden sm:inline">v{version}</span>} />
                    <TooltipContent>❤️</TooltipContent>
                </Tooltip>
            )}

            <nav aria-label="Rechtliches" className="flex flex-row gap-4 sm:ml-auto">
                <Link href="/impressum" className="hover:underline">
                    Impressum
                </Link>
                <Link href="/datenschutz" className="hover:underline">
                    Datenschutz
                </Link>
            </nav>
        </footer>
    );
}
