import React from 'react';

const Fp = () => {
    return (
        <form name='forgot'>
            <p>이메일</p>
            <input type='email' name='email' />
            <button type='submit'>비밀번호 찾기</button>
        </form>
    );
}

export default Fp;