import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import GlobalStyles, { Container } from "@assets/styles"
import MastHead from "@components/MastHead"

const Layout = ({ children }) => {
	const {
		allWordpressSiteMetadata,
		allWordpressWpApiMenusMenusItems
	} = useStaticQuery(graphql`
		query {
			allWordpressSiteMetadata {
				edges {
					node {
						name
						description
					}
				}
			}

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

	const { items: menuItems } = allWordpressWpApiMenusMenusItems.edges[0].node
	const { node: siteMeta } = allWordpressSiteMetadata.edges[0]

	return (
		<>
			<Helmet>
				<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800italic,800" rel="stylesheet" />
			</Helmet>

			<GlobalStyles />

			<MastHead
				items={menuItems}
				meta={siteMeta}
			/>

			<Container>
				{children}
			</Container>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
