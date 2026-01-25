import featuredProjectsListView from "./featuredProjectsListView";
import data from "./featuredProjects.json";
import Image from "next/image";
import headshot from "../public/headshot.jpeg";


export default function Home() {
	return (
		<div className="centered">
			<div id="hero_section" className="grid grid-cols-2">
				<div className= "flex flex-col items-center"id="left_half_hero_section">
					<h1 className="text-6xl" id="name"> Clinton E. Cochrane</h1>
					<h2 className = "text-5xl" id="title">Software Engineer</h2>
					<div className="grid grid-cols-2" id="buttons_hero_section">
						<button className = "border-border-200 text-purple-600" id="email_me_button">Email Me</button>
						<button id="view_projects_button">View Projects</button>
					</div>
          <div id="proof_strip_section">
				<h2 className="text-xl"> Creative Problem Solving * 12 years of software development experience * Shipped Client Sites</h2>
			</div>
				</div>
				<div id="right_half_hero_section">
					<Image width={225} height={225} alt="head shot" src={headshot} />
				</div>
			</div>

			

			<div id="featured_projects_section">{featuredProjectsListView(data.projects)}</div>

			<div className="grid grid-cols-4" id="about_section">
				<div>
					<h6>Why do I like to build?</h6>
					<p>
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae faucibus lacus, a aliquam sapien.
						Curabitur in sagittis urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus. Donec lobortis vestibulum lacus quis faucibus. Nunc elementum ut lacus eget congue. Praesent
						non rhoncus velit. Quisque tincidunt vel nisi ut tincidunt. In ac mi aliquet, pharetra quam vitae, finibus
						turpis. Morbi lacinia libero turpis, vel fringilla risus cursus id. Sed convallis nisi et fringilla sodales.
					</p>
				</div>
				<div>
					<h6>What do I like to build?</h6>
					<p>
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae faucibus lacus, a aliquam sapien.
						Curabitur in sagittis urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus. Donec lobortis vestibulum lacus quis faucibus. Nunc elementum ut lacus eget congue. Praesent
						non rhoncus velit. Quisque tincidunt vel nisi ut tincidunt. In ac mi aliquet, pharetra quam vitae, finibus
						turpis. Morbi lacinia libero turpis, vel fringilla risus cursus id. Sed convallis nisi et fringilla sodales.
					</p>
				</div>
				<div>
					<h6>How do I like to build?</h6>
					<p>
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae faucibus lacus, a aliquam sapien.
						Curabitur in sagittis urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus. Donec lobortis vestibulum lacus quis faucibus. Nunc elementum ut lacus eget congue. Praesent
						non rhoncus velit. Quisque tincidunt vel nisi ut tincidunt. In ac mi aliquet, pharetra quam vitae, finibus
						turpis. Morbi lacinia libero turpis, vel fringilla risus cursus id. Sed convallis nisi et fringilla sodales.
					</p>
				</div>
				<div>
					<h6>What do I want to do?</h6>
					<p>
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae faucibus lacus, a aliquam sapien.
						Curabitur in sagittis urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus. Donec lobortis vestibulum lacus quis faucibus. Nunc elementum ut lacus eget congue. Praesent
						non rhoncus velit. Quisque tincidunt vel nisi ut tincidunt. In ac mi aliquet, pharetra quam vitae, finibus
						turpis. Morbi lacinia libero turpis, vel fringilla risus cursus id. Sed convallis nisi et fringilla sodales.
					</p>
				</div>
			</div>

      <div className="grid grid-cols-4" id="contact_section">
        <div id="linkedIn">
          <a href="https://www.linkedin.com/in/clinton-cochrane" target="_blank">LinkedIn</a>

        </div>
        <div id="email"></div>
        <a href="mailto:clinton.edward.cochrane@gmail.com" target="_blank">email me</a>
        <div id= "github">
          <a href="https://www.github.com/clinton-cochrane" target="_blank">Github</a>
        </div>
      </div>
		</div>
	);
}
