import featuredProjectsListView from "./featuredProjectsListView";
import data from "./featuredProjects.json";
import Image from "next/image";
import headshot from "../public/headshot.jpeg";

export default function Home() {
	return (
		<div className="text-zinc-100 min-h-screen font-sans">
			<div className="mx-auto max-w-6xl px-8 pt-4 pb-12 rounded-2xl bg-zinc-900  shadow-xl shadow-red-900 ring-1 ring-red-600/60 space-y-14">
				<div id="hero_section" className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
					<div className="space-y-6  max-w-2xl md:col-span-2" id="left_half_hero_section">
						<div className="space-y-2">
							<h1 className="font-display text-5xl lg:text-6xl font-semibold tracking-tight" id="name">
								{" "}
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
								className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium ring-1 ring-white/20 hover:ring-white/40 transition"
								href="#featured_projects_section"
							>
								View Projects
							</a>
						</div>
					</div>

					<div className="flex md:justify-end self-stretch md:pt-2">
						<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 " id="right_half_hero_section">
							<Image width={225} height={225} alt="head shot" src={headshot} />
						</div>
					</div>
				</div>

				<div id="featured_projects_section">{featuredProjectsListView(data.projects)}</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="about_section">
					<div>
						<h3 className="font-display text-sm uppercase tracking-wider text-zinc-300">Why do I like to build?</h3>
						<p className="mt-3 text-sm leading-6 text-zinc-300">
							{" "}
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae faucibus lacus, a aliquam sapien.
							Curabitur in sagittis urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus. Donec lobortis vestibulum lacus quis faucibus. Nunc elementum ut lacus eget congue.
							Praesent non rhoncus velit. Quisque tincidunt vel nisi ut tincidunt. In ac mi aliquet, pharetra quam
							vitae, finibus turpis. Morbi lacinia libero turpis, vel fringilla risus cursus id. Sed convallis nisi et
							fringilla sodales.
						</p>
					</div>

					<div>
						<h3 className="font-display text-sm uppercase tracking-wider text-zinc-300">What do I like to build?</h3>
						<p className="mt-3 text-sm leading-6 text-zinc-300">
							{" "}
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae faucibus lacus, a aliquam sapien.
							Curabitur in sagittis urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus. Donec lobortis vestibulum lacus quis faucibus. Nunc elementum ut lacus eget congue.
							Praesent non rhoncus velit. Quisque tincidunt vel nisi ut tincidunt. In ac mi aliquet, pharetra quam
							vitae, finibus turpis. Morbi lacinia libero turpis, vel fringilla risus cursus id. Sed convallis nisi et
							fringilla sodales.
						</p>
					</div>
					<div>
						<h3 className="font-display text-sm uppercase tracking-wider">How do I like to build?</h3>
						<p className="mt-3 text-sm leading-6 text-zinc-300">
							{" "}
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae faucibus lacus, a aliquam sapien.
							Curabitur in sagittis urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus. Donec lobortis vestibulum lacus quis faucibus. Nunc elementum ut lacus eget congue.
							Praesent non rhoncus velit. Quisque tincidunt vel nisi ut tincidunt. In ac mi aliquet, pharetra quam
							vitae, finibus turpis. Morbi lacinia libero turpis, vel fringilla risus cursus id. Sed convallis nisi et
							fringilla sodales.
						</p>
					</div>
					<div>
						<h3 className="font-display text-sm uppercase tracking-wider">What do I want to do?</h3>
						<p className="mt-3 text-sm leading-6 text-zinc-300">
							{" "}
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae faucibus lacus, a aliquam sapien.
							Curabitur in sagittis urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus. Donec lobortis vestibulum lacus quis faucibus. Nunc elementum ut lacus eget congue.
							Praesent non rhoncus velit. Quisque tincidunt vel nisi ut tincidunt. In ac mi aliquet, pharetra quam
							vitae, finibus turpis. Morbi lacinia libero turpis, vel fringilla risus cursus id. Sed convallis nisi et
							fringilla sodales.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-3 gap-6" id="contact_section">
					<div id="linkedIn">
						<a
							className="text-zinc-300 hover:text-white transition"
							href="https://www.linkedin.com/in/clinton-cochrane"
							target="_blank"
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
							email me
						</a>
					</div>
					<div id="github">
						<a
							className="text-zinc-300 hover:text-white transition"
							href="https://www.github.com/clinton-cochrane"
							target="_blank"
						>
							Github
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
