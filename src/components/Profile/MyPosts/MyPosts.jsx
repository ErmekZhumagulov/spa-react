import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;