export default function BlogSection() {
	const blogs = [
		{ title: 'Latest Blog 1', link: '#' },
		{ title: 'Web Development Trends', link: '#' },
		{ title: 'React Best Practices', link: '#' },
	];

	return (
		<section className="p-8 flex items-center justify-center">
			<div className="max-w-4xl w-full">
				<h2 className="text-3xl font-bold mb-8">Latest Blogs</h2>
				<div className="space-y-4">
					{blogs.map((blog, i) => (
						<a
							key={i}
							href={blog.link}
							className="block p-4 bg-white/10 backdrop-blur-lg rounded-lg hover:bg-accent/10 transition"
						>
							{blog.title}
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
