import React from 'react'
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';
import './Main.css';

export default function Main() {
    return (
        <div className="main">
            <Sidebar/>
            <Chat/>
        </div>
    )
}
