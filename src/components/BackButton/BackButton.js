import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, BackBtn } from './styles'

const BackButton = ({ url }) => {
	return (
		<Wrapper>
			<BackBtn to={url}>
				Back
			</BackBtn>
		</Wrapper>
	);
};

BackButton.propTypes = {
	url: PropTypes.string.isRequired
};

export default BackButton;