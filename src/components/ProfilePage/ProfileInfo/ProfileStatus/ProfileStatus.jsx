import React, {useState} from 'react';
import {useSelector} from "react-redux";

const ProfileStatus = () => {

    const [status, setStatus] = useState('');
    const [editMode, setEditMode] = useState(false);
    const userStatus = useSelector(state => state.profilePage.userStatus);

    const activateEditMode = () => {
        setEditMode(true)
    };
    const onStatusChanged = (event) => {
        setStatus(event.target.value)
    };

    return (
        <>
            {
                !editMode

                    ? <span onClick={activateEditMode}> {!userStatus ? 'No status available' : userStatus} </span>

                    : <input onChange={onStatusChanged}
                             value={status}
                             autoFocus={true}
                             onBlur={() => setEditMode(false)}/>
            }
        </>
    );
};

export default ProfileStatus;