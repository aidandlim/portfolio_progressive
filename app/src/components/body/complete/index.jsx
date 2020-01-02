import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ui_nav } from '../../../actions';

import { Link } from 'react-router-dom';

import { getProjects, deleteProject } from '../../axios';

import './index.css';

const Complete = () => {
	const [ projects, setProjects ] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		getProjects(1, (res) => {
			setProjects(res);
		});
	}, []);

	const _handleDetail = () => {
		dispatch(ui_nav(12));
	}

	const _handleModify = () => {
		dispatch(ui_nav(13));
	}

	const _handleDelete = (id) => {
		if(window.confirm('해당 프로젝트를 삭제하시겠습니까?')) {
			deleteProject(id, (res) => {
				if(res.status === 7) {
					const index = projects.findIndex((project) => project.id === id);
					if(index !== -1) {
						let result = [...projects];
						result.splice(index, 1);
						setProjects(result);
					}
				}
			});
		}
	}

	return (
		<div className='complete'>
			<div className='body-header'>완료된 프로젝트</div>
			<div className='body-description'>완료된 프로젝트 리스트입니다. 완료된 프로젝트의 기록은 조회만 가능합니다.</div>
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
					projects.length === 0 
					? <div className='body-table-body'>프로젝트가 존재하지 않습니다.</div>
					: projects.map((project, index) => 
						<div className='body-table-body' key={index}>
							<div style={{ width: '5%' }}><input type='checkbox' /></div>
							<div style={{ width: '25%' }}>{project.code}</div>
							<div style={{ width: '25%' }}>{project.name}</div>
							<div style={{ width: '10%' }}>
								{project.managers.length === 0 ? '-' : null}
								{project.managers.length === 1 ? project.managers[0].name : null}
								{project.managers.length === 2 ? `${project.managers[0].name} 등` : null}
							</div>
							<div style={{ width: '10%' }}>
								{project.clients.length === 0 ? '-' : null}
								{project.clients.length === 1 ? project.clients[0].name : null}
								{project.clients.length === 2 ? `${project.clients[0].name} 등` : null}
							</div>
							<div style={{ width: '25%' }}>
								<div className='body-table-button-container'>
									<Link className='body-table-button-detail' onClick={_handleDetail} to={`/detail?pid=${project.id}`}>상세보기</Link>
									<Link className='body-table-button-modify' onClick={_handleModify} to={`/modify?pid=${project.id}`}>수정</Link>
									<div className='body-table-button-delete' onClick={ () => _handleDelete(project.id) } >삭제</div>
								</div>
							</div>
						</div>
					)
				}
			</div>
		</div>
	);
}

export default Complete;
