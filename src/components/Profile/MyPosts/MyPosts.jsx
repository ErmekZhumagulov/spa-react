import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {

    let postsData = [
        { id: 1, message: 'Hi! How are you?', like: 14 },
        { id: 2, message: 'It\'s my first post', like: 23 }
    ]

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
                <Post message={postsData[0].message} like={postsData[0].like} />
                <Post message={postsData[1].message} like={postsData[1].like} />
            </div>
        </div>
    );
}

export default MyPosts;