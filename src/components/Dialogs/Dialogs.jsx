import React from 'react';
import classes from './Dialogs.module.css';

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={`${classes.dialog} ${classes.active}`}>
                    Gektor
                </div>
                <div className={classes.dialog}>
                    Kesha
                </div>
                <div className={classes.dialog}>
                    Jeka
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