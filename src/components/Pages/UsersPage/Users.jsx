import React from 'react';
import {Pagination} from '@mui/material';
import {setCurrentPage} from '../../../store/Reducers/userReducer';
import Preloader from '../../../sharedComponents/Preloader/Preloader';
import UserItem from "./UserItem/UserItem";
import styles from './Users.module.scss';

const Users = (props) => {

    const pagesTotal = Math.ceil(props.totalCount / props.pageSize);

    return (<div className={styles.container}>
        <div className={styles.pagination}>
            {!props.isLoading && (<Pagination
                count={pagesTotal}
                defaultPage={1}
                page={props.currentPage}
                onChange={(_, page) =>
                    props.dispatch(setCurrentPage(page))}
                showFirstButton
                showLastButton
                shape={'rounded'}
                color={'primary'}
            />)}
        </div>
        {props.isLoading
            ? <div className={styles.preloader}>
                <Preloader/>
            </div>

            : <UserItem {...props} />}

    </div>);
};


export default Users;
