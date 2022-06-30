import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
    ActionsType,
    DialogsPageType,
    DialogType,
    MessageType,
    sendMessageCreator,
    updateNewMessageCreator
} from "../../redux/state";

export type dialogsPtopsType= {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
    dispatch: (action:ActionsType)=>void
}

const Dialogs = (props: dialogsPtopsType) => {


    let dialogElements = props.dialogs.map(d=> <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = props.newMessageBody

    let onSendMessageClick = ()=> {
        props.dispatch(sendMessageCreator(newMessageBody))
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageCreator(body))

    }

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