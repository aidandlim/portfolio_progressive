import React from 'react';

import { useSelector } from 'react-redux';

import UserImage from '../../../resources/user.png';
import './index.css';

const User = () => {
    const user = useSelector(state => state.user);

	return (
		<div className='user'>
            <div className='user-picture' style={{
                backgroundImage: `url('${UserImage}')`
            }}></div>
            { user.data.companyName !== '' ? <div className='user-company'>{user.data.companyName}</div> : '' }
            { user.data.department !== '' ? <div className='user-department'>{user.data.department}</div> : '' }
            <div className='user-title'>
                { user.data.position !== '' ? <div className='user-position'>{user.data.position}</div> : '' }
                { user.data.name !== '' ? <div className='user-name'>{user.data.name}</div> : '' }
            </div>
		</div>
	);
}

export default User;
