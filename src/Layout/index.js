import React from "react"
import PropTypes from "prop-types"

import MainMenu from "../components/MainMenu"

const Layout = ({ children }) => (
	<main>
		<MainMenu />
		{children}
	</main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
