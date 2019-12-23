import React from 'react';

import Input from './input';

const Form = ({ formData }) => {
    return (
        <form name={formData.name} onSubmit={formData.onSubmit} className='body-form'>
            { formData.elements.map((element, index) => 
                <Input key={index} element={element} />
            )}
        </form>
    );
}

export default Form;