import React from 'react';

import { useDispatch } from 'react-redux';
import { user_data } from '../../../actions';

import { signout } from '../../axios';

import './index.css';

const Setting = () => {
	const dispatch = useDispatch();

	const _handleSignout = () => {
		signout(() => {
			dispatch(user_data({}));
		});
	}

	return (
		<div className='setting'>
			<button onClick={_handleSignout}>로그아웃</button>
		</div>
	);
}

export default Setting;
