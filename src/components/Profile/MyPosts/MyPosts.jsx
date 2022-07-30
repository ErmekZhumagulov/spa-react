import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
            <div className={classes.posts}>
                <Post massage='Hi! How are you?' like='14' />
                <Post massage="It's my first post" like='23' />
            </div>
        </div>
    );
}

export default MyPosts;