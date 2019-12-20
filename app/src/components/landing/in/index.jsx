import React from 'react';

const In = () => {
    return (
        <form className='landing-form' name='signin'>
            <p>이메일</p>
            <input type='email' name='email' autoComplete='off' />
            <p>비밀번호</p>
            <input type='password' name='password' autoComplete='off' />
            <button type='submit'>로그인</button>
        </form>
    );
}

export default In;