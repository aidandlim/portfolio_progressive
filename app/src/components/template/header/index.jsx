import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Menu from '../../unit/menu';
import Searchbar from '../../unit/searchbar';

import './index.css';

const Header = () => {
	const [nav, setNav] = useState(0);
	const menus = [{
			title: '전체 프로젝트',
			route: '/'
		},
		{
			title: '진행 프로젝트',
			route: '/ongoing'
		},
		{
			title: '완료 프로젝트',
			route: '/complete'
		}
	];

	const _handleNav = (index) => {
		setNav(index);
	}

	return (
		<div className='header'>
			{menus.map((menu, index) => 
				<Link to={menu.route} onClick={() => _handleNav(index)} key={index}>
					<Menu index={index} nav={nav} title={menu.title} />
				</Link>
			)}
			<Searchbar />
		</div>
	);
}

export default Header;
