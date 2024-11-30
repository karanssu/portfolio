export default function ProjectCard({ title, gif, description, github }) {
	return (
		<div className="bg-white shadow-lg rounded-lg overflow-hidden">
			<img src={gif} alt={title} className="object-cover mx-auto" />
			<div className="p-4">
				<h3 className="text-xl font-bold mb-2">{title}</h3>
				<p className="text-gray-600 mb-4">{description}</p>
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:underline"
				>
					GitHub Repo
				</a>
			</div>
		</div>
	);
}
