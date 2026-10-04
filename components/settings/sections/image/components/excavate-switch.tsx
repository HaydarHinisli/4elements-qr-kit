"use client";

import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import { useCodeConfigStore } from "@/stores/code-config/provider";
import { useCallback } from "react";

export function ExcavateSwitch() {
    const excavate = useCodeConfigStore((s) => s.image?.excavate);
    const set = useCodeConfigStore((s) => s.set);

    const onChange = useCallback(
        (excavate: boolean) => set((s) => (s.image ? { image: { ...s.image, excavate } } : {})),
        [set],
    );

    return (
        <Field orientation="horizontal">
            <FieldContent>
                <div className="flex flex-row gap-2">
                    <FieldLabel htmlFor="excavate">Aussparen</FieldLabel>
                    <Switch id="excavate" checked={excavate} onCheckedChange={onChange} />
                </div>

                <FieldDescription>Entfernt die Module hinter dem eingefügten Bild.</FieldDescription>
            </FieldContent>
        </Field>
    );
}
