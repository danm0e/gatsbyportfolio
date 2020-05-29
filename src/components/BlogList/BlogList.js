import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import BlogListItem from './BlogListItem';

import { Wrapper } from './styles'

const BlogList = () => {
	const { allWordpressPost } = useStaticQuery(graphql`
		query {
      allWordpressPost {
        edges {
          node {
						id
						title
						slug
						excerpt
						content
						date(formatString: "ddd Do MMM Y")
          }
        }
			}
		}		
	`)

	return (
		<Wrapper>
			{allWordpressPost.edges.map(blog => (
				<BlogListItem item={blog.node} key={blog.node.id} />
			))}
		</Wrapper>
	)
};

export default BlogList;