import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLenghtCreator, required} from "../../helpers/validators/validators";

const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messagesData.map(m => <Message message={m.message} key={m.id}/>);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    { messagesElements }
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};
let maxLenght100 = maxLenghtCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.form}
                       component={Textarea}
                       validate={[required, maxLenght100]}
                       name='newMessageBody'
                       placeholder='Enter your message'/>
            </div>
            <div>
                <button className={s.sendBtn} size="sm">Send</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;