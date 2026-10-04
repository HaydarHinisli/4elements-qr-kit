"use client";

import { Labeled } from "@/components/labeled";
import { ColorPicker } from "@/components/pickers/color-picker";
import { OptionsPicker } from "@/components/pickers/options-picker";
import { useCodeConfigStore } from "@/stores/code-config/provider";
import type { FinderPatternInnerStyle, FinderPatternOuterStyle } from "@lglab/react-qr-code";

const SHARED_STYLES: Record<FinderPatternOuterStyle, string> = {
    square: "Quadrat",
    "pinched-square": "Eingedrücktes Quadrat",
    "rounded-sm": "Abgerundet (S)",
    rounded: "Abgerundet (M)",
    "rounded-lg": "Abgerundet (L)",
    circle: "Kreis",
    "inpoint-sm": "Innenspitze (S)",
    inpoint: "Innenspitze (M)",
    "inpoint-lg": "Innenspitze (L)",
    "outpoint-sm": "Außenspitze (S)",
    outpoint: "Außenspitze (M)",
    "outpoint-lg": "Außenspitze (L)",
    "leaf-sm": "Blatt (S)",
    leaf: "Blatt (M)",
    "leaf-lg": "Blatt (L)",
};

const OUTER_STYLES: Record<FinderPatternOuterStyle, string> = SHARED_STYLES;

const INNER_STYLES: Record<FinderPatternInnerStyle, string> = {
    ...SHARED_STYLES,
    diamond: "Raute",
    star: "Stern",
    heart: "Herz",
    hashtag: "Hashtag",
    microchip: "Mikrochip",
};

export function FinderStyler() {
    const finder = useCodeConfigStore((s) => s.style.finder);
    const set = useCodeConfigStore((s) => s.set);

    return (
        <div className="flex flex-col gap-4">
            <Labeled label="Ecken" secondary="Außen" className="flex flex-row gap-2">
                <OptionsPicker
                    aria-label="Stil der Ecken außen"
                    value={finder.outer.style}
                    className="w-40"
                    data={Object.keys(OUTER_STYLES) as FinderPatternOuterStyle[]}
                    label={(style) => OUTER_STYLES[style]}
                    onChange={(style) =>
                        set((s) => ({
                            style: { ...s.style, finder: { ...s.style.finder, outer: { ...s.style.finder.outer, style } } },
                        }))
                    }
                />

                <ColorPicker
                    value={finder.outer.color}
                    onChange={(color) =>
                        set((s) => ({
                            style: { ...s.style, finder: { ...s.style.finder, outer: { ...s.style.finder.outer, color } } },
                        }))
                    }
                />
            </Labeled>

            <Labeled label="Ecken" secondary="Innen" className="flex flex-row gap-2">
                <OptionsPicker
                    aria-label="Stil der Ecken innen"
                    value={finder.inner.style}
                    className="w-40"
                    data={Object.keys(INNER_STYLES) as FinderPatternInnerStyle[]}
                    label={(style) => INNER_STYLES[style]}
                    onChange={(style) =>
                        set((s) => ({
                            style: { ...s.style, finder: { ...s.style.finder, inner: { ...s.style.finder.inner, style } } },
                        }))
                    }
                />

                <ColorPicker
                    value={finder.inner.color}
                    onChange={(color) =>
                        set((s) => ({
                            style: { ...s.style, finder: { ...s.style.finder, inner: { ...s.style.finder.inner, color } } },
                        }))
                    }
                />
            </Labeled>
        </div>
    );
}
