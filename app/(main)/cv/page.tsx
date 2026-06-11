import VerticalName from "@/app/components/VerticalName";

// Change to 'left', 'right', or 'both' to try different versions
const NAME_SIDE = 'left';

export default function CV() {
    return (
        <>
        <VerticalName side={NAME_SIDE} />
        <main className="flex flex-col gap-16">

            <section className="flex flex-col gap-4">
                <h1 className="text-4xl font-black uppercase tracking-tighter">CV</h1>
                <div className="h-1 bg-black w-full" />
                <div className="flex gap-6 text-sm font-black uppercase tracking-widest justify-end">
                    <a href="https://github.com/jules946" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
                    <a href="https://www.linkedin.com/in/julius-manowski-b5466719b/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
                </div>
                <p className="text-base text-black max-w-lg">
                    Integrations & business travel specialist by day, software engineer by night — based in Edinburgh with a passion for building things.
                </p>

            </section>

            <section className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <h2 className="text-sm font-black uppercase tracking-widest shrink-0">Experience</h2>
                    <div className="h-[2px] bg-black w-full" />
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-sm font-black uppercase tracking-widest">
                            <span>Vialto Partners</span>
                            <span>Dec 2025 – Present</span>
                        </div>
                        <p className="text-base font-semibold mt-1">Integrations & Business Travel Technology</p>
                        <ul className="mt-2 flex flex-col gap-1 text-base text-black list-disc list-inside">
                            <li>Support client onboarding onto Vialto's API, validating business logic, UUID consistency, and end-to-end connection testing with sender systems.</li>
                            <li>Maintain data integrity for an automated PWD completion tool — managing country-specific data points and static entity data to enable RPA-driven form completion.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-sm font-black uppercase tracking-widest">
                            <span>Rubric</span>
                            <span>Jul 2023 – Dec 2025</span>
                        </div>
                        <p className="text-base font-semibold mt-1">Junior Software Engineer → Software Engineer Contractor</p>
                        <ul className="mt-2 flex flex-col gap-1 text-base text-black list-disc list-inside">
                            <li>Led a rework of finance automation tools, enhancing scalability and backwards compatibility.</li>
                            <li>Built API integrations for enterprise CMS platforms and AI-powered localisation tools using Azure.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-sm font-black uppercase tracking-widest">
                            <span>PwC / Vialto Partners</span>
                            <span>Sep 2021 – Sep 2022</span>
                        </div>
                        <p className="text-base font-semibold mt-1">Trainee Tax Associate</p>
                        <ul className="mt-2 flex flex-col gap-1 text-base text-black list-disc list-inside">
                            <li>Advised clients on UK tax compliance and Global Mobility regulations.</li>
                            <li>Contributed to multi-million-pound client acquisition proposals.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <h2 className="text-sm font-black uppercase tracking-widest shrink-0">Education</h2>
                    <div className="h-[2px] bg-black w-full" />
                </div>
                <div className="flex justify-between text-sm font-black uppercase tracking-widest">
                    <span>Edinburgh Napier University</span>
                    <span>Dec 2025</span>
                </div>
                <p className="text-base font-semibold -mt-4">BEng Software Engineering — 1st Class Honours</p>
            </section>

            <section className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <h2 className="text-sm font-black uppercase tracking-widest shrink-0">Skills</h2>
                    <div className="h-[2px] bg-black w-full" />
                </div>
                <p className="text-sm font-black uppercase tracking-widest">
                    Python · SQL · REST APIs · JavaScript · Azure · AWS · Git · Docker · CI/CD
                </p>
            </section>

        </main>
        </>
    );
}
