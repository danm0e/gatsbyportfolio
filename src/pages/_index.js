import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "@layout"
import PageContent from "@components/PageContent"

const HomePage = () => {
	const { allWordpressPage: { edges: PAGE_DATA } } = useStaticQuery(
		graphql`
			query {
				allWordpressPage {
					edges {
						node {
							id,
							title,
							content
						}
					}
				}
			}
		`
	)

	return (
		<Layout>
			<PageContent data={PAGE_DATA} />
		</Layout>
	)
}

export default HomePage
