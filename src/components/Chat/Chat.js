import React, {useState} from 'react'
import './Chat.css';
import MicIcon from '@material-ui/icons/Mic';
import  {IconButton} from "@material-ui/core";

export default function Chat() {
    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        setInput('');
    }

    return (
        <div className="chat">

        <div className="chat__header">
            <h4 >
            To: <span className="chat__name">Channel name</span> 
            </h4>
            <strong>Details</strong>
        </div>
        
        <div className="chat__messages">
            <h2>helo mesage</h2>
            <h2>helo mesage</h2>
            <h2>helo mesage</h2>
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
