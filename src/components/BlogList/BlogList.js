import React from 'react';
import BlogListItem from './BlogListItem';

import { Wrapper } from './styles'

const BlogList = ({ data, currentPage }) => (
	<Wrapper>
		{data.map(blog => {
			const { node, node: { id } } = blog

			return (
				<BlogListItem
					key={id}
					item={node}
					currentPage={currentPage}
				/>
			)
		})}
	</Wrapper>
)

export default BlogList;