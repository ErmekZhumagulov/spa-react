import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

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