import React, {useEffect, useState} from 'react'
import './Chat.css';
import MicIcon from '@material-ui/icons/Mic';
import  {IconButton} from "@material-ui/core";
import Message from '../Message/Message';
import { selectChatId, selectChatName } from '../../features/chatSlice';
import {useSelector} from 'react-redux';
import db from '../../firebase';
import firebase from 'firebase';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move';

export default function Chat() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);
    const user = useSelector(selectUser);

    useEffect(() => {
        if(chatId){
             db.collection("chats")
            .doc(chatId)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => 
             setMessages(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            ))
        }
    }, [chatId])

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('chats').doc(chatId).collection("messages")
        .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName,
        });
        setInput('');
    }

    return (
        <div className="chat">

        <div className="chat__header">
            <h4 >
            To: <span className="chat__name">{chatName}</span> 
            </h4>
            <strong>Details</strong>
        </div>
        
        <div className="chat__messages">
            <FlipMove>
            {messages.map(({id, data}) => { // id and data are destructured.
              return <Message key={id} contents={data}/>
            })}
            </FlipMove>
            
        </div>

        <div className="chat__input">
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="message" type="text"/>
                <button onClick={sendMessage}>Send Message</button>
            </form>
            <IconButton>
                <MicIcon className="chat__mic"/>
            </IconButton>
        </div>
            
        </div>
    )
}
