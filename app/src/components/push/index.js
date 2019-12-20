import Axios from 'axios';

export const In = (callback) => {
    const data = {
        email: document.signin.email.value,
        password: document.signin.password.value,
    }

    Axios.post('/auth/in', data)
    .then((res) => {
        callback(res.data);
    });
}

export const Up = (callback) => {
    const data = {
        email: document.signup.email.value,
        password: document.signup.password.value,
        name: document.signup.name.value,
        company: document.signup.company.value,
        department: document.signup.department.value,
        position: document.signup.position.value,
    }
    
    Axios.post('/auth', data)
    .then((res) => {
        callback(res.data);
    });
}