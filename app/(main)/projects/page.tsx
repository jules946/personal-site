import { client } from "@/lib/sanity";

type Project = {
  name: string;
  description: string;
  tags: string[];
  url: string;
};

export default async function Projects() {
    const projects: Project[] = await client.fetch(`*[_type == "project"]{name, description, tags, url}`);
    return (
        <main className="flex flex-col gap-16">
            <section className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <h1 className="text-sm font-black uppercase tracking-widest shrink-0">Projects</h1>
                    <div className="h-[2px] bg-black w-full" />
                </div>
            </section>

            <section className="flex flex-col gap-10">
                {projects.map((project) => (
                    <div key={project.name} className="flex flex-col gap-2">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-black uppercase tracking-widest hover:text-white"
                        >
                            {project.name}
                        </a>
                        <p className="text-base">{project.description}</p>
                        <div className="flex gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="text-sm font-black uppercase tracking-widest border border-black px-2 py-0.5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
