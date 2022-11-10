import React from "react";
import style from './FormsControl.module.css'


export const Textarea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : '')}>
            <div>
                <textarea {...input}{...props}/>
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : '')}>
            <div>
                <input {...input}{...props}/>
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}