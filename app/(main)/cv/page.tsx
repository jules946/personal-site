import VerticalName from "@/app/components/VerticalName";
import { client } from "@/lib/sanity";

const NAME_SIDE = 'left';

type Experience = {
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    bullets: string[];
};

type CV = {
    name: string;
    tagline: string;
    experience: Experience[];
    education: {
        institution: string;
        degree: string;
        date: string;
    };
    skills: string;
    github: string;
    linkedin: string;
};

export default async function CV() {
    const cv: CV = await client.fetch(`*[_type == "cv"][0]`);

    return (
        <>
        <VerticalName side={NAME_SIDE} />
        <main className="flex flex-col gap-16">

            <section className="flex flex-col gap-4">
                <h1 className="text-4xl font-black uppercase tracking-tighter">CV</h1>
                <div className="h-1 bg-black w-full" />
                <div className="flex gap-6 text-sm font-black uppercase tracking-widest justify-end">
                    <a href={cv.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
                    <a href={cv.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
                </div>
                <p className="text-lg font-medium sm:text-base sm:font-normal text-black max-w-lg">{cv.tagline}</p>
            </section>

            <section className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <h2 className="text-sm font-black uppercase tracking-widest shrink-0">Experience</h2>
                    <div className="h-[2px] bg-black w-full" />
                </div>
                <div className="flex flex-col gap-10">
                    {cv.experience.map((role) => (
                        <div key={role.company + role.title} className="flex flex-col gap-1">
                            <div className="flex justify-between text-sm font-black uppercase tracking-widest">
                                <span>{role.company}</span>
                                <span>{role.startDate} – {role.endDate}</span>
                            </div>
                            <p className="text-base font-semibold mt-1">{role.title}</p>
                            <ul className="mt-2 flex flex-col gap-1 text-lg font-medium sm:text-base sm:font-normal text-black list-disc list-inside">
                                {role.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <h2 className="text-sm font-black uppercase tracking-widest shrink-0">Education</h2>
                    <div className="h-[2px] bg-black w-full" />
                </div>
                <div className="flex justify-between text-sm font-black uppercase tracking-widest">
                    <span>{cv.education.institution}</span>
                    <span>{cv.education.date}</span>
                </div>
                <p className="text-base font-semibold -mt-4">{cv.education.degree}</p>
            </section>

            <section className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <h2 className="text-sm font-black uppercase tracking-widest shrink-0">Skills</h2>
                    <div className="h-[2px] bg-black w-full" />
                </div>
                <p className="text-sm font-black uppercase tracking-widest">{cv.skills}</p>
            </section>

        </main>
        </>
    );
}
