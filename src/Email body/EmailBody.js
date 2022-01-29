import React from 'react';
import './EmailBody.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { useNavigate } from 'react-router-dom';

const EmailBody = ({ name, subject, message, time }) => {

    const navigate = useNavigate()

    return <div className='emailBody' onClick={() => { navigate('/mailbox') }}>
        <div className="emailBody-Left">
            <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
            <StarBorderIcon></StarBorderIcon>
            <LabelOutlinedIcon></LabelOutlinedIcon>

            <h4> {name} </h4>
        </div>

        <div className="emailBody-Middle">
            <div className="emailBody-MiddleMessage">
                <p><b> {subject} </b> {message} </p>
            </div>
        </div>

        <div className="emailBody-Right">
            <p> {time} </p>
        </div>
    </div>;
};

export default EmailBody;
