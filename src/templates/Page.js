import React from 'react';

const Page = ({ pageContext }) => {
	const { title } = pageContext

	return (
		<div>
			<h1>{ title }</h1>
		</div>
	);
};

export default Page;