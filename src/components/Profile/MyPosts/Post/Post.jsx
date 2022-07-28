import React from 'react';
import classes from './Post.module.css';

function Post() {
    return (
        <div className={classes.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxpj2OOGlOnaXrRmZQ0-s3nOhCBwJEFfwZQ&usqp=CAU' />
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;