import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Messages.module.css";


function DialogItem(props) {

    const path = '/messages/' + props.id;
    const setActive = navData => navData.isActive ? s.dialog_active : s.dialog_item;

    return (
        <div>
            <NavLink to={path}
                     className={setActive}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogItem;