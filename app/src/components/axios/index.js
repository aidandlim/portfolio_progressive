import Axios from 'axios';

export const check = (callback) => {
    Axios.get('/auth')
    .then((res) => {
        callback(res.data);
    });
}

export const signin = (callback) => {
    const data = {
        email: document.signin.email.value,
        password: document.signin.password.value,
    }

    Axios.post('/auth/in', data)
    .then((res) => {
        callback(res.data);
    });
}

export const signup = (callback) => {
    const data = {
        email: document.signup.email.value,
        password: document.signup.password.value,
        name: document.signup.name.value,
        company: document.signup.company.value,
        department: document.signup.department.value,
        position: document.signup.position.value,
    }
    
    Axios.post('/auth/up', data)
    .then((res) => {
        callback(res.data);
    });
}

export const getCompanies = (callback) => {
    Axios.get('/companies')
    .then((res) => {
        callback(res.data);
    });
}

export const getUsers = (callback) => {
    Axios.get('/users')
    .then((res) => {
        callback(res.data);
    });
}

export const signout = (callback) => {
    Axios.get('/auth/out')
    .then(() => {
        callback();
    });
}