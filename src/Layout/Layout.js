import React from "react"
import PropTypes from "prop-types"
import GlobalStyles, { Container } from "../assets/styles"
import MainMenu from "../components/MainMenu"

const Layout = ({ children }) => (
	<>
		<GlobalStyles />
		<Container>
			<MainMenu />
			{children}
		</Container>
	</>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
