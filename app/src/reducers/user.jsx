const user = {
    auth: 1,
    // 0 : user
    // 1 : manager
    // 2 : admin
    // data: {
    //     id: 0,
    //     company: '에스엠컨설팅그룹',
    //     department: '솔루션개발사업부',
    //     position: '팀장',
    //     name: '임동섭',
    // },
    data: {}
}

const userReducer = (state = user, action) => {
    switch (action.type) {
        case 'USER_AUTH':
            return Object.assign({}, state, {
                auth: action.payload
            });
        case 'USER_DATA':
            return Object.assign({}, state, {
                data: action.payload
            });
        default:
            return state;
    }
}

export default userReducer;