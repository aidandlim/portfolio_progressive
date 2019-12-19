const ui = {
    nav: 0,
    isCardMode: false
}

const uiReducer = (state = ui, action) => {
    switch (action.type) {
        case 'UI_NAV':
            return Object.assign({}, state, {
                nav: action.payload
            });
        case 'UI_ISCARDMODE':
            return Object.assign({}, state, {
                isCardMode: action.payload
            });
        default:
            return state;
    }
}

export default uiReducer;