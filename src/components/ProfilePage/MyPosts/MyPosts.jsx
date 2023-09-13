import React from 'react';
import {useDispatch} from "react-redux";
import {addPost, updatePostText} from "../../../store/Reducers/profileReducer";
import Post from './Post/Post';
import s from './MyPosts.module.css'


const MyPosts = ({postData, newPostText}) => {


    const dispatch = useDispatch();
    const postElement = postData.map(post => <Post key={post.id}
                                                   img={post.img}
                                                   message={post.message}
                                                   likesCount={post.likesCount}/>)


    const addNewPost = () => {
        dispatch(addPost());
    }

    const onPostChange = (e) => {
        dispatch(updatePostText(e.target.value)
        )
    }

    return (
        <div className={s.MyPosts}>
            <h2> My posts </h2>
            <div>
                <textarea className={s.input}
                          placeholder='Enter your message'
                          value={newPostText}
                          onChange={onPostChange}/>
            </div>

            <span>
                <button onClick={addNewPost} className={s.btn}>Add</button>
            </span>
            <span>
                <button className={s.btn}>Remove</button>
            </span>
            <div className={s.postItem}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts;