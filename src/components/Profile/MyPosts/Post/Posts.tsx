import React from 'react';
import s from './Posts.module.css'

type messageProprType = {
    message: string
    likesCount: number
}

const Posts = (props: messageProprType) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRmqqT6AS_hudjGiTJmnXdr5ip-J7f56BDBQ&usqp=CAU'/>
                {props.message}
            </div>
            <span> like</span> {props.likesCount}
        </div>
    )
}

export default Posts