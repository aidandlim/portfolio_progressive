import React from 'react';

import Form from '../form';

import './index.css';

const Project = () => {
	
	const _handleForm = (event) => {
		event.preventDefault();
	}

	const formData = {
		name: 'project',
		onSubmit: _handleForm,
		elements: [
			{
				title: '프로젝트 코드',
				type: 'text',
				name: 'code',
				isRequired: true,
			},
			{
				title: '프로젝트명',
				type: 'text',
				name: 'name',
				isRequired: true,
			},
			{
				title: '프로젝트 정보 (문자형)',
				type: 'text',
				name: 'info1',
				isRequired: true,
			},
			{
				title: '프로젝트 정보 (숫자형)',
				type: 'number',
				name: 'info2',
				isRequired: false,
			},
			{
				title: '프로젝트 정보 (일자형)',
				type: 'date',
				name: 'info3',
				isRequired: false,
			},
			{
				title: '프로젝트 정보 (시간형)',
				type: 'time',
				name: 'info4',
				isRequired: false,
			},
			{
				title: '프로젝트 정보 (노트형)',
				type: 'textarea',
				name: 'info5',
				isRequired: false,
			},
			{
				title: '관리자',
				type: 'people',
				name: 'manager',
				isRequired: false,
			},
			{
				title: '담당자',
				type: 'people',
				name: 'client',
				isRequired: false,
			},
		]
	}

	return (
		<div className='project'>
			<div className='body-header'>새로운 프로젝트 생성</div>
			<Form formData={formData} />
		</div>
	);
}

export default Project;
