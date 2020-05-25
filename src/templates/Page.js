import React from 'react';

import Layout from '../Layout'

const Page = ({ pageContext }) => {
	const { title } = pageContext

	return (
		<Layout>
			<h1>{ title }</h1>
			<p>Page content</p>
		</Layout>
	);
};

export default Page;