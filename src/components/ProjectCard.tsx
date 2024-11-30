import { Project } from "../app/definations/definations";

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<a
			className="md:flex rounded-md p-2 cursor-pointer"
			href={project.link}
			target="_blank"
		>
			<div className="hidden md:block mr-4">
				<img
					className="w-50 rounded-md"
					src={project.imgUrl}
					alt={project.name}
				/>
			</div>

			<div className="flex-1 w-full h-full">
				<div className="text-titleForeground text-xl md:text-2xl font-semibold mb-2">
					{project.name}
				</div>

				<div className="text-foreground w-80 md:w-[30rem] break-words text-[1rem]">
					{project.description}
				</div>

				<div className="md:hidden mr-2 my-5">
					<img
						className="w-36 rounded-md"
						src={project.imgUrl}
						alt={project.name}
					/>
				</div>

				<div className="flex mt-3">
					{project.tools.map((tool) => (
						<div
							key={tool}
							className="rounded-full px-3 py-1 mr-2 text-background text-sm bg-hoverBackground"
						>
							{tool}
						</div>
					))}
				</div>
			</div>
		</a>
	);
}
