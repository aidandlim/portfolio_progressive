import React from 'react';

const Input = ({ element }) => {
    const inputList = ['text', 'number', 'date', 'time'];
    let className = '';

    if(inputList.indexOf(element.type) > -1) {
        className = 'body-form-label';
    } else if(element.type === 'textarea') {
        className = 'body-form-label-wide';
    } else if(element.type === 'people') {
        className = 'body-form-label-medium';
    }

    return (
        element.type === 'people' 
        ? 
        <div className={className}>
            <p className='body-form-title'>{element.title} {element.isRequired ? '*' : null}</p>
            <div className='body-form-list'>
                { element.users === undefined || element.users.length === 0 ? (element.isDetail ? '등록된 회원정보가 없습니다.' : '회원정보 로딩 중입니다.') : element.users.map((user, index) => 
                    <div className='body-form-list-element' key={index}>
                        <input className='body-form-checkbox' type='checkbox' name={element.name} value={user.id} checked={element.isDetail ? 'checked' : ''} disabled={element.isDetail ? 'disabled' : ''} />
                        <div className='body-form-checkbox-title'>{user.name}</div>
                    </div>    
                )}
            </div>
        </div>
        : 
        <label className={className}>
            <p className='body-form-title'>{element.title} {element.isRequired ? '*' : null}</p>
            { inputList.indexOf(element.type) > -1 ? <input className='body-form-input' type={element.type} name={element.name} required={element.isRequired ? 'required' : ''} defaultValue={element.value} disabled={element.isDetail ? 'disabled' : ''} /> : null }
            { element.type === 'textarea' ? <textarea className='body-form-textarea' name={element.name} defaultValue={element.value} disabled={element.isDetail ? 'disabled' : ''}></textarea> : null }
        </label>
    );
}

export default Input;