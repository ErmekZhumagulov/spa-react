import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <div>
                    <img src="https://www.popsci.com/uploads/2020/06/05/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg" alt="profile-background" />
                </div>
                ava + desc
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;