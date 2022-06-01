import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type dialogItenProps={
    name: string
    id: number
}

type messageProps={
    message: string
}
const DialogItem = (props: dialogItenProps)=> {
    return <div className={s.dialog}>
        <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props: messageProps)=>{
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
  return (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              <DialogItem name={'Artur'} id={1}/>
              <DialogItem name={'Semen'} id={2}/>
              <DialogItem name={'Vika'} id={3}/>
              <DialogItem name={'Egor'} id={4}/>
              <DialogItem name={'Denis'} id={5}/>
          </div>
          <div className={s.messages}>
              <Message message={"Hello"}/>
              <Message message={"Priv"}/>
              <Message message={"Hi"}/>
              <Message message={"By"}/>

          </div>
      </div>
  )
}

export default Dialogs