import React from 'react';
import './EmailBody.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';

const EmailBody = ({ name, subject, message, time }) => {
    return <div className='emailBody'>
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
