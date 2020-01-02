import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_nav } from '../../actions';

import { Link } from 'react-router-dom';

import Menu from './menu';
import Mode from './mode';
import Search from './search';

import { FiSettings } from 'react-icons/fi';
import './index.css';

const Header = () => {
	const ui = useSelector(state => state.ui);
	const dispatch = useDispatch();

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
			dispatch(ui_nav(0));
		else if(currentLocation === '/ongoing')
			dispatch(ui_nav(1));
		else if(currentLocation === '/complete')
			dispatch(ui_nav(2));
		else if(currentLocation === '/project')
			dispatch(ui_nav(10));
		else if(currentLocation === '/progress')
			dispatch(ui_nav(11));
		else if(currentLocation === '/detail')
			dispatch(ui_nav(12));
		else if(currentLocation === '/modify')
			dispatch(ui_nav(13));
		else if(currentLocation === '/setting')
			dispatch(ui_nav(99));
		else
			dispatch(ui_nav(-1));
	}, [dispatch]);

	const _handleNav = (index) => {
		dispatch(ui_nav(index));
	}

	return (
		<div className='header'>
			{menus.map((menu, index) => 
				<Link to={menu.route} onClick={() => _handleNav(index)} key={index}>
					<Menu index={index} title={menu.title} />
				</Link>
			)}
			<Link to='/setting' onClick={() => _handleNav(99)}>
				<FiSettings className={ui.nav === 99 ? 'header-setting-active' : 'header-setting'} />
			</Link>
			<Search />
			<Mode />
		</div>
	);
}

export default Header;
