import { combineReducers } from 'redux';

import ui from './ui';
import user from './user';

const rootReducers = combineReducers({
    ui,
    user
})

export default rootReducers;
