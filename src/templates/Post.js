import React from 'react';

import Layout from '../Layout'

const Post = ({ pageContext }) => {
	const { title, content } = pageContext

	return (
		<Layout>
			<h1>{title}</h1>
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</Layout>
	);
};

export default Post;