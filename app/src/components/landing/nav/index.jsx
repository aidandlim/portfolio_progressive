import React from 'react';

import { FiArrowRight, FiUserPlus, FiZoomIn } from 'react-icons/fi';

const Nav = ({ landingStatus, setLandingStatus }) => {
    return (
        <div className='landing-navigation'>
            <div className={landingStatus === 0 ? 'landing-status-active' : 'landing-status'} onClick={ () => setLandingStatus(0) }>
                <FiArrowRight className='landing-status-icon' />
                <div className='landing-status-title'>로그인</div>
            </div>
            <div className={landingStatus === 1 ? 'landing-status-active' : 'landing-status'} onClick={ () => setLandingStatus(1) }>
                <FiUserPlus className='landing-status-icon' />
                <div className='landing-status-title'>회원가입</div>
            </div>
            <div className={landingStatus === 2 ? 'landing-status-active' : 'landing-status'} onClick={ () => setLandingStatus(2) }>
                <FiZoomIn className='landing-status-icon' />
                <div className='landing-status-title'>비밀번호 찾기</div>
            </div>
        </div>
    );
}

export default Nav;