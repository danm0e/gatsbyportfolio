import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import GlobalStyles, { Container } from "@assets/styles"
import MainMenu from "@components/MainMenu/MainMenu"

const Layout = ({ children }) => (
	<>
		<Helmet>
			<link href="https://fonts.googleapis.com/css2?family=Open+Sans" rel="stylesheet" />
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
