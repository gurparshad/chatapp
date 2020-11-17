import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react'
import { selectUser } from '../../features/userSlice';
import './Message.css';
import { useSelector } from 'react-redux';
import * as timeago from 'timeago.js';

const Message = forwardRef( ({id, contents: {
    timestamp, message, uid, photo, email, displayName
}}, ref
) => {
    const user = useSelector(selectUser);
    return (
        <div ref={ref} className={`message ${user.email === email && "message__sender"}`}>
            <Avatar className="message__photo" src={photo}/>
            <p>{message}</p>
            <small>{ timeago.format(
                new Date(timestamp?.toDate()).toLocaleString()
            )
                }</small>
        </div>
    )
})

export default Message