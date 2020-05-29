import React from 'react';
import Layout from "@layout"
import PageContent from '@components/PageContent'
import PortfolioGrid from "@components/PortfolioGrid"

const PortfolioPage = ({ pageContext }) => {
	const { title, content } = pageContext

	return (
		<Layout>
			<h1>{title}</h1>
			<PageContent content={content} />
			<PortfolioGrid />
		</Layout>
	);
};

export default PortfolioPage;