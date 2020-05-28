import React from 'react';
import FeaturedImage from "@components/FeaturedImage"

import { Card } from './styles'

const PortfolioItem = ({ item }) => {
	const { title, excerpt, slug, featured_media: { source_url: thumbnail } } = item

	return (
		<Card to={`/projects/${slug}`}>
			<h3>{title}</h3>
			<FeaturedImage src={thumbnail} alt='Thumbnail' />
			<div dangerouslySetInnerHTML={{ __html: excerpt }} />
		</Card>
	);
};

export default PortfolioItem;