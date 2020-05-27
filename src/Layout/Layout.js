import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import GlobalStyles, { Container } from "@assets/styles"
import MainMenu from "@components/MainMenu"

const Layout = ({ children }) => (
	<>
		<Helmet>
			<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800italic,800" rel="stylesheet" />
		</Helmet>

		<GlobalStyles />

		<MainMenu />

		<Container>
			{children}
		</Container>
	</>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
