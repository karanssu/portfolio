export default function Home() {
	return (
		<div className="md:flex h-screen bg-gray-800 text-gray-100 font-sans p-5">
			<div className="md:flex-col w-full md:p-10">
				<div className="mb-5 md:mb-20">
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

				<div className="hidden md:block text-xl mb-10">
					<div className={`text-white flex`}>
						<div className="mr-2">----</div>
						<div>About</div>
					</div>
					<div className={`text-gray-400`}>Projects</div>
				</div>

				<div className="md:mb-80">
					<div>Hire me</div>
				</div>

				<div>
					<div>Github</div>
					<div>Linked In</div>
					<div>Gmail</div>
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
