import React from 'react';
import './Header.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux store/userSlice';

const Header = () => {

    const user = useSelector((state) => state.user.user)
    console.log(user)
    const dispatch = useDispatch()

    const logMeOut = (e) => {
        e.preventDefault()

        dispatch(logout())
    }

    return <div className='header'>
        <div className="header-left">
            <IconButton>
                <ReorderIcon></ReorderIcon>
            </IconButton>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png" alt="" />
        </div>

        <div className="header-middle">
            <div className="search-mail">
                <IconButton>
                    <SearchIcon></SearchIcon>
                </IconButton>

                <input type="text" placeholder='Search Mail' />

                <IconButton>
                    <ExpandMoreIcon></ExpandMoreIcon>
                </IconButton>
            </div>
        </div>

        <div className="header-right">
            <IconButton>
                <HelpOutlinedIcon></HelpOutlinedIcon>
            </IconButton>

            <IconButton>
                <SettingsIcon></SettingsIcon>
            </IconButton>

            <IconButton>
                <AppsIcon></AppsIcon>
            </IconButton>

            <Avatar src={user?.photoUrl} onClick={logMeOut}></Avatar>
        </div>
    </div>;
};

export default Header;
