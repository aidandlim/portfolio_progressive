import React from 'react';

const Up = () => {
    return (
        <form name='signup'>
            <p>이메일</p>
            <input type='email' name='email' />
            <p>비밀번호</p>
            <input type='password' name='password' />
            <p>비밀번호 확인</p>
            <input type='password' name='confirm' />
            <p>성명</p>
            <input type='text' name='name' />
            <p>회사명</p>
            <input type='text' name='company' />
            <p>부서명</p>
            <input type='text' name='department' />
            <p>직책</p>
            <input type='text' name='position' />
            <button type='submit'>회원가입</button>
        </form>
    );
}

export default Up;