import { combineReducers } from 'redux';

import chatsReducer from './chatsReducer';
import messagesReducer from './MessagesReducer';

const allReducers = combineReducers({
    chatsReducer,
    messagesReducer
});

export default allReducers;