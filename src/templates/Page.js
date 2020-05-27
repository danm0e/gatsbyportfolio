import React from 'react';

import Layout from "@layout"
import Portfolio from "@components/Portfolio"

const Page = ({ pageContext }) => {
	const { title, content } = pageContext

	return (
		<Layout>
			<h1>{title}</h1>
			<div dangerouslySetInnerHTML={{ __html: content }} />
			<Portfolio />
		</Layout>
	);
};

export default Page;