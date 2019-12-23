const user = {
    data: {}
}

const userReducer = (state = user, action) => {
    switch (action.type) {
        case 'USER_DATA':
            return Object.assign({}, state, {
                data: action.payload
            });
        default:
            return state;
    }
}

export default userReducer;