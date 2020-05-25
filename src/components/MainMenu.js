import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"

const MainMenu = () => {
	const { allWordpressWpApiMenusMenusItems } = useStaticQuery(graphql`
		query {
			allWordpressWpApiMenusMenusItems(filter: {
				name: {
					eq: "Main Menu" # limits the results to a specific menu name
				}
			}) {
			edges {
				node {
					name
					items {
						title
						object_slug
					}
				}
			}
		}		
	} `)

	const { items } = allWordpressWpApiMenusMenusItems.edges[0].node

	return (
		<div>
			{items.map(item => {
				const { title, object_slug } = item
				return (
					<Link to={object_slug} key={title}>
						{title}
					</Link>
				)
			})}
		</div>
	)
};

export default MainMenu