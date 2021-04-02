import React from 'react'
import s from './Messages.module.css'
import Dialog from './Dialog/Dialog';
import NameItem from './NameItem/NameItem';


const Messages = (props) => {
    let messagesElements = props.state.messagesData.map(m => <NameItem name={m.name} id={m.id} icon={m.icon} />)
    let dialogsElement = props.state.dialogsDat.map(d => <Dialog dialog ={d.dialog} id={d.id} icon={d.icon} />)
    
    return (
        <div className={s.messages}>
            <div className={s.messages__items}>
                {messagesElements}
            </div>
            <hr></hr>
            <div className={s.messages__dialogs}>
                {dialogsElement}
            </div>
        </div>
    )
}

export default Messages;