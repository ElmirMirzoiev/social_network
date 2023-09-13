import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import messagesReducer from "./Reducers/messagesReducer";
import profileReducer from "./Reducers/profileReducer";
import usersReducer from "./Reducers/userReducer";
import authReducer from "./Reducers/authReducer";
import friendsReducer from "./Reducers/friendsReducer";


const rootReducer = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    friendsPage: friendsReducer,
    auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;
export default store;
