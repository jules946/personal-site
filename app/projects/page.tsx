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
      <section className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <p className="text-zinc-600">Things I&apos;ve built.</p>
      </section>

      <section className="flex flex-col gap-8">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col gap-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-zinc-500 transition-colors"
            >
              {project.name}
            </a>
            <p className="text-sm text-zinc-600">{project.description}</p>
            <div className="flex gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-zinc-400 border border-zinc-200 rounded px-2 py-0.5">
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
