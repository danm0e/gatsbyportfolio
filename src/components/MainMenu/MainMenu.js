import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import SiteInfo from '@components/SiteInfo'

import { Wrapper, MenuItem } from "./styles"

const MainMenu = () => {
	const { allWordpressWpApiMenusMenusItems } = useStaticQuery(graphql`
		query {
			allWordpressWpApiMenusMenusItems(filter: {
				name: {
					eq: "Main Menu" # return only this menu
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
		<Wrapper>
			<SiteInfo />

			{items.map(item => {
				const { title, object_slug: url } = item

				return (
					<MenuItem to={url} key={title}>
						{title}
					</MenuItem>
				)
			})}
		</Wrapper>
	)
};

export default MainMenu