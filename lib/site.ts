/**
 * Single source of truth for the site's absolute URL. Set NEXT_PUBLIC_SITE_URL
 * in the deployment environment (e.g. https://qr.4elements-digital.de) so
 * canonical URLs, the sitemap, robots.txt and Open Graph URLs all resolve correctly.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME = "4ELEMENTS QR Kit";

/** Company behind this deployment (legal notice, contact, JSON-LD). */
export const COMPANY = {
    name: "4ELEMENTS e.K.",
    owner: "Haydar Hinisli",
    street: "Thaliaweg 17D",
    postalCode: "12249",
    city: "Berlin",
    email: "haydar@4elements-digital.de",
    registerCourt: "Amtsgericht Charlottenburg",
    registerNumber: "HRA 61099",
} as const;

/** The upstream project this kit is based on (MIT, see LICENSE). */
export const UPSTREAM = {
    name: "QReate",
    author: "Gabriele Rizzo",
    repository: "https://github.com/gabrielerizzo/qreate",
} as const;
