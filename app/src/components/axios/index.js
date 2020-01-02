import Axios from 'axios';

/******************************************** AUTH ********************************************/

export const check = (callback) => {
    Axios.get('/auth')
    .then((res) => {
        callback(res.data);
    })
    .catch(() => {
        callback(0);
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

export const signout = (callback) => {
    Axios.get('/auth/out')
    .then(() => {
        callback();
    });
}

/******************************************** COMPANIES ********************************************/

export const getCompanies = (callback) => {
    Axios.get('/companies')
    .then((res) => {
        callback(res.data);
    });
}

/******************************************** USERS ********************************************/

export const getUsers = (callback) => {
    Axios.get('/users')
    .then((res) => {
        callback(res.data);
    });
}

/******************************************** PROJECTS ********************************************/

export const getProject = (callback) => {
    Axios.get('/project')
    .then((res) => {
        callback(res.data);
    });
}

export const getProjects = (type, callback) => {
    const data = {
        isCompleted: type
    }

    Axios.get('/projects', { params: data })
    .then((res) => {
        if(res.data === null)
            callback([]);
        else
            callback(res.data);
    });
}

export const postProject = (callback) => {

    let managers = [];
    let getManagers = document.project.manager;

    for (let i = 0; i < getManagers.length; i++) {
        if(getManagers[i].checked)
            managers.push({ id: getManagers[i].value });
    }

    let clients = [];
    let getClients = document.project.client;

    for (let i = 0; i < getClients.length; i++) {
        if(getClients[i].checked)
            clients.push({ id: getManagers[i].value });
    }

    const data = {
        code: document.project.code.value,
        name: document.project.name.value,
        info1: document.project.info1.value,
        info2: document.project.info2.value,
        info3: document.project.info3.value,
        info4: document.project.info4.value,
        managers: managers,
        clients: clients,
    }

    Axios.post('/project', data)
    .then((res) => {
        callback(res.data);
    });
}

export const deleteProject = (id, callback) => {
    const data ={
        id: id
    }

    Axios.delete('/project', {params: data})
    .then((res) => {
        callback(res.data);
    });
}