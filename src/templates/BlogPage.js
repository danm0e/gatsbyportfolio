import React from 'react';
import Layout from "@layout"

const BlogPage = ({ pageContext }) => {
	const { title, content } = pageContext
	console.log('BLOG', pageContext)

	return (
		<Layout>
			<h1>BLOG: {title}</h1>
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</Layout>
	);
};

export default BlogPage;