import React from 'react';
import PropTypes from "prop-types"
import SiteInfo from '@components/SiteInfo'
import MainMenu from '@components/MainMenu';

import { Wrapper } from "./styles"

const MastHead = ({ items, meta }) => (
	<Wrapper>
		<SiteInfo meta={meta} />
		<MainMenu items={items} />
	</Wrapper>
)

MastHead.propTypes = {
	items: PropTypes.array.isRequired,
	meta: PropTypes.object.isRequired
}

export default MastHead