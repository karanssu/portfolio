import Head from "next/head";
import Image from "next/image";
import { Project } from "./definations/definations";
import ProjectCard from "../components/ProjectCard";

const name = "Karan Patel";
const role = "Software Engineer";
const description = `I build elegant, efficient, and meaningful solutions—because coding isn’t just what I do, it’s what I love.`;
const aboutDescription = `I’m the developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability. Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience. In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API. In my spare time, I’m usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds K o r o k s e e d s .`;

const projects: Project[] = [
	{
		name: "Project 1",
		description:
			"Web app for visualizing personalized Spotify data. View your top aritsts, top tracks, recently plated tracks, and detailed autdio information about each track. Create and save new playlist for recoomanded tracks based on your existing playslists and more.",
		imgUrl: "project_1.png",
		link: "https://github.com",
		tools: [
			"React",
			"TypeScript",
			"TailwindCSS",
			"Spotify API",
			"Chart.js",
			"Vercel",
			"Jest",
			"React Testing Library",
			"ESLint",
		],
	},
	{
		name: "Project 2",
		description:
			"Web app for visualizing personalized Spotify data. View your top aritsts, top tracks, recently plated tracks, and detailed autdio information about each track. Create and save new playlist for recoomanded tracks based on your existing playslists and more.",
		imgUrl: "project_2.gif",
		link: "https://github.com",
		tools: [
			"React",
			"TypeScript",
			"TailwindCSS",
			"Spotify API",
			"Chart.js",
			"Vercel",
			"Jest",
			"React Testing Library",
			"ESLint",
		],
	},
	{
		name: "Project 3",
		description:
			"Web app for visualizing personalized Spotify data. View your top aritsts, top tracks, recently plated tracks, and detailed autdio information about each track. Create and save new playlist for recoomanded tracks based on your existing playslists and more.",
		imgUrl: "project_1.gif",
		link: "https://github.com",
		tools: [
			"React",
			"TypeScript",
			"TailwindCSS",
			"Spotify API",
			"Chart.js",
			"Vercel",
			"Jest",
			"React Testing Library",
			"ESLint",
		],
	},
];

export default function Home() {
	return (
		<div className="h-screen text-foreground font-sans p-5 md:flex">
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="md:flex-col w-full md:p-10">
				<div className="mb-8 md:mb-10">
					<div className="text-5xl mb-2 md:text-7xl font-semibold text-titleForeground">
						{name}
					</div>
					<div className="text-2xl mb-3 md:text-3xl font-semibold text-titleForeground">
						{role}
					</div>
					<div className="md:text-lg md:w-96 font-semibold">{description}</div>
				</div>

				<div className="mb-10 md:mb-20">
					<a
						className="inline-flex py-2 px-4 md:py-2 md:px-6 bg-hoverBackground text-background md:text-lg font-bold rounded-full p-1 cursor-pointer hover:bg-titleForeground"
						href="mailto:karanpatel4182@gmail.com"
						target="_blank"
					>
						<span className="mr-3">Hire Me</span>
						<img className="w-5 md:w-6" src={"hire.svg"} alt="Hire Me Icon" />
					</a>
				</div>

				<div className="hidden md:block text-xl mb-40">
					<div className={`text-titleForeground flex`}>
						<div className="mr-3">
							<Image
								className=""
								width={28}
								height={28}
								src={"arrow.svg"}
								alt="Right Arrow Icon"
							/>
						</div>
						<div>About</div>
					</div>
					<div className={`text-foreground`}>Projects</div>
				</div>

				<div className="flex mb-20 md:mb-0">
					<a
						className="mr-8 bg-titleForeground rounded-full p-1 cursor-pointer hover:bg-hoverBackground"
						href="https://github.com/karanssu"
						target="_blank"
					>
						<Image
							width={28}
							height={28}
							src={"github.svg"}
							alt="Github Icon"
						/>
					</a>
					<a
						className="mr-8 bg-titleForeground rounded-full p-1 cursor-pointer hover:bg-hoverBackground"
						href="https://www.linkedin.com/in/karan-patel-58b193304/"
						target="_blank"
					>
						<Image
							width={28}
							height={28}
							src={"linkedin.svg"}
							alt="Linkedin Icon"
						/>
					</a>
					<a
						className="mr-8 bg-titleForeground rounded-full p-1 cursor-pointer hover:bg-hoverBackground"
						href="mailto:karanpatel4182@gmail.com"
						target="_blank"
					>
						<Image width={28} height={28} src={"mail.svg"} alt="Mail Icon" />
					</a>
				</div>
			</div>

			<div className="md:flex-col md:p-10 md:text-lg w-full h-fit">
				<div className="mb-16 md:mb-44">
					<div className="md:hidden mb-3 text-2xl font-semibold text-titleForeground">
						About
					</div>
					<div className="font-semibold">{aboutDescription}</div>
				</div>

				<div>
					<div className="md:hidden mb-3 text-2xl font-semibold text-titleForeground">
						Projects
					</div>
					<div>
						{projects.map((project) => (
							<div key={project.name} className="mb-3 md:mb-10">
								<ProjectCard project={project} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
