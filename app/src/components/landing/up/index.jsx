import React, { useState, useEffect } from 'react';

import { getCompanies, signup } from '../../axios';

const Up = ({ setLandingStatus }) => {
    const [ companies, setCompanies ] = useState([]);
    
    useEffect(() => {
        getCompanies((res) => {
            setCompanies(res);
        });
    }, []);

    const _handleForm = (event) => {
        event.preventDefault();

        signup((res) => {
            if(res.status === 7) {
                alert('회원가입이 완료되었습니다.');
                setLandingStatus(0);
            } else {
                alert('해당 이메일로 회원 정보가 이미 존재합니다.');
            }
        });
    }

    return (
        <form className='landing-form' name='signup' onSubmit={_handleForm}>
            <p>이메일</p>
            <input type='email' name='email' autoComplete='off' required/>
            <p>비밀번호</p>
            <input type='password' name='password' autoComplete='off' required/>
            <p>비밀번호 확인</p>
            <input type='password' name='confirm' autoComplete='off' required/>
            <p>성명</p>
            <input type='text' name='name' autoComplete='off' required/>
            <p>회사명</p>
            <select name='company'>
                <option value='-1'>선택</option>
                {companies.map((company, index) => 
                    <option key={index} value={company.id}>{company.name}</option>    
                )}
            </select>
            <p>부서명</p>
            <input type='text' name='department' autoComplete='off' />
            <p>직책</p>
            <input type='text' name='position' autoComplete='off' />
            <button type='submit'>회원가입</button>
        </form>
    );
}

export default Up;