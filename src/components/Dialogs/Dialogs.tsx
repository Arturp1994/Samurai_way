import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


// type DialogsPropsType = {
//     updateNewMessage: (body: string)=>void
//     sendMessage: ()=>void
//     dialogsPage: { messages: MessageType[]; dialogs: DialogType[]; newMessageBody: string; }
// }

const Dialogs = (props: DialogsPropsType) => {

    const state = props.dialogsPage;

    let dialogElements = state.dialogs.map(d=> <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = ()=> {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
        let body = e.currentTarget.value
        props.updateNewMessage(body)
    }

    if (props.isAuth === false) return <Redirect to={'/login'}/>

  return (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              {dialogElements}
          </div>
          <div className={s.messages}>
              {messagesElements}
              <div>
                  <div><textarea value={newMessageBody} placeholder={"Enter your message"} onChange={onNewMessageChange}></textarea></div>
                  <div><button onClick={onSendMessageClick}>Send</button></div>
              </div>

          </div>
      </div>
  )
}

export default Dialogs