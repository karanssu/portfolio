import Head from "next/head";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
	return (
		<div className="bg-gray-100 min-h-screen">
			<Head>
				<title>My Portfolio</title>
				<meta name="description" content="Software Developer Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="bg-blue-600 text-white p-4 text-center">
				<h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
				<p className="mt-2">Software Developer | Full-Stack Enthusiast</p>
			</header>

			<main className="p-6">
				<section id="about" className="mb-10">
					<h2 className="text-2xl font-bold mb-2">About Me</h2>
					<p className="text-gray-700">
						Hi! I am a passionate software developer. I love building dynamic
						and interactive web applications.
					</p>
				</section>

				<section id="projects">
					<h2 className="text-2xl font-bold mb-2">Projects</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Dynamic Project Cards */}
						<ProjectCard
							title="Project 1"
							gif="project_1.gif"
							description="A dynamic project with great features."
							github="https://github.com/username/project1"
						/>
						<ProjectCard
							title="Project 2"
							gif="project_2.gif"
							description="Another cool project."
							github="https://github.com/username/project2"
						/>
					</div>
				</section>

				<section id="contact" className="mt-10">
					<h2 className="text-2xl font-bold mb-2">Contact Me</h2>
					<p>
						LinkedIn:{" "}
						<a
							href="https://www.linkedin.com/in/your-profile"
							className="text-blue-600 underline"
						>
							Your LinkedIn
						</a>
					</p>
					<p>
						GitHub:{" "}
						<a
							href="https://github.com/username"
							className="text-blue-600 underline"
						>
							Your GitHub
						</a>
					</p>
				</section>
			</main>

			<footer className="bg-gray-800 text-white text-center p-4">
				<p>&copy; 2024 Your Name. All rights reserved.</p>
			</footer>
		</div>
	);
}
