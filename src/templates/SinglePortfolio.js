import React from 'react';
import Layout from "@layout"
import BackButton from '@components/BackButton'
import FeaturedImage from "@components/FeaturedImage"
import PageContent from '@components/PageContent'

const SinglePortfolio = ({ pageContext, location }) => {
	const { title, content, featured_media: { source_url: thumbnail } } = pageContext
	const { state: { prev } } = location

	return (
		<Layout>
			<h1>{title}</h1>
			<BackButton url={prev} />
			<FeaturedImage src={thumbnail} alt='Thumbnail' />
			<PageContent content={content} />
		</Layout>
	);
};

export default SinglePortfolio;