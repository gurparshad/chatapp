import React from 'react';
import './SidebarChat.css';
import  {Avatar, IconButton} from "@material-ui/core";

export default function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h3>Channel Name</h3>
                <p>Last Message</p>
                <small>Timestamp</small>
            </div>
        </div>
    )
}
