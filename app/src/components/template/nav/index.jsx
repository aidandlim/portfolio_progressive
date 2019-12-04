import React from 'react';

import CI from '../../unit/ci';
import User from '../../unit/user';

import './index.css';

const Nav = () => {
	return (
		<div className='nav'>
			<CI />
			<User />
		</div>
	);
}

export default Nav;
