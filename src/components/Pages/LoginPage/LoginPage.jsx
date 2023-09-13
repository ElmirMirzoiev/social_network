import React from 'react';
import AuthForm from "./AuthForm/AuthForm";
import styles from './LoginPage.module.scss';

const LoginPage = () => {

    return (
        <div className={styles.authContainer}>
            <h1>Login Page</h1>
            <h4>Please enter your data</h4>
            <div className={styles.authBlock}>
                <AuthForm/>
            </div>
        </div>
    );
};

export default LoginPage;
