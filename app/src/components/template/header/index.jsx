import React from 'react';

import Menu from '../../unit/menu';

import './index.css';

const Header = () => {
	return (
		<div className='header'>
			<Menu title='전체 프로젝트' />
			<Menu title='진행 프로젝트' />
			<Menu title='완료 프로젝트' />
		</div>
	);
}

export default Header;
