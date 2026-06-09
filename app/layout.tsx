import Link from "next/link";
import { Darker_Grotesque } from "next/font/google";

const font = Darker_Grotesque({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={font.className}>
        <body className="max-w-2xl mx-auto px-6 py-10 text-zinc-800">
        <nav className="flex gap-6 mb-16 text-sm font-medium">
            <Link href="/cv" className="hover:text-zinc-500 transition-colors">CV</Link>
            <Link href="/projects" className="hover:text-zinc-500 transition-colors">PROJECTS</Link>
        </nav>
        {children}
        </body>
        </html>
    );
}