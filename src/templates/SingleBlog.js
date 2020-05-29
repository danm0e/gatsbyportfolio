import React from 'react';
import Layout from "@layout"

const SingleBlog = ({ pageContext }) => {
	const { title, content } = pageContext
	console.log('SINGLE BLOG', pageContext)

	return (
		<Layout>
			<h1>{title}</h1>
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</Layout>
	);
};

export default SingleBlog;