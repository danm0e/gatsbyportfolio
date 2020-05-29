import React from 'react';
import Layout from "@layout"
import PageContent from '@components/PageContent'
import BlogList from "@components/BlogList"

const BlogPage = ({ pageContext }) => {
	const { title, content } = pageContext

	return (
		<Layout>
			<h1>{title}</h1>
			<PageContent content={content} />
			<BlogList />
		</Layout>
	);
};

export default BlogPage;