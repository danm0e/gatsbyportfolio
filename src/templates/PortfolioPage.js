import React from 'react';
import Layout from "@layout"
import PageContent from '@components/PageContent'
import PortfolioGrid from "@components/PortfolioGrid"

const PortfolioPage = ({ pageContext }) => {
	const { node: { title, content }, projects } = pageContext

	return (
		<Layout>
			<h1>{title}</h1>
			<PageContent content={content} />
			<PortfolioGrid projects={projects} />
		</Layout>
	);
};

export default PortfolioPage;