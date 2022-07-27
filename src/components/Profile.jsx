import React from 'react';
import classes from './css-modules/Profile.module.css';

function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <div>
                    <img src="https://www.popsci.com/uploads/2020/06/05/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg" alt="profile-background" />
                </div>
                ava + desc
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    post 1
                </div>
                <div className={classes.item}>
                    post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;