import React from 'react';
import PropTypes from "prop-types"

import { FeaturedImg } from './styles'

const FeaturedImage = ({ src, alt }) => (
	<FeaturedImg src={src} alt={alt} />
)

FeaturedImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
}

export default FeaturedImage;