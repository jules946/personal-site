import Link from "next/link";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-2xl mx-auto px-6 py-10">
            <nav className="flex gap-8 mb-16 text-sm font-black uppercase tracking-widest">
                <Link href="/cv" className="hover:text-white">CV</Link>
                <Link href="/projects" className="hover:text-white">Projects</Link>
            </nav>
            {children}
        </div>
    );
}
