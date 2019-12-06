import React from 'react';

import './index.css';

const Menu = ({index, nav, title}) => {
	return (
		<div className={nav === index ? 'menu-active' : 'menu'}>
            {title}
		</div>
	);
}

export default Menu;
