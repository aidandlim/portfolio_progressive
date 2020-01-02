import React, { useState, useEffect } from 'react';

import { getProjects } from '../../axios';

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
			<div className='body-table'>
				<div className='body-table-header'>
					<div style={{ width: '5%' }}>선택</div>
					<div style={{ width: '25%' }}>코드</div>
					<div style={{ width: '25%' }}>프로젝트명</div>
					<div style={{ width: '10%' }}>관리자</div>
					<div style={{ width: '10%' }}>담당자</div>
					<div style={{ width: '25%' }}>설정</div>
				</div>
				{
					projects.map((project, index) => 
						<div className='body-table-body' key={index}>
							<div style={{ width: '5%' }}><input type='checkbox' /></div>
							<div style={{ width: '25%' }}>{project.code}</div>
							<div style={{ width: '25%' }}>{project.name}</div>
							<div style={{ width: '10%' }}>{project.name}</div>
							<div style={{ width: '10%' }}>{project.name}</div>
							<div style={{ width: '25%' }}></div>
						</div>
					)
				}
			</div>
		</div>
	);
}

export default Ongoing;
