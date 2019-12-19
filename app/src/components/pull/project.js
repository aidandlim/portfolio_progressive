// import Axios from 'axios';

const project = ({ id }) => {
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

export default project;