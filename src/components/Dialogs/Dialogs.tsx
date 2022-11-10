import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormsControl";
import {maxLengthCreator, required} from "../../utils/validator/validator";


// type DialogsPropsType = {
//     updateNewMessage: (body: string)=>void
//     sendMessage: ()=>void
//     dialogsPage: { messages: MessageType[]; dialogs: DialogType[]; newMessageBody: string; }
// }

const Dialogs = (props: DialogsPropsType) => {

    const state = props.dialogsPage;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)


    let addNewMessage = (value: any) => {
        props.sendMessage(value.newMessageBody)
    }


    if (props.isAuth === false) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageFormReduxe onSubmit={addNewMessage}/>
        </div>
    )
}


const maxLengthCreator100 = maxLengthCreator(50)

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required,maxLengthCreator100]}
                       name="newMessageBody"
                       placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormReduxe = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs