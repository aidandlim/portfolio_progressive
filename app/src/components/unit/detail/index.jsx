import React, { useState, useEffect } from 'react';

import queryString from 'query-string';

import './index.css';

const Detail = ({ location }) => {
	const [ projectDetail, setProjectDetail ] = useState({});

	useEffect(() => {
		const { id } = queryString.parse(location.search);
		console.log(id);
	}, [location.search]);

	return (
		<div className='detail'>
			detail
		</div>
	);
}

export default Detail;
