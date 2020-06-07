import React from 'react';
import Layout from "@layout"
import PageContent from '@components/PageContent'
import BackButton from '@components/BackButton'

const SingleBlog = ({ pageContext, location }) => {
	const { title, content, date } = pageContext
	const { prev } = location.state // exposed by gatsby link api
	const prevPage = prev === 1 ? '/blog' : `/blog/${prev}`

	return (
		<Layout>
			<h1>{title}</h1>
			<small>{date}</small>
			<BackButton url={prevPage} />
			<PageContent content={content} />
		</Layout>
	);
};

export default SingleBlog;