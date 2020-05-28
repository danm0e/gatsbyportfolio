import React from 'react';
import { Link } from "gatsby"

const PortfolioItem = ({ item }) => {
	const { title, excerpt, slug, featured_media: { source_url: thumbnail } } = item

	return (
		<Link to={`/projects/${slug}`}>
			<h2>{title}</h2>
			<img src={thumbnail} alt='Thumbnail' />
			<div dangerouslySetInnerHTML={{ __html: excerpt }} />
		</Link>
	);
};

export default PortfolioItem;