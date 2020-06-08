import React from 'react';
import PropTypes from 'prop-types';
import FeaturedImage from "@components/FeaturedImage"

import { Card } from './styles'

const PortfolioItem = ({ item }) => {
	const { title, excerpt, slug, featured_media: { source_url: thumbnail } } = item

	return (
		<Card
			to={`/projects/${slug}`}
			state={{ prev: '/projects' }}
		>
			<h3>{title}</h3>
			<FeaturedImage src={thumbnail} alt='Thumbnail' />
			<div dangerouslySetInnerHTML={{ __html: excerpt }} />
		</Card>
	)
}

PortfolioItem.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string.isRequired,
		excerpt: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		featured_media: PropTypes.shape({
			source_url: PropTypes.string.isRequired
		})
	})
}

export default PortfolioItem;