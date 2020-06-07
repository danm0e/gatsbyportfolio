import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, PageLink, PageNumber } from './styles'

const Pagination = ({ numPages, currentPage, slug }) => {
	return (
		<Wrapper>
			{Array.from({ length: numPages }, (_, i) => {
				const count = i + 1

				return (
					<PageLink
						key={`pagination-num-${count}`}
						to={`${slug}/${i === 0 ? "" : count}`}
					>
						<PageNumber isActive={currentPage === count} >
							{count}
						</PageNumber>
					</PageLink>
				)
			})}
		</Wrapper>
	);
};

Pagination.propTypes = {
	numPages: PropTypes.number.isRequired,
	slug: PropTypes.string.isRequired
};

export default Pagination;