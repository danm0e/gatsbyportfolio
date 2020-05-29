import React from 'react';
import Layout from "@layout"
import FeaturedImage from "@components/FeaturedImage"
import PageContent from '@components/PageContent'

const SinglePortfolio = ({ pageContext }) => {
	const { title, content, featured_media: { source_url: thumbnail } } = pageContext

	return (
		<Layout>
			<h1>{title}</h1>
			<FeaturedImage src={thumbnail} alt='Thumbnail' />
			<PageContent content={content} />
		</Layout>
	);
};

export default SinglePortfolio;