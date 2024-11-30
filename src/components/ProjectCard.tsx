import { Project } from "../app/definations/definations";

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="bg-red-500">
			<div className="flex justify-between">
				<div className="text-xl font-semibold text-titleForeground">
					{project.name}
				</div>
				<div>
					{project.tools.map((tool: string) => (
						<div
							key={tool}
							className="mr-2 bg-titleForeground rounded-full p-1 cursor-pointer hover:bg-hoverBackground"
						>
							{tool}
						</div>
					))}
				</div>
			</div>
			<div className="text-sm text-titleForeground">{project.description}</div>
			<div className="flex justify-between">
				<div>
					<a
						className="text-sm text-titleForeground hover:text-hoverBackground"
						href={project.link}
						target="_blank"
					>
						Link
					</a>
				</div>
				<div>
					<a
						className="text-sm text-titleForeground hover:text-hoverBackground"
						href={project.imgUrl}
						target="_blank"
					>
						Image
					</a>
				</div>
			</div>
		</div>
	);
}
