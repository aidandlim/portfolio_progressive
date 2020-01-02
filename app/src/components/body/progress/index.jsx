import React, { useState, useEffect } from 'react';

import { getProjectsByUserId, postProgress } from '../../axios';

import Form from '../form';

import './index.css';

const Progress = ({ history }) => {
	const [ projects, setProjects ] = useState([]);

	useEffect(() => {
		getProjectsByUserId(1, (res) => {
			setProjects(res);
		});
	}, []);

	const _handleForm = (event) => {
		event.preventDefault();
		postProgress(1, (res) => {
			if(res.status === 7) {
				alert('진행상황 등록 완료!');
				history.push('/');
			} else {
				alert('진행상황 등록 실패!');
			}
		});
	}

	const formData = {
		name: 'progress',
		onSubmit: _handleForm,
		elements: [
			{
				title: '프로젝트',
				type: 'select',
				name: 'project',
				projects: projects,
				isRequired: true,
			},
			{
				title: '진행상황',
				type: 'textarea',
				name: 'content',
				isRequired: true,
			},
		]
	}

	return (
		<div className='progress'>
			<div className='body-header'>새로운 진행상황 생성</div>
			<div className='body-description'>프로젝트 진행상황 정보를 입력합니다. 미디어(사진 및 동영상) 데이터는 데모버전에서 지원하지 않습니다.</div>
			<Form formData={formData} />
		</div>
	);
}

export default Progress;
