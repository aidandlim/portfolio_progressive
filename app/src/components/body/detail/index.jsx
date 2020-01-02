import React, { useState, useEffect } from 'react';

import queryString from 'query-string';

import { getProject, getProgresses } from '../../axios';

import Form from '../form';

import './index.css';

const Detail = ({ location }) => {
	const { pid } = queryString.parse(location.search);
	const [ project, setProject ] = useState({});
	const [ progresses, setProgresses ] = useState([]);

	useEffect(() => {
		if (pid !== undefined)
			getProject(pid, (res) => {
				setProject(res);
			});
			getProgresses(pid, (res) => {
				setProgresses(res);
			});
	}, [pid]);

	const formData = {
		name: 'project',
		elements: [
			{
				title: '프로젝트 코드',
				type: 'text',
				name: 'code',
				isRequired: true,
				value: project.code,
				isDetail: true,
			},
			{
				title: '프로젝트명',
				type: 'text',
				name: 'name',
				isRequired: true,
				value: project.name,
				isDetail: true,
			},
			{
				title: '프로젝트 정보 (문자형)',
				type: 'text',
				name: 'info1',
				isRequired: false,
				value: project.info1,
				isDetail: true,
			},
			{
				title: '프로젝트 정보 (숫자형)',
				type: 'number',
				name: 'info2',
				isRequired: false,
				value: project.info2,
				isDetail: true,
			},
			{
				title: '프로젝트 정보 (일자형)',
				type: 'date',
				name: 'info3',
				isRequired: false,
				value: project.info3,
				isDetail: true,
			},
			{
				title: '프로젝트 정보 (시간형)',
				type: 'time',
				name: 'info4',
				isRequired: false,
				value: project.info4,
				isDetail: true,
			},
			{
				title: '프로젝트 정보 (노트형)',
				type: 'textarea',
				name: 'info5',
				isRequired: false,
				value: project.info5,
				isDetail: true,
			},
			{
				title: '관리자',
				type: 'people',
				name: 'manager',
				isRequired: false,
				users: project.managers,
				isDetail: true,
			},
			{
				title: '담당자',
				type: 'people',
				name: 'client',
				isRequired: false,
				users: project.clients,
				isDetail: true,
			},
		]
	}

	return (
		<div className='detail'>
			<div className='body-header'>프로젝트 조회</div>
			<div className='body-description'>프로젝트 상세 정보를 조회합니다.</div>
			<Form formData={formData} />
			<div className='body-header'>진행상황 조회</div>
			<div className='body-description'>해당 프로젝트의 모든 진행상황 정보를 조회합니다.</div>
			{
				progresses.map((progress, index) => (
					progress.type === 0 
					? 
					<div key={index}>{progress.content}</div>
					:
					<div key={index}>{progress.content}</div>
				)
			)}
		</div>
	);
}

export default Detail;
