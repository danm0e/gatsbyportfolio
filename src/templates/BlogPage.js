import React from 'react';
import Layout from "@layout"
import BlogList from "@components/BlogList"
import Pagination from "@components/Pagination"

const BlogPage = ({ pageContext }) => {
	console.log(pageContext)
	const { currentPage, numPages, posts } = pageContext

	return (
		<Layout>
			<h1>Blog</h1>
			<BlogList data={posts} />
			<Pagination numPages={numPages} currentPage={currentPage} slug="/blog" />
		</Layout>
	);
};

export default BlogPage;