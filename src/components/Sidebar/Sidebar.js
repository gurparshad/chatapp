import React, {useSelector} from 'react-redux'
import './Sidebar.css';
import  {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import SidebarChat from '../SidebarChat/SidebarChat';
import { selectUser } from '../../features/userSlice';
import db, {auth} from '../../firebase';
import { useEffect, useState } from 'react';

export default function Sidebar() {
    const user = useSelector(selectUser);
    const [chats, setChats] = useState([]);

    const addChat = () => {
        const chatName = prompt('please enter a chat name');
        if(chatName){
            db.collection('chats').add({
                chatName: chatName,
            })
        }

    }

    useEffect(() => {
        db.collection('chats').onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
    }, [])

    return (
        <div className="sidebar">
             <div className="sidebar__header">
                <Avatar onClick={() => auth.signOut()} src={user.photo} className="sidebar__avatar"/>
                <div className="sidebar__input">
                <SearchIcon/>
                    <input placeholder="Search"/>
                    
                </div>
                <IconButton variant="outlined" className="sidebar__inputButton">
                    <ControlPointIcon onClick={addChat}/>
                </IconButton>
                
             </div>
             <div className="sidebar__chats">
             {chats.map(item => {
               return <SidebarChat key={item.id} id={item.id} chatName={item.data.chatName}/>
             })}
             </div> 
        </div>
    )
}
