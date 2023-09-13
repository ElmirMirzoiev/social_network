import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setFriendsThunk} from "../../../store/Reducers/friendsReducer";
import Friends from "./Friends/Friends";

const FriendsContainer = () => {

    const dispatch = useDispatch()
    const {...friendsPage} = useSelector(state => state.friendsPage)

    useEffect(() => {
        dispatch(setFriendsThunk())
    }, [dispatch]);


    return (
        <Friends {...friendsPage}/>
    );
};

export default FriendsContainer;