import Axios from 'axios';

export const Companies = (callback) => {
    Axios.get('/companies')
    .then((res) => {
        callback(res.data);
    });
}

export const Project = (id) => {
    /*
    const data = {
        id
    };

    Axios.get('/project', data)
    .then((res) => {
        return res.data;
    });
    */

    return {
        id,
        code: 'TEST-19-01',
        name: 'Test Project'
    };
}