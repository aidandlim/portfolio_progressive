import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_nav } from '../../actions';

import { Link } from 'react-router-dom';

import CI from './ci';
import User from './user';

import { FiCloud, FiUploadCloud } from 'react-icons/fi';

import './index.css';

const Sidebar = () => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	return (
		<div className='sidebar'>
			<CI />
			<User />
			{user.data.auth > 0 ? 
				<Link className='sidebar-container' to='/project' onClick={ () => dispatch(ui_nav(10)) }>
					<FiCloud className='sidebar-icon' />
					<div className='sidebar-title'>새 프로젝트 생성</div>
				</Link>
			: ''}
			<Link className='sidebar-container' to='/progress' onClick={ () => dispatch(ui_nav(11)) }>
				<FiUploadCloud className='sidebar-icon' />
				<div className='sidebar-title'>새 진행상황 생성</div>
			</Link>
		</div>
	);
}

export default Sidebar;
