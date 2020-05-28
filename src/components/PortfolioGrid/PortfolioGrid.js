import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import PortfolioItem from './PortfolioItem';

import { Grid } from './styles'

const PortfolioGrid = () => {
	const { allWordpressWpProjects } = useStaticQuery(graphql`
		query {
			allWordpressWpProjects {
				edges {
					node {
						id
						title
						slug
						excerpt
						content
						featured_media {
							source_url
						}
					}
				}
			}
		}		
	`)

	return (
		<Grid>
			{allWordpressWpProjects.edges.map(project => (
				<PortfolioItem item={project.node} key={project.node.id} />
			))}
		</Grid>
	)
};

export default PortfolioGrid;