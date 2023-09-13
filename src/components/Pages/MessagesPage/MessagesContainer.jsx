import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../store/Reducers/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        onMessageChange: (text) => dispatch(updateMessageTextActionCreator(text)),
    }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;