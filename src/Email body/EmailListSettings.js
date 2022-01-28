import React from 'react';
import './EmailListSettings.css'
import { IconButton } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const EmailListSettings = () => {
    return <div className='emailList-settings'>
        <div className="emailList-settingsLeft">
            <IconButton>
                <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
            </IconButton>

            <IconButton>
                <ArrowDropDownIcon></ArrowDropDownIcon>
            </IconButton>

            <IconButton>
                <RefreshIcon></RefreshIcon>
            </IconButton>

            <IconButton>
                <MoreVertIcon></MoreVertIcon>
            </IconButton>
        </div>

        <div className="emailList-settingsRight">
            <p>1-50 of 10,222</p>

            <IconButton>
                <ChevronLeftIcon></ChevronLeftIcon>
            </IconButton>

            <IconButton>
                <ChevronRightIcon></ChevronRightIcon>
            </IconButton>
        </div>
    </div>;
};

export default EmailListSettings;
