import React from 'react';
import s from './Posts.module.css';

const   Posts = (props) => {
    return (
        <div className={s.item}>
            <img src="https://static.tildacdn.com/tild3739-6264-4166-b438-626535346335/image.png"
    alt=""/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
};

export default Posts;