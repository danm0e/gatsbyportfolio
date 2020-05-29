import React from 'react';
import Layout from "@layout"
import PortfolioGrid from "@components/PortfolioGrid"

const PortfolioPage = ({ pageContext }) => {
	const { title, content } = pageContext

	return (
		<Layout>
			<h1>{title}</h1>
			<div dangerouslySetInnerHTML={{ __html: content }} />
			<PortfolioGrid />
		</Layout>
	);
};

export default PortfolioPage;