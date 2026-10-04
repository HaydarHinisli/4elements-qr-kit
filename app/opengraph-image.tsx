import { buildOgImage, OG_SIZE } from "@/lib/og";

export const alt = "4ELEMENTS QR Kit: kostenloser QR-Code-Generator";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
    return buildOgImage(
        "QR-Codes für lokale Betriebe",
        "Google-Bewertung, WhatsApp, Speisekarte, WLAN und Visitenkarte. Kostenlos, direkt im Browser.",
    );
}
