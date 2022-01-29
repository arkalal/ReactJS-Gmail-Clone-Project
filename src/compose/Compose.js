import React from 'react';
import './Compose.css'
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { toggFalse } from '../redux store/composeSlice';

const Compose = () => {

    const dispatch = useDispatch()

    const closeCompose = () => {
        dispatch(toggFalse())
    }

    return <div className='compose'>
        <div className="compose-header">
            <div className="compose-headerLeft">
                <span>New Message</span>
            </div>

            <div className="compose-headerRight">
                <RemoveIcon></RemoveIcon>
                <HeightIcon></HeightIcon>
                <CloseIcon onClick={closeCompose}></CloseIcon>
            </div>
        </div>

        <div className="compose-body">
            <div className="compose-bodyForm">
                <input type="email" name="" id="" placeholder='Recipients' />

                <input type="text" placeholder='Subject' />

                <textarea name="" id="" cols="" rows="20"></textarea>
            </div>
        </div>

        <div className="compose-footer">
            <div className="compose-footerLeft">
                <button type="submit">
                    Send <ArrowDropDownIcon></ArrowDropDownIcon>
                </button>
            </div>

            <div className="compose-footerRight">
                <FormatColorTextIcon></FormatColorTextIcon>
                <AttachFileIcon></AttachFileIcon>
                <LinkIcon></LinkIcon>
                <InsertEmoticonIcon></InsertEmoticonIcon>
                <NoteAddIcon></NoteAddIcon>
                <PhotoIcon></PhotoIcon>
                <PhonelinkLockIcon></PhonelinkLockIcon>
                <CreateIcon></CreateIcon>
                <MoreVertIcon></MoreVertIcon>
                <DeleteIcon></DeleteIcon>
            </div>
        </div>
    </div>;
};

export default Compose;
