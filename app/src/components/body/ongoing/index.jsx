import React, { useEffect } from 'react';

import { getProjects } from '../../axios';

import './index.css';

const Ongoing = () => {
	useEffect(() => {
		getProjects(0, (res) => {
			console.log(res);
		});
	}, []);

	return (
		<div className='ongoing'>
			<div className='body-header'>진행 중인 프로젝트</div>
		</div>
	);
}

export default Ongoing;
