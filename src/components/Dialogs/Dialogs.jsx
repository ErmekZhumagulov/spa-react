import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path} className={navData => navData.isActive ? classes.active : classes.dialog}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Maria" id="1" />
                <DialogItem name="Kesha" id="2" />
                <DialogItem name="Jeka" id="3" />
            </div>
            <div className={classes.messages}>
                <Message message="Hi! All good?" />
                <Message message="How are you?" />
                <Message message="What are you doing?" />
            </div>
        </div>
    );
}

export default Dialogs;