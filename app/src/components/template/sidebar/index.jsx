import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import CI from '../../unit/ci';
import User from '../../unit/user';

import { FiPlusCircle } from 'react-icons/fi';

import './index.css';

const Sidebar = () => {
	const user = useSelector(state => state.user);

	return (
		<div className='nav'>
			<CI />
			<User />
			{user.auth > 0 ? 
				<Link className='nav-new-container' to='/new'>
					<FiPlusCircle className='nav-new-icon' />
					<div className='nav-new-title'>신규 프로젝트 생성</div>
				</Link>
			: ''}
		</div>
	);
}

export default Sidebar;
