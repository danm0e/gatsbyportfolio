import React from 'react';
import PropTypes from 'prop-types';
import PageContent from '@components/PageContent'

import { Item } from './styles'

const BlogListItem = ({ item, currentPage }) => {
	const { title, excerpt, slug, date } = item
	const prev = { prev: currentPage }

	return (
		<Item
			to={`/blog/${slug}`}
			state={prev}
		>
			<h3>{title}</h3>
			<h6>{date}</h6>
			<PageContent content={excerpt} />
		</Item>
	);
};

BlogListItem.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string.isRequired,
		excerpt: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired
	}),
	currentPage: PropTypes.object.isRequired
};

export default BlogListItem;