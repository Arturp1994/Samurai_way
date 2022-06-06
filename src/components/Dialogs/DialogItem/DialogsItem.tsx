import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type dialogItenProps={
    name: string
    id: number
}

const DialogItem = (props: dialogItenProps)=> {
    return <div className={s.dialog}>
        <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
    </div>
}


export default DialogItem