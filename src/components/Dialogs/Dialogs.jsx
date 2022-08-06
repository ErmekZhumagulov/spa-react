import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

function Dialogs(props) {
    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
    let messagesElements = props.state.messages.map(message => <Message message={message.message} />);

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