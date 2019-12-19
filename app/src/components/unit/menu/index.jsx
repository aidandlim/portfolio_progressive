import React from 'react';

import { useSelector } from 'react-redux';

import './index.css';

const Menu = ({index, title}) => {
	const ui = useSelector(state => state.ui);

	return (
		<div className={ui.nav === index ? 'menu-active' : 'menu'}>
            {title}
		</div>
	);
}

export default Menu;
