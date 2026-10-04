import { ThemeProvider } from "@/components/layout/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

const title = "QR-Code-Generator für lokale Betriebe: kostenlos | 4ELEMENTS QR Kit";

const description =
    "Kostenlose QR-Codes für Gyms, Cafés, Friseure und Praxen: Google-Bewertung, WhatsApp, Speisekarte, WLAN und Visitenkarte. Mit Logo und Farben, ohne Anmeldung, läuft nie ab.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: SITE_NAME,
    alternates: { canonical: "/" },
    keywords: [
        "qr code generator",
        "qr code erstellen kostenlos",
        "google bewertung qr code",
        "whatsapp qr code",
        "speisekarte qr code",
        "wlan qr code",
        "visitenkarte qr code",
        "qr code mit logo",
    ],
    authors: [{ name: "4ELEMENTS", url: SITE_URL }],
    openGraph: {
        title,
        description,
        siteName: SITE_NAME,
        locale: "de_DE",
        type: "website",
        url: "/",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
    },
};

export const viewport: Viewport = {
    // Matches manifest.json's theme/background pair, per color scheme.
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#e6e2db" },
        { media: "(prefers-color-scheme: dark)", color: "#1e1e1e" },
    ],
};

export default function RootLayout({ children }: React.PropsWithChildren) {
    return (
        <html lang="de" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
            <head>
                <meta name="apple-mobile-web-app-title" content="4ELEMENTS QR" />
            </head>

            <body className={`${inter.variable} ${fontMono.variable} antialiased`}>
                <ThemeProvider>
                    <TooltipProvider>{children}</TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
