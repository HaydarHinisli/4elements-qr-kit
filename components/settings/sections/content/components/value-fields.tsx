"use client";

import { Labeled } from "@/components/labeled";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useCodeConfigStore } from "@/stores/code-config/provider";
import { useCallback } from "react";

type FieldDef = {
    key: string;
    label: string;
    kind: "text" | "textarea" | "url" | "email" | "tel" | "datetime" | "select" | "switch";
    placeholder?: string;
    inputMode?: React.ComponentProps<"input">["inputMode"];
    options?: { value: string; label: string }[];
};

const CONTENT_FIELDS: { [K in CodeType]: FieldDef[] } = {
    text: [{ key: "text", label: "Text", kind: "textarea", placeholder: "Beliebigen Text eingeben" }],
    url: [{ key: "url", label: "Link", kind: "url", placeholder: "beispiel.de" }],
    email: [
        { key: "to", label: "Empfänger", kind: "email", placeholder: "name@beispiel.de" },
        { key: "subject", label: "Betreff", kind: "text", placeholder: "Betreff" },
        { key: "body", label: "Nachricht", kind: "textarea", placeholder: "Nachricht" },
    ],
    phone: [{ key: "phone", label: "Telefonnummer", kind: "tel", placeholder: "+49 30 1234567" }],
    sms: [
        { key: "phone", label: "Telefonnummer", kind: "tel", placeholder: "+49 151 12345678" },
        { key: "message", label: "Nachricht", kind: "textarea", placeholder: "Nachricht" },
    ],
    wifi: [
        { key: "ssid", label: "Netzwerkname (SSID)", kind: "text", placeholder: "Gaeste-WLAN" },
        {
            key: "encryption",
            label: "Verschlüsselung",
            kind: "select",
            options: [
                { value: "WPA", label: "WPA/WPA2" },
                { value: "WEP", label: "WEP" },
                { value: "nopass", label: "Keine" },
            ],
        },
        { key: "password", label: "Passwort", kind: "text", placeholder: "Passwort" },
        { key: "hidden", label: "Verstecktes Netzwerk", kind: "switch" },
    ],
    contact: [
        { key: "firstName", label: "Vorname", kind: "text", placeholder: "Max" },
        { key: "lastName", label: "Nachname", kind: "text", placeholder: "Mustermann" },
        { key: "organization", label: "Firma", kind: "text", placeholder: "Ihr Betrieb" },
        { key: "title", label: "Position", kind: "text", placeholder: "Inhaber" },
        { key: "phone", label: "Telefon", kind: "tel", placeholder: "+49 30 1234567" },
        { key: "email", label: "E-Mail", kind: "email", placeholder: "name@beispiel.de" },
        { key: "url", label: "Website", kind: "url", placeholder: "beispiel.de" },
    ],
    calendar: [
        { key: "title", label: "Titel", kind: "text", placeholder: "Tag der offenen Tür" },
        { key: "location", label: "Ort", kind: "text", placeholder: "Ort" },
        { key: "start", label: "Beginn", kind: "datetime" },
        { key: "end", label: "Ende", kind: "datetime" },
        { key: "description", label: "Beschreibung", kind: "textarea", placeholder: "Details" },
    ],
    geolocation: [
        { key: "latitude", label: "Breitengrad", kind: "text", inputMode: "decimal", placeholder: "52.5200" },
        { key: "longitude", label: "Längengrad", kind: "text", inputMode: "decimal", placeholder: "13.4050" },
    ],
    crypto: [
        {
            key: "coin",
            label: "Währung",
            kind: "select",
            options: [
                { value: "bitcoin", label: "Bitcoin" },
                { value: "ethereum", label: "Ethereum" },
                { value: "litecoin", label: "Litecoin" },
            ],
        },
        { key: "address", label: "Adresse", kind: "text", placeholder: "Wallet-Adresse" },
        { key: "amount", label: "Betrag", kind: "text", inputMode: "decimal", placeholder: "0.00" },
    ],
    data: [{ key: "data", label: "Rohdaten", kind: "textarea", placeholder: "Rohdaten" }],
};

const INPUT_TYPE: Partial<Record<FieldDef["kind"], React.ComponentProps<"input">["type"]>> = {
    url: "url",
    email: "email",
    tel: "tel",
    datetime: "datetime-local",
};

export function ValueFields() {
    const type = useCodeConfigStore((s) => s.data.type);
    const contentMap = useCodeConfigStore((s) => s.data.content);
    const set = useCodeConfigStore((s) => s.set);

    const content = contentMap[type] as Record<string, string | boolean>;

    const update = useCallback(
        (key: string, value: string | boolean) => {
            set((s) => ({
                data: {
                    ...s.data,
                    content: {
                        ...s.data.content,
                        [type]: { ...s.data.content[type], [key]: value },
                    },
                },
            }));
        },
        [set, type],
    );

    return (
        <div className="flex flex-col gap-4">
            {CONTENT_FIELDS[type].map((field) => {
                if (field.kind === "switch") {
                    return (
                        <Field key={field.key} orientation="horizontal">
                            <FieldContent>
                                <div className="flex flex-row gap-2">
                                    <FieldLabel htmlFor={field.key}>{field.label}</FieldLabel>
                                    <Switch
                                        id={field.key}
                                        checked={Boolean(content[field.key])}
                                        onCheckedChange={(checked) => update(field.key, checked)}
                                    />
                                </div>
                            </FieldContent>
                        </Field>
                    );
                }

                return (
                    <Labeled key={field.key} label={field.label} htmlFor={field.key}>
                        {field.kind === "textarea" ? (
                            <Textarea
                                id={field.key}
                                placeholder={field.placeholder}
                                value={String(content[field.key] ?? "")}
                                onChange={(e) => update(field.key, e.target.value)}
                            />
                        ) : field.kind === "select" ? (
                            <NativeSelect
                                id={field.key}
                                className="w-full"
                                value={String(content[field.key] ?? "")}
                                onChange={(e) => update(field.key, e.target.value)}
                            >
                                {field.options?.map((option) => (
                                    <NativeSelectOption key={option.value} value={option.value}>
                                        {option.label}
                                    </NativeSelectOption>
                                ))}
                            </NativeSelect>
                        ) : (
                            <Input
                                id={field.key}
                                type={INPUT_TYPE[field.kind] ?? "text"}
                                inputMode={field.inputMode}
                                placeholder={field.placeholder}
                                value={String(content[field.key] ?? "")}
                                onChange={(e) => update(field.key, e.target.value)}
                            />
                        )}
                    </Labeled>
                );
            })}
        </div>
    );
}
