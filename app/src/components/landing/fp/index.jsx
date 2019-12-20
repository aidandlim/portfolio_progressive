import React from 'react';

const Fp = () => {
    return (
        <form className='landing-form' name='forgot'>
            <p>이메일</p>
            <input type='email' name='email' autoComplete='off' />
            <button type='submit'>비밀번호 찾기</button>
        </form>
    );
}

export default Fp;