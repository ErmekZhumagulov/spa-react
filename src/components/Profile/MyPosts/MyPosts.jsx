import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {

    let postsData = [
        { id: 1, message: 'Hi! How are you?', like: 14 },
        { id: 2, message: 'It\'s my first post', like: 23 }
    ]

    let postsElements = postsData.map(post => <Post message={post.message} like={post.like} />);

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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;