import React from 'react'
import './Sidebar.css';
import  {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import SidebarChat from '../SidebarChat/SidebarChat';

export default function Sidebar() {
    return (
        <div className="sidebar">
             <div className="sidebar__header">
                <Avatar className="sidebar__avatar"/>
                <div className="sidebar__input">
                <SearchIcon/>
                    <input placeholder="Search"/>
                    
                </div>
                <IconButton variant="outlined" className="sidebar__inputButton">
                    <ControlPointIcon/>
                </IconButton>
                
             </div>
             <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
    
             </div>
        </div>
    )
}
