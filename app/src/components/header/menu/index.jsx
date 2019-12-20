import React from 'react';

import { useSelector } from 'react-redux';

const Menu = ({index, title}) => {
	const ui = useSelector(state => state.ui);

	return (
		<div className={ui.nav === index ? 'header-menu-active' : 'header-menu'}>
            {title}
		</div>
	);
}

export default Menu;
