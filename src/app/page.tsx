import Image from "next/image";

export default function Home() {
	return (
		<div className="md:flex h-screen bg-gray-800 text-gray-100 font-sans p-5">
			<div className="md:flex-col w-full md:p-10">
				<div className="mb-8 md:mb-10">
					<div className="text-5xl mb-2 md:text-7xl font-semibold ">
						Karan Patel
					</div>
					<div className="text-2xl mb-3 md:text-3xl font-semibold">
						Software Engineer
					</div>
					<div className="md:text-lg md:w-96 text-gray-400">
						I build elegant, efficient, and meaningful solutions—because coding
						isn’t just what I do, it’s what I love.
					</div>
				</div>

				<div className="mb-10 md:mb-20">
					<a
						className="py-2 px-8 bg-gray-100 text-gray-800 text-lg font-bold rounded-full p-1 cursor-pointer"
						href="mailto:karanpatel4182@gmail.com"
						target="_blank"
					>
						Hire Me
					</a>
				</div>

				<div className="hidden md:block text-xl mb-40">
					<div className={`text-white flex`}>
						<div className="mr-2">----</div>
						<div>About</div>
					</div>
					<div className={`text-gray-400`}>Projects</div>
				</div>

				<div className="flex mb-20 md:mb-0">
					<a
						className="mr-8 bg-gray-100 rounded-full p-1 cursor-pointer"
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
						className="mr-8 bg-gray-100 rounded-full p-1 cursor-pointer"
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
						className="mr-8 bg-gray-100 rounded-full p-1 cursor-pointer"
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
