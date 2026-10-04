"use client";

import { OptionsPicker } from "@/components/pickers/options-picker";
import { useCodeConfigStore } from "@/stores/code-config/provider";

const CODE_TYPES: Record<CodeType, string> = {
    text: "Text",
    url: "Link (Google-Bewertung, WhatsApp, Karte …)",
    wifi: "WLAN",
    phone: "Telefon",
    email: "E-Mail",
    calendar: "Termin",
    geolocation: "Standort",
    contact: "Visitenkarte (vCard)",
    sms: "SMS",
    crypto: "Kryptowährung",
    data: "Rohdaten",
};

export default function TypePicker() {
    const type = useCodeConfigStore((s) => s.data.type);
    const set = useCodeConfigStore((s) => s.set);

    return (
        <OptionsPicker
            aria-label="Inhaltstyp"
            value={type}
            onChange={(type) => set((s) => ({ data: { ...s.data, type } }))}
            data={Object.keys(CODE_TYPES) as CodeType[]}
            label={(type) => CODE_TYPES[type]}
        />
    );
}
