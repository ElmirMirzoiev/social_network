import s from "./Messages.module.css";
import React from "react";

function MessageItem(props) {
    return (
        <div className={s.message_item}>{props.message}</div>
    );
}

export default MessageItem;