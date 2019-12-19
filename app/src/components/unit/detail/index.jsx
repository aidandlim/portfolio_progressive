import React, { useState, useEffect } from 'react';

import queryString from 'query-string';

import ProjectPull from '../../pull/project';

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
			{projectDetail.code}
			{projectDetail.name}
		</div>
	);
}

export default Detail;
