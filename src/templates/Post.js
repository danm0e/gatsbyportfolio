import React from 'react';

import Layout from '../Layout'

const Post = ({ pageContext }) => {
	const { title } = pageContext

	return (
		<Layout>
			<h1>{ title }</h1>
			<p>Post content</p>
		</Layout>
	);
};

export default Post;