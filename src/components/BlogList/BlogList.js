import React from 'react';
import BlogListItem from './BlogListItem';

import { Wrapper } from './styles'

const BlogList = ({ data }) => (
	<Wrapper>
		{data.map(blog => {
			const { node, node: { id } } = blog

			return <BlogListItem item={node} key={id} />
		})}
	</Wrapper>
)

export default BlogList;