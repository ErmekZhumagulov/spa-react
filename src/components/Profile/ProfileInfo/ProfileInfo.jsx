import React from 'react';
import classes from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div>
                <img className='main-profile-picture' src="https://www.popsci.com/uploads/2020/06/05/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg" alt="profile-background" />
            </div>
            <div className={classes.descriptionBlock}>
                ava + desc
            </div>
        </div>
    );
}

export default ProfileInfo;