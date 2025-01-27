'use client'
import projectsData from "@/data/projects.json"

interface Projects {
	title: string;
	desc: string;
	github: string;
}

export default function ProjectsSection() {

	return (
		<section className="px-8 pb-10 flex items-center justify-center w-full flex-col gap-10 mb-10">
			<h1 className="text-7xl font-extrabold bg-gradient-to-r from-accent-accent1 to-accent-accent2 bg-clip-text text-transparent">PROJECTS</h1>
			<div className="flex items-stretch justify-center gap-8 flex-wrap-reverse">
				{
					(projectsData as Projects[]).map((items: Projects) => (
						<a
							rel="noreferrer"
							target="_blank"
							key={items.title}
							href={items.github}
							className="bg-white/10 backdrop-blur-lg max-w-96 w-full p-5 rounded-xl shadow-lg hover:transform hover:scale-105 border-white/10 border hover:border-[#76b900] transition-all duration-300 relative cursor-pointer">
							<h3 className="text-2xl font-bold mb-4">{items.title}</h3>
							<p>{items.desc}</p>
						</a>
					))
				}
			</div>
		</section>
	);
}
