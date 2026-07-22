import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const font = Darker_Grotesque({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Julius Manowski — Personal Site",
    description: "Business travel tech & integrations specialist by day, software engineer by night — based in Edinburgh with a passion for building things.",
    openGraph: {
        title: "Julius Manowski",
        description: "Business travel tech & integrations specialist by day, software engineer by night — based in Edinburgh with a passion for building things.",
        url: "https://jules946.dev",
        siteName: "Julius Manowski",
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Julius Manowski",
        description: "Business travel tech & integrations specialist by day, software engineer by night — based in Edinburgh with a passion for building things.",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={font.className}>
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
