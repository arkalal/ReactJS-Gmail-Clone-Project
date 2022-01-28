import React from 'react';
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import SidebarOptions from './sidebar options/SidebarOptions';
import InboxIcon from '@mui/icons-material/Inbox';

const Sidebar = () => {
    return <div className='sidebar'>
        <Button startIcon={<AddIcon></AddIcon>} className='composeBtn'>Compose</Button>
        <SidebarOptions Icon={InboxIcon} title='Inbox' number='224'></SidebarOptions>
    </div>;
};

export default Sidebar;
