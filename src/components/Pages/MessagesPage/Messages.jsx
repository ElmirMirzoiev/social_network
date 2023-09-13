import React from 'react';
import s from './Messages.module.css'
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";


function Messages(props) {

    let state = props.messagesPage;

    let dialogsElement = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = state.messageBody.map(m => <MessageItem message={m.message}/>);
    let newMessageText = state.newMessageText;

    let addMessage = () => {
        props.addMessage();
    };
    let onMessageChange = (e) => {
        let text = e.target.value
        props.onMessageChange(text);
    };
    return (
        <div className={s.content}>
            <div>
                {dialogsElement}
            </div>
            <div>
                {messagesElement}
            </div>
            <div>
                <textarea className={s.input}
                    placeholder={'Enter your message'}
                          onChange={onMessageChange}
                          value={newMessageText}/>
                <button className={s.btn}
                        onClick={addMessage}> Send
                </button>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Messages;