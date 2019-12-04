import React from 'react';

import './index.css';

const User = () => {
	return (
		<div className='user'>
            <div className='user-picture'></div>
            <div className='user-company'>에스엠컨설팅그룹</div>
            <div className='user-department'>솔루션개발사업부</div>
            <div className='user-title'>
                <div className='user-position'>팀장</div>
                <div className='user-name'>임동섭</div>
            </div>
		</div>
	);
}

export default User;
