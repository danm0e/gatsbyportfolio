import React from 'react';
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import Layout from "@layout"
import PageContent from '@components/PageContent'
import BackButton from '@components/BackButton'

const SingleBlog = ({ pageContext }) => {
	const { title, content } = pageContext
	const location = useLocation()
	const { p } = queryString.parse(location.search)
	const prevPage = p === '1' ? '/blog' : `/blog/${p}`

	return (
		<Layout>
			<h1>{title}</h1>
			<BackButton url={prevPage} />
			<PageContent content={content} />
		</Layout>
	);
};

export default SingleBlog;