import React from 'react';
import PropTypes from 'prop-types';
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

BlogList.propTypes = {
	data: PropTypes.array.isRequired,
	currentPage: PropTypes.number.isRequired
};

export default BlogList;