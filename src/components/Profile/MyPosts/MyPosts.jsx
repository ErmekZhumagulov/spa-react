import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let postsElements = props.posts.map(post => <Post message={post.message} like={post.like} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
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