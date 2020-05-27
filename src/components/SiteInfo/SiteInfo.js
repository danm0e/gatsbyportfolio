import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import { Wrapper, Title, Tagline } from "./styles"

const SiteInfo = () => {
	const { allWordpressSiteMetadata } = useStaticQuery(graphql`
		query {
			allWordpressSiteMetadata {
				edges {
					node {
						name
						description
					}
				}
			}
		}		
	`)

	const { name, description } = allWordpressSiteMetadata.edges[0].node

	return (
		<Wrapper>
			<Title to="/">{name}</Title>
			<Tagline>{description}</Tagline>
		</Wrapper>
	);
};

export default SiteInfo;