import Axios from 'axios';

export const In = () => {
    const data = {
        email: document.signin.email.value,
        password: document.signin.email.password,
    }
    
    Axios.post('/auth/in', data)
    .then((res) => {
        return res.data;
    });
}