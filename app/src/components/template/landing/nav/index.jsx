import React from 'react';

const Nav = ({ setLandingStatus }) => {
    return (
        <div className='landing-navigation'>
            <div className='landing-status' onClick={ () => setLandingStatus(0) }>로그인</div>
            <div className='landing-status' onClick={ () => setLandingStatus(1) }>회원가입</div>
            <div className='landing-status' onClick={ () => setLandingStatus(2) }>비밀번호 찾기</div>
        </div>
    );
}

export default Nav;