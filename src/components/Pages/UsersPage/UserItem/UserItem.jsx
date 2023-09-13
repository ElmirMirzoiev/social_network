import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from '@mui/material';
import userImg from '../../../../assets/images/user.png';
import {followUserThunk, unfollowUserThunk} from '../../../../store/Reducers/userReducer';
import styles from './/UserItem.module.scss';

const UserItem = ({users, followInProgress, dispatch}) => {


    const userElement = users.map((user) =>
        <li key={user.id} className={styles.userItem}>
            <NavLink to={'/profile/' + user.id}>
                <img alt='ava'
                     src={user.photos.small

                         ? user.photos.small

                         : userImg}
                />
            </NavLink>
            <span>{user.name}</span>
            <span>{'UniqueUrlName'}</span>

            {user.followed

                ? <Button variant="contained"
                          sx={{width: 80, margin: 1}}
                          size="small"
                          disabled={followInProgress.some(id => id === user.id)}
                          onClick={() =>
                              dispatch(unfollowUserThunk(user.id))}>
                    Unfollow </Button>

                : <Button variant="contained"
                          sx={{width: 80, margin: 1}}
                          size="small"
                          disabled={followInProgress.some(id => id === user.id)}
                          onClick={() =>
                              dispatch(followUserThunk(user.id))}>
                    Follow </Button>}
        </li>);

    return (

        <ul className={styles.usersList}>
            {userElement}
        </ul>
    );
};


export default UserItem;
