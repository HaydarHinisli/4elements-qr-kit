import { buildOgImage, OG_SIZE } from "@/lib/og";
import { QR_TYPE_PAGES, QR_TYPE_PAGE_BY_SLUG } from "@/lib/qr-pages";

export const alt = "4ELEMENTS QR Kit: kostenloser QR-Code-Generator";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
    return QR_TYPE_PAGES.map((page) => ({ slug: page.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = QR_TYPE_PAGE_BY_SLUG.get(slug);

    return buildOgImage(
        page?.h1 ?? "Kostenloser QR-Code-Generator",
        "Kostenlos, ohne Anmeldung, läuft nie ab, direkt im Browser.",
    );
}
