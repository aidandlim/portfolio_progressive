import React, { useState, useEffect } from 'react';

import queryString from 'query-string';

import { Project as ProjectPull } from '../../pull';

import './index.css';

const Detail = ({ location }) => {
	const [ projectDetail, setProjectDetail ] = useState({});

	useEffect(() => {
		const { p } = queryString.parse(location.search);
		
		if (p !== undefined)
			setProjectDetail(ProjectPull(p));
	}, [location.search]);

	return (
		<div className='detail'>
			{projectDetail.id}
		</div>
	);
}

export default Detail;
