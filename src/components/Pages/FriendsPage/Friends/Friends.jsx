import React from 'react';
import Button from "@mui/material/Button";
import styles from './Friends.module.scss';
import Preloader from "../../../../sharedComponents/Preloader/Preloader";

const Friends = (props) => {

    const friendElement = props.friends.map(friend => <li key={friend.id} className={styles.friendItem}>
        <img alt={'user'} src={friend.photos.large}/>
        <div className={styles.userName}>
            <span>Name:___</span>
            <span>{friend.name}</span>
        </div>
        <div className={styles.userStatus}>
            <span>Status:___</span>
            <span>{friend.status}</span>
        </div>
        <Button> unfollow </Button>
    </li>)

    return (
        <div className={styles.container}>
            {
                props.isLoading

                    ? <div className={styles.preloader}><Preloader/></div>

                    : <ul className={styles.friendsList}> {friendElement} </ul>
            }
        </div>
    );
};


export default Friends;