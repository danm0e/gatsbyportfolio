import React from 'react';
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

export default BlogListItem;