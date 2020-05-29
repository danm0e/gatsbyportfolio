import React from 'react';
import Layout from "@layout"
import PageContent from '@components/PageContent'

const Page = ({ pageContext }) => {
	const { title, content } = pageContext

	return (
		<Layout>
			<h1>{title}</h1>
			<PageContent content={content} />
		</Layout>
	);
};

export default Page;