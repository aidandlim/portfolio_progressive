import React, { useState, useEffect } from 'react';

import { getProjects } from '../../axios';

import Table from '../table';

import './index.css';

const Complete = () => {
	const [ projects, setProjects ] = useState([]);

	useEffect(() => {
		getProjects(1, (res) => {
			setProjects(res);
		});
	}, []);

	return (
		<div className='complete'>
			<div className='body-header'>완료된 프로젝트</div>
			<div className='body-description'>완료된 프로젝트 리스트입니다. 완료된 프로젝트의 기록은 조회만 가능합니다.</div>
			<Table projects={projects} setProjects={setProjects} />
		</div>
	);
}

export default Complete;
