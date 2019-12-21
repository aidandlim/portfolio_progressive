import React from 'react';

import { useDispatch } from 'react-redux';
import { user_data } from '../../../actions';

import { signin } from '../../axios';

const In = () => {
    const dispatch = useDispatch();

    const _handleForm = (event) => {
        event.preventDefault();

        signin((res) => {
            dispatch(user_data(res));
        });
    }

    return (
        <form className='landing-form' name='signin' onSubmit={_handleForm}>
            <p>이메일</p>
            <input type='email' name='email' autoComplete='off' />
            <p>비밀번호</p>
            <input type='password' name='password' autoComplete='off' />
            <button type='submit'>로그인</button>
        </form>
    );
}

export default In;