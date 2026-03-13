import FeaturedProjectsCard, { type Project } from "./FeaturedProjectsCard";

type FeaturedProjectsListProps = {
	projects: Project[];
};

export default function FeaturedProjectsList({ projects }: FeaturedProjectsListProps) {
	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{projects.map((project) => (
				<li key={project.id ?? project.projectTitle}>
					<FeaturedProjectsCard {...project} />
				</li>
			))}
		</ul>
	);
}
