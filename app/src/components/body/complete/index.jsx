import React, { useEffect } from 'react';

import { getProjects } from '../../axios';

import './index.css';

const Complete = () => {
	useEffect(() => {
		getProjects(1, (res) => {
			console.log(res);
		});
	}, []);

	return (
		<div className='complete'>
			<div className='body-header'>완료된 프로젝트</div>
		</div>
	);
}

export default Complete;
