import React from 'react';
import Layout from "@layout"
import BlogList from "@components/BlogList"

const BlogPage = ({ pageContext }) => {
	const { title, content } = pageContext

	return (
		<Layout>
			<h1>{title}</h1>
			<div dangerouslySetInnerHTML={{ __html: content }} />
			<BlogList />
		</Layout>
	);
};

export default BlogPage;