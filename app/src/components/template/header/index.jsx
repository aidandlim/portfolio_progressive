import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import Menu from '../../unit/menu';
import Search from '../../unit/search';

import { FiPlus, FiSettings } from 'react-icons/fi';
import './index.css';

const Header = () => {
	const user = useSelector(state => state.user);
	const [nav, setNav] = useState(-1);
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

	useEffect(() => {
		const currentLocation = window.location.pathname;

		if(currentLocation === '/')
			setNav(0);
		else if(currentLocation === '/ongoing')
			setNav(1);
		else if(currentLocation === '/complete')
			setNav(2);
		else if(currentLocation === '/new')
			setNav(7);
		else if(currentLocation === '/setting')
			setNav(9);
		else
			setNav(-1);
	}, []);

	const _handleNav = (index) => {
		setNav(index);
	}

	return (
		<div className='header'>
			{user.auth > 0 ? 
				<Link to='/new' onClick={() => _handleNav(7)}>
					<FiPlus className={nav === 7 ? 'header-new-active' : 'header-new'} />
				</Link>	
			: ''}
			{menus.map((menu, index) => 
				<Link to={menu.route} onClick={() => _handleNav(index)} key={index}>
					<Menu index={index} nav={nav} title={menu.title} />
				</Link>
			)}
			<Link to='/setting' onClick={() => _handleNav(9)}>
				<FiSettings className={nav === 9 ? 'header-setting-active' : 'header-setting'} />
			</Link>
			<Search />
		</div>
	);
}

export default Header;
