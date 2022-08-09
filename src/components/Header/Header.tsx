import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props:any) => {
    return (
        <header className={s.header}>
            <img src ='https://i.pinimg.com/originals/cc/7a/d3/cc7ad3d3ba4e80853304bee2dc3015da.png'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>

    )
}

export default Header