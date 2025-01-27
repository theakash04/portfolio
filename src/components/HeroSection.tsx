'use client'

import { FiGithub } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi';
import skillsData from '@/data/skills.json'
import Image from 'next/image';

interface Skill {
	skillName: string;
	link: string;
}

const HeroSection: React.FC = () => {
	return (
		<section className="min-h-screen flex items-center justify-center p-8 relative">
			<div className="flex flex-col lg:flex-row items-center gap-8 relative">
				<div className="relative group flex items-center justify-center">
					<div className='absolute w-40 h-40 rounded-full bg-accent-accent1 group-hover:blur-3xl -z-10 
    transition-all duration-300 ' />
					<Image
						src="/chamber.jpg"
						alt="Profile"
						width={256}
						height={256}
						className="rounded-full object-cover border-4 border-accent shadow-lg 
    transition-transform duration-300 cursor-pointer"
					/>
				</div>
				<div className="relative isolate">
					{/* Glass morphism container */}
					<div className="bg-white/5 backdrop-blur-2xl rounded-2xl p-8 shadow-2xl space-y-6 border border-white/10 hover:border-[#76b900]/30 transition-all duration-300 max-w-[700px] flex flex-col items-center justify-start">
						<div className="text-4xl font-extrabold bg-gradient-to-r from-accent-accent1 to-accent-accent2 bg-clip-text text-transparent">
							AKASH KUMAR
						</div>
						<p className="max-w-lg text-foreground text-lg text-center">
							I&#39;m a Software Engineer who works on both backend and frontend development. I enjoy creating reliable software and applications that are built to scale and focused on delivering a great user experience.
						</p>

						{/* ✅ Render skills only if available */}
						<div className="flex flex-wrap gap-3 items-center justify-center">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							{(skillsData as Skill[]).map((skill) => (

								< img
									key={skill.skillName}
									src={skill.link}
									alt={skill.skillName}
									className="h-7 w-auto transition-transform hover:scale-105"
									loading="eager"
								/>
							))}
						</div>
						<hr className='bg-red-400 border-accent-accent1 border-2 max-w-xl w-full' />
						<div className="flex gap-4 flex-wrap">
							<a href="https://github.com/theakash04" className="flex items-center gap-2 px-4 py-2 bg-color-primary text-color-secondary rounded-lg transition-all hover:scale-105 shadow-color-secondary drop-shadow-sm">
								<FiGithub className="w-5 h-5" /> GitHub
							</a>
							<a href="https://dev.to/theakash04" className="flex items-center gap-2 px-4 py-2 bg-accent-accent1 text-black rounded-lg transition-all hover:scale-105">
								<HiOutlineBookOpen className="w-5 h-5" /> Blogs
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection
