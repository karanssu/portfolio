import Image from "next/image";

export default function Home() {
	return (
		<div className="md:flex h-screen bg-background text-foreground font-sans p-5">
			<div className="md:flex-col w-full md:p-10">
				<div className="mb-8 md:mb-10">
					<div className="text-5xl mb-2 md:text-7xl font-semibold text-titleForeground">
						Karan Patel
					</div>
					<div className="text-2xl mb-3 md:text-3xl font-semibold text-titleForeground">
						Software Engineer
					</div>
					<div className="md:text-lg md:w-96 font-semibold">
						I build elegant, efficient, and meaningful solutions—because coding
						isn’t just what I do, it’s what I love.
					</div>
				</div>

				<div className="mb-10 md:mb-20">
					<a
						className="inline-flex py-2 px-6 bg-titleForeground text-background text-lg font-bold rounded-full p-1 cursor-pointer hover:bg-hoverBackground"
						href="mailto:karanpatel4182@gmail.com"
						target="_blank"
					>
						<span className="mr-3">Hire Me</span>
						<Image width={28} height={28} src={"hire.svg"} alt="Hire Me Icon" />
					</a>
				</div>

				<div className="hidden md:block text-xl mb-40">
					<div className={`text-titleForeground flex`}>
						<div className="mr-2">----</div>
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

			<div className="md:flex-col w-full bg-orange-500">
				<div>
					<div className="md:hidden">About</div>
					<div>About Description ....</div>
				</div>

				<div>
					<div className="md:hidden">Projects</div>
					<div>Project Card here ...</div>
					<div>Project Card here ...</div>
				</div>
			</div>
		</div>
	);
}
