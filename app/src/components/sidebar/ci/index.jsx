import React from 'react';

import { useSelector } from 'react-redux';

import './index.css';

const CI = () => {
	const user = useSelector(state => state.user);

	return (
		<div className='ci'>
			<div className='ci-title'>PROGRESSIVE</div>
			<div className='ci-auth'>for&nbsp;
				{ user.data.auth === 0 ? 'CLIENT' : '' }
				{ user.data.auth === 1 ? 'MANAGER' : '' }
				{ user.data.auth === 2 ? 'ADMIN' : '' }
			</div>
		</div>
	);
}

export default CI;
