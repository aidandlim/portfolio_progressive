import React, { useState, useEffect } from 'react';

import { getProjects } from '../../axios';

import Table from '../table';

import './index.css';

const Ongoing = () => {
	const [ projects, setProjects ] = useState([]);

	useEffect(() => {
		getProjects(0, (res) => {
			setProjects(res);
		});
	}, []);

	return (
		<div className='ongoing'>
			<div className='body-header'>진행 중인 프로젝트</div>
			<div className='body-description'>현재 진행 중인 프로젝트 리스트입니다. 관리자 혹은 담당자로 지정된 프로젝트의 기록을 조회, 수정 및 삭제할 수 있습니다.</div>
			<Table projects={projects} setProjects={setProjects} />
		</div>
	);
}

export default Ongoing;
