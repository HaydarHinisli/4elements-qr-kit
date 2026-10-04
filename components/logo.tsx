interface LogoProps extends React.ComponentProps<"svg"> {
    variant?: "icon" | "default";
}

/**
 * The 4E mark: white letters on a dark tile with a green accent bar. Uses fixed
 * colors (no currentColor) so it reads the same in light and dark mode and can
 * also be rendered by next/og for the Open Graph images.
 */
export function LogoMark(props: React.ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
            <rect width="64" height="64" rx="14" fill="#1e1e1e" />
            <g transform="translate(0.5 -1.5)">
                <path
                    fill="#ffffff"
                    fillRule="evenodd"
                    d="M23 14 L10 33 V38 H24 V44 H31 V38 H35 V33 H31 V14 Z M24 33 H16.6 L24 22.2 Z"
                />
                <path fill="#ffffff" d="M37 14 H53 V20 H44 V26 H51 V32 H44 V38 H53 V44 H37 Z" />
                <rect x="10" y="49" width="43" height="4" rx="2" fill="#3DDC97" />
            </g>
        </svg>
    );
}

export function Logo({ variant = "default", ...props }: LogoProps) {
    return (
        <div className="flex flex-row gap-2 items-center">
            <LogoMark {...props} />

            {variant !== "icon" && (
                <span className="text-lg font-mono">
                    <span className="font-semibold">4ELEMENTS</span>
                    <span className="text-muted-foreground"> QR Kit</span>
                </span>
            )}
        </div>
    );
}
