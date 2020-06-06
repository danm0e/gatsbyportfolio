import React from 'react';
import PageContent from '@components/PageContent'

import { Item } from './styles'

const BlogListItem = ({ item }) => {
	const { title, excerpt, slug, date } = item

	return (
		<Item to={`/blog/${slug}`}>
			<h3>{title}</h3>
			<h6>{date}</h6>
			<PageContent content={excerpt} />
		</Item>
	);
};

export default BlogListItem;