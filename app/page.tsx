import FillLink from "./components/FillLink";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#B5451B] text-black flex flex-col justify-between p-8 md:p-16">
            <div className="flex justify-between items-start text-xs tracking-widest uppercase text-black">
                <span></span>
                <span>Edinburgh</span>
            </div>

            <div>
                <p className="text-2xl font-black uppercase tracking-widest text-white mb-6">Julius Manowski</p>
                <div className="h-6 bg-black mb-10 w-full" />
                <div className="flex justify-between items-end">
                    <FillLink href="/cv">CV</FillLink>
                    <FillLink href="/projects">Projects</FillLink>
                </div>
            </div>

            <div />
        </main>
    );
}
