import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Artur'},
        {id: 2, name: 'Semen'},
        {id: 3, name: 'Vika'},
        {id: 4, name: 'Egor'},
        {id: 5, name: 'Denis'},
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Priv'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'By'},
    ]

    let dialogElements = dialogs.map(d=> <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

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