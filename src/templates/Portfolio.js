import React from 'react';
import Layout from "@layout"
import FeaturedImage from "@components/FeaturedImage"

const Portfolio = ({ pageContext }) => {
	const { title, content, featured_media: { source_url: thumbnail } } = pageContext

	return (
		<Layout>
			<h1>{title}</h1>
			<FeaturedImage src={thumbnail} alt='Thumbnail' />
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</Layout>
	);
};

export default Portfolio;