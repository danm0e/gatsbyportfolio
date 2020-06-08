import React from 'react';
import PropTypes from "prop-types"

import { Wrapper, Title, Tagline } from "./styles"

const SiteInfo = ({ meta }) => {
	const { name, description } = meta

	return (
		<Wrapper>
			<Title to="/">{name}</Title>
			<Tagline>{description}</Tagline>
		</Wrapper>
	);
};

SiteInfo.propTypes = {
	meta: PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	}),
}

export default SiteInfo;