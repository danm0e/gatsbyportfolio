import React from 'react'
import PropTypes from 'prop-types'

const PageContent = ({ data }) => (
	<div>
		{ data.map( page => {
			const { id, title, content } = page.node

			return (
				<div key={id}>
					<h1>{ title }</h1>
					<div dangerouslySetInnerHTML={{ __html: content }} />
				</div>
			) })
		}
	</div>
)

PageContent.propTypes = {
	data: PropTypes.array
}

export default PageContent