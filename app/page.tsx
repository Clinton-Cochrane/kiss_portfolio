import featuredProjectsListView from "./featuredProjectsListView";
import data from "./featuredProjects.json";
import Image from "next/image";
import headshot from "../public/headshot.jpeg"

export default function Home() {
	const photosrc = "/../public/headshot.jpeg";
	return (
		<div>
			<div id="hero_section" className="grid grid-cols-2">
				<div id="left_half_hero_section">
					<h1 id="name"> Clinton E. Cochrane</h1>
					<h2 id="title">Software Engineer</h2>
					<div id="buttons_hero_section">
						<button id="email_me_button">Email Me</button>
						<button id="view_projects_button">View Projects</button>
					</div>
				</div>
				<div id="right_half_hero_section">
					<Image width={100} height={100} alt="head shot" src={headshot} />
				</div>
			</div>

			<div id="proof_strip_section">
				<h2> Creative Problem Solving * 12 years of software development experience * Shipped Client Sites</h2>
			</div>

			<div id="featured_projects_section">{featuredProjectsListView(data.projects)}</div>

			<div id="about_section">
				<h6>Why do I like to build?</h6>
				<p>
					{" "}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae faucibus lacus, a aliquam sapien.
					Curabitur in sagittis urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Donec lobortis vestibulum lacus quis faucibus. Nunc elementum ut lacus eget congue. Praesent non rhoncus
					velit. Quisque tincidunt vel nisi ut tincidunt. In ac mi aliquet, pharetra quam vitae, finibus turpis. Morbi
					lacinia libero turpis, vel fringilla risus cursus id. Sed convallis nisi et fringilla sodales.
				</p>
				<h6>What do I like to build?</h6>
				<p>
					{" "}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae faucibus lacus, a aliquam sapien.
					Curabitur in sagittis urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Donec lobortis vestibulum lacus quis faucibus. Nunc elementum ut lacus eget congue. Praesent non rhoncus
					velit. Quisque tincidunt vel nisi ut tincidunt. In ac mi aliquet, pharetra quam vitae, finibus turpis. Morbi
					lacinia libero turpis, vel fringilla risus cursus id. Sed convallis nisi et fringilla sodales.
				</p>
				<h6>How do I like to build?</h6>
				<p>
					{" "}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae faucibus lacus, a aliquam sapien.
					Curabitur in sagittis urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Donec lobortis vestibulum lacus quis faucibus. Nunc elementum ut lacus eget congue. Praesent non rhoncus
					velit. Quisque tincidunt vel nisi ut tincidunt. In ac mi aliquet, pharetra quam vitae, finibus turpis. Morbi
					lacinia libero turpis, vel fringilla risus cursus id. Sed convallis nisi et fringilla sodales.
				</p>
				<h6>What do I want to do?</h6>
				<p>
					{" "}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae faucibus lacus, a aliquam sapien.
					Curabitur in sagittis urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Donec lobortis vestibulum lacus quis faucibus. Nunc elementum ut lacus eget congue. Praesent non rhoncus
					velit. Quisque tincidunt vel nisi ut tincidunt. In ac mi aliquet, pharetra quam vitae, finibus turpis. Morbi
					lacinia libero turpis, vel fringilla risus cursus id. Sed convallis nisi et fringilla sodales.
				</p>
			</div>

			<div id="contact_section"></div>
		</div>
	);
}
