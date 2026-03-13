import FeaturedProjectsList from "./FeaturedProjectsList";
import data from "./featuredProjects.json";
import Image from "next/image";
import headshot from "../public/headshot.jpeg";

export default function Home() {
	return (
		<div className="text-zinc-100 min-h-screen font-sans">
			<main className="mx-auto max-w-6xl px-8 pt-4 pb-12 rounded-2xl bg-zinc-900 shadow-xl shadow-red-900 ring-1 ring-red-600/60 space-y-14">
				<section id="hero_section" aria-label="Introduction" className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
					<div className="space-y-6 max-w-2xl md:col-span-2" id="left_half_hero_section">
						<div className="space-y-2">
							<h1 className="font-display text-5xl lg:text-6xl font-semibold tracking-tight" id="name">
								Clinton E. <span className="whitespace-nowrap">Cochrane</span>
							</h1>

							<h2 className="font-display text-2xl md:text-3xl text-zinc-300" id="title">
								Software Engineer
							</h2>
						</div>
						<div id="proof_strip_section" className="flex flex-wrap gap-2 text-sm text-zinc-300">
							<span className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1">Creative Problem Solving</span>
							<span className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1">
								12 years of software development
							</span>
							<span className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1">Shipped client sites</span>
						</div>

						<div className="flex flex-wrap gap-3" id="buttons_hero_section">
							<a
								href="mailto:clinton.edward.cochrane@gmail.com"
								className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-white text-black hover:bg-zinc-200 transition"
							>
								Email Me
							</a>
							<a
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								download
								className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium ring-1 ring-white/20 hover:ring-white/40 transition"
							>
								Resume
							</a>
							<a
								className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium ring-1 ring-white/20 hover:ring-white/40 transition"
								href="#featured_projects_section"
							>
								View Projects
							</a>
						</div>
					</div>

					<div className="flex md:justify-end self-stretch md:pt-2">
						<div className="rounded-2xl overflow-hidden ring-1 ring-white/10" id="right_half_hero_section">
							<Image width={225} height={225} alt="Clinton E. Cochrane, Software Engineer" src={headshot} />
						</div>
					</div>
				</section>

				<section id="featured_projects_section" aria-label="Featured projects">
					<FeaturedProjectsList projects={data.projects} />
				</section>

				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="about_section" aria-label="About">
					<div>
						<h3 className="font-display text-sm uppercase tracking-wider text-zinc-300">Why do I like to build?</h3>
						<p className="mt-3 text-sm leading-6 text-zinc-300">
							I build because I enjoy creating. I enjoy fixing things. There is a special warm feeling I get when I see
							a problem, understand the problem, and turn nothing into a solution for said problem. Building also gives
							my mind somewhere productive to go. I can focus, I can learn, I can contribute, all while helping people.
						</p>
					</div>

					<div>
						<h3 className="font-display text-sm uppercase tracking-wider text-zinc-300">What do I like to build?</h3>
						<p className="mt-3 text-sm leading-6 text-zinc-300">
							I like building solutions. The kind that will turn a messy problem into a clear usable tool. Web apps,
							mobile apps, APIs, and systems that do something useful in the real world. I am drawn to projects that feel
							a little ambitious: things that challenge me technically, push my understanding forward, and end up being
							genuinely helpful to the people using them. If it is practical, thoughtfully designed, or just plain cool,
							I am probably interested
						</p>
					</div>
					<div>
						<h3 className="font-display text-sm uppercase tracking-wider text-zinc-300">How do I like to build?</h3>
						<p className="mt-3 text-sm leading-6 text-zinc-300">
							My best work happens in a dark room with music on, three screens lit up, and Visual Studio Code front and
							center. I work iteratively: small steps, tested often, slowly stacking into a larger solution. I care
							about clarity, feedback loops, and steady progress. I don’t chase perfection on the first pass. I refine
							and experiment as I go, letting the project teach me what it needs next.
						</p>
					</div>
					<div>
						<h3 className="font-display text-sm uppercase tracking-wider text-zinc-300">What do I want to do?</h3>
						<p className="mt-3 text-sm leading-6 text-zinc-300">
							I want to build tools that make people’s lives easier: web apps, mobile apps, APIs, and systems that
							remove friction or solve real problems. I’m especially interested in projects that blend technical depth
							with practical impact: software that’s well-designed, approachable, and actually used. Whether it’s a
							small utility or a larger platform, I want what I build to matter.
						</p>
					</div>
				</section>

				<section className="grid grid-cols-3 gap-6" id="contact_section" aria-label="Contact">
					<div id="linkedIn">
						<a
							className="text-zinc-300 hover:text-white transition"
							href="https://www.linkedin.com/in/clinton-cochrane"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
					</div>
					<div id="email">
						<a
							className="text-zinc-300 hover:text-white transition"
							href="mailto:clinton.edward.cochrane@gmail.com"
							target="_blank"
						>
							Email
						</a>
					</div>
					<div id="github">
						<a
							className="text-zinc-300 hover:text-white transition"
							href="https://www.github.com/clinton-cochrane"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github
						</a>
					</div>
				</section>
			</main>
		</div>
	);
}
