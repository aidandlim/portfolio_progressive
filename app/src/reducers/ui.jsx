const ui = {
    isCardMode: false
}

const uiReducer = (state = ui, action) => {
    switch (action.type) {
        case 'UI_ISCARDMODE':
            return Object.assign({}, state, {
                isCardMode: action.payload
            });
        default:
            return state;
    }
}

export default uiReducer;