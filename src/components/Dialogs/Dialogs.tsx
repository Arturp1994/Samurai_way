import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

export type dialogsPtopsType={
    dialogs: Array<{id: number, name: string}>
    messages: Array<{id: number, message: string}>
}

const Dialogs = (props: dialogsPtopsType) => {


    let dialogElements = props.dialogs.map(d=> <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

  return (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              {dialogElements}
          </div>
          <div className={s.messages}>
              {messagesElements}


          </div>
      </div>
  )
}

export default Dialogs