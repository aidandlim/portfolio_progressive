import React from 'react';

const Up = () => {
    return (
        <form className='landing-form' name='signup'>
            <p>이메일</p>
            <input type='email' name='email' autoComplete='off' />
            <p>비밀번호</p>
            <input type='password' name='password' autoComplete='off' />
            <p>비밀번호 확인</p>
            <input type='password' name='confirm' autoComplete='off' />
            <p>성명</p>
            <input type='text' name='name' autoComplete='off' />
            <p>회사명</p>
            <input type='text' name='company' autoComplete='off' />
            <p>부서명</p>
            <input type='text' name='department' autoComplete='off' />
            <p>직책</p>
            <input type='text' name='position' autoComplete='off' />
            <button type='submit'>회원가입</button>
        </form>
    );
}

export default Up;