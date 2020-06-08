import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from './PortfolioItem';

import { Grid } from './styles'

const PortfolioGrid = ({ projects }) => (
	<Grid>
		{projects.map(project => (
			<PortfolioItem item={project.node} key={project.node.id} />
		))}
	</Grid>
)

PortfolioGrid.propTypes = {
	projects: PropTypes.array.isRequired
};

export default PortfolioGrid;