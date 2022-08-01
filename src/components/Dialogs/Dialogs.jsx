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

    let dialogsData = [
        { id: 1, name: 'Maria' },
        { id: 2, name: 'Kesha' },
        { id: 3, name: 'Jeka' }
    ]

    let messagesData = [
        { id: 1, message: 'Hi! All good?' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'What are you doing?' }
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

    let messagesElements = messagesData.map(message => <Message message={message.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;