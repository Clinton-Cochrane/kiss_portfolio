import Image from "next/image";

export type Project = {
	id?: string;
	projectTitle: string;
	techStack: string;
	screenShot: string;
	description: string;
	externalLink: string;
};

export default function FeaturedProjectsCard({
	projectTitle,
	techStack,
	screenShot,
	description,
	externalLink,
}: Project) {
	return (
		<article className="group rounded-2xl bg-zinc-950/40 ring-1 ring-white/10 overflow-hidden hover:ring-white/20 transition">
			<div id="featured_projects_card">
				<div className="relative aspect-video">
					<Image className="object-cover" fill alt={`${projectTitle} screenshot`} src={screenShot} />
				</div>

				<div className="p-5 space-y-3">
					<div className="space-y-1">
						<h4 className="font-display text-lg tracking-tight">{projectTitle}</h4>
						<p className="text-xs tracking-tighter line-clamp-1 text-zinc-400">{techStack}</p>
					</div>
					<p className="text-sm text-zinc-300 leading-6 line-clamp-3">{description}</p>
					<a
						href={externalLink}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex text-sm font-medium text-zinc-200 hover:text-white transition"
					>
						View project <span className="ml-1 group-hover:translate-x-0.5 transition">→</span>
					</a>
				</div>
			</div>
		</article>
	);
}
