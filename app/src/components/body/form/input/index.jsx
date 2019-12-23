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
        <label className={className}>
            <p className='body-form-title'>{element.title} {element.isRequired ? '*' : null}</p>
            { inputList.indexOf(element.type) > -1 ? <input className='body-form-input' type={element.type} name={element.name} required={element.isRequired ? 'required' : ''} /> : null }
            { element.type === 'textarea' ? <textarea className='body-form-textarea' name={element.name}></textarea> : null }
            { element.type === 'people' ? 
                <div>
                    people list
                </div>
            : null }
        </label>
    );
}

export default Input;