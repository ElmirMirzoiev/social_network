import React from 'react';
import s from './Post.module.css'


function Post(props) {

    return (
        <div className={s.item}>
            <div>
                {props.img}
            </div>
            <div>
                {props.message}
            </div>
            <div>
                <button className={s.btn}>{`❤ ${props.likesCount}`}</button>
            </div>

        </div>
    );
}

export default Post;