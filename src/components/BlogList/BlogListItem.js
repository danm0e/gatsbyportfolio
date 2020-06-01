import React from 'react';

import { Item } from './styles'

const BlogListItem = ({ item }) => {
	const { title, excerpt, slug, date } = item

	return (
		<Item to={`/blog/${slug}`}>
			<h3>{title}</h3>
			<h6>{date}</h6>
			<div dangerouslySetInnerHTML={{ __html: excerpt }} />
		</Item>
	);
};

export default BlogListItem;