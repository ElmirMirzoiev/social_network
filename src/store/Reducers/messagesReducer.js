import {ADD_MESSAGE, UPDATE_MESSAGE_TEXT} from "../types";

let initialState = {
    newMessageText: '',
    dialogsData: [
        {id: 1, name: "Steve"},
        {id: 2, name: "Bill"},
        {id: 3, name: "Steve"},
        {id: 4, name: "Mark"},
        {id: 5, name: "Linus"}
    ],
    messageBody: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "So?"},
        {id: 4, message: "What?"},
        {id: 5, message: "Why?"}
    ]
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText
            };
            let newName = {
                id: 7,
                name: 'Steve'
            };
            return {
                ...state,
                newMessageText: '',
                messageBody: [...state.messageBody, newMessage],
                dialogsData: [...state.dialogsData, newName]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
};
export const updateMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newMessageText: text
    }
};

export default messagesReducer;