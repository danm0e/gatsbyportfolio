import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Layout from "@layout"
import PageContent from "@components/PageContent"
import BlogList from "@components/BlogList"
import Pagination from "@components/Pagination"

const BlogPage = ({ pageContext }) => {
	const { allWordpressPage: { nodes: pageForPostsContext } } = useStaticQuery(graphql`
		query {
			allWordpressPage(filter: { wordpress_id: { eq: 31 } }) { # pageForPostsId = 31
				nodes {
					id
					title
					content
				}
			}
		}		
	`)

	const { title, content } = pageForPostsContext[0]
	const { currentPage, numPages, posts } = pageContext

	return (
		<Layout>
			<h1>{title}</h1>
			<PageContent content={content} />
			<BlogList data={posts} />
			<Pagination numPages={numPages} currentPage={currentPage} slug="/blog" />
		</Layout>
	);
};

export default BlogPage;