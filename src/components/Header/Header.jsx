import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Button from '@mui/material/Button';
import {logOutThunk, setAuthDataThunk} from "../../store/Reducers/authReducer";
import styles from './Header.module.scss';

const Header = () => {

    const {login, isAuth} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAuthDataThunk())
    }, [dispatch, isAuth])


    return (
        <div className={styles.header}>
            {
                !isAuth
                    ? <div className={styles.isAuth}>
                        <span>Social Network </span>
                        <Link to={'/login'}> <Button>Login</Button> </Link>
                    </div>

                    : <div className={styles.isAuth}>
                        <span>{login}</span>
                        <Button onClick={dispatch(logOutThunk)}> LogOut </Button>
                    </div>

            }
        </div>
    );
};

export default Header;


