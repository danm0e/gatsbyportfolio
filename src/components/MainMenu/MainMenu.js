import React from 'react';
import PropTypes from "prop-types"

import { MenuItem } from "./styles"

const MainMenu = ({ items }) => (
	items.map(item => {
		const { title, object_slug: url } = item

		return (
			<MenuItem to={url} key={title}>
				{title}
			</MenuItem>
		)
	})
)

MainMenu.propTypes = {
	items: PropTypes.array.isRequired,
}

export default MainMenu