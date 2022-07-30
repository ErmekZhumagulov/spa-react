import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/1' className={navData => navData.isActive ? classes.active : classes.dialog}>Gektor</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2' className={navData => navData.isActive ? classes.active : classes.dialog}>Kesha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3' className={navData => navData.isActive ? classes.active : classes.dialog}>Jeka</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi! All good?</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>What are you doing?</div>
            </div>
        </div>
    );
}

export default Dialogs;