import Link from "next/link";

export default function CV() {
  return (
    <main className="flex flex-col gap-16">
      <section className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Julius Manowski</h1>
        <p className="text-zinc-600">
            Integrations & business travel specialist by day, software engineer by night — based in Edinburgh with a passion for building things.
        </p>
        <div className="flex gap-4 text-sm">
          <a href="https://github.com/jules946" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-500 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/julius-manowski-b5466719b/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-500 transition-colors">LinkedIn</a>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Experience</h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-sm text-zinc-400">
              <span>Vialto Partners</span>
              <span>Dec 2025 – Present</span>
            </div>
            <p className="font-medium">Integrations & Business Travel Technology</p>
            <ul className="mt-1 flex flex-col gap-1 text-sm text-zinc-600 list-disc list-inside">
              <li>Support client onboarding onto Vialto's API, validating business logic, UUID consistency, and end-to-end connection testing with sender systems.</li>
              <li>Maintain data integrity for an automated PWD completion tool — managing country-specific data points and static entity data to enable RPA-driven form completion.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-sm text-zinc-400">
              <span>Rubric</span>
              <span>Jul 2023 – Dec 2025</span>
            </div>
            <p className="font-medium">Junior Software Engineer → Software Engineer Contractor</p>
            <ul className="mt-1 flex flex-col gap-1 text-sm text-zinc-600 list-disc list-inside">
              <li>Led a rework of finance automation tools, enhancing scalability and backwards compatibility.</li>
              <li>Built API integrations for enterprise CMS platforms and AI-powered localisation tools using Azure.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-sm text-zinc-400">
              <span>PwC / Vialto Partners</span>
              <span>Sep 2021 – Sep 2022</span>
            </div>
            <p className="font-medium">Trainee Tax Associate</p>
            <ul className="mt-1 flex flex-col gap-1 text-sm text-zinc-600 list-disc list-inside">
              <li>Advised clients on UK tax compliance and Global Mobility regulations.</li>
              <li>Contributed to multi-million-pound client acquisition proposals.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Education</h2>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-sm text-zinc-400">
            <span>Edinburgh Napier University</span>
            <span>Dec 2025</span>
          </div>
          <p className="font-medium">BEng Software Engineering — 1st Class Honours</p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Skills</h2>
        <p className="text-sm text-zinc-600">Python, SQL, REST APIs, JavaScript, Azure, AWS, Git, Docker, CI/CD</p>
      </section>
    </main>
  );
}
