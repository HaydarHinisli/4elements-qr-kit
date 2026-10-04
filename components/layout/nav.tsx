import Link from "next/link";
import { Logo } from "../logo";
import { Button } from "../ui/button";

interface NavProps {
    actions: React.ReactNode;
}

export function Nav({ actions }: NavProps) {
    return (
        <header className="shrink-0 h-14 flex flex-row items-center px-4 justify-between">
            <Button
                nativeButton={false}
                variant="ghost"
                className="-ml-2"
                render={<Link href="/" aria-label="4ELEMENTS QR Kit Startseite" />}
            >
                <Logo className="size-6" />
            </Button>

            <div className="flex flex-row gap-2">{actions}</div>
        </header>
    );
}
