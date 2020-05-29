import React from 'react';
import PropTypes from 'prop-types';

const PageContent = ({ content }) => {
	return (
		<div dangerouslySetInnerHTML={{ __html: content }} />
	);
};

PageContent.propTypes = {
	content: PropTypes.string.isRequired
};

export default PageContent;