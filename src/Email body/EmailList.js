import React from 'react';
import './EmailList.css'
import EmailListSettings from './EmailListSettings';
import EmailType from './EmailType';

const EmailList = () => {
    return <div className='emailList'>
        <EmailListSettings></EmailListSettings>
        <EmailType></EmailType>
    </div>;
};

export default EmailList;
