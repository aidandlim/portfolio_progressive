import React from 'react';

import { useSelector } from 'react-redux';

import CI from '../../unit/ci';
import User from '../../unit/user';

import { FiPlusCircle } from 'react-icons/fi';

import './index.css';

const Sidebar = () => {
	const user = useSelector(state => state.user);

	const _handleNewProject = () => {
		document.querySelector('.new').style.display = 'block';
	}

	return (
		<div className='nav'>
			<CI />
			<User />
			{user.auth > 0 ? 
				<div className='nav-new-container' onClick={ () => _handleNewProject() }>
					<FiPlusCircle className='nav-new-icon' />
					<div className='nav-new-title'>신규 프로젝트 생성</div>
				</div>
			: ''}
		</div>
	);
}

export default Sidebar;
