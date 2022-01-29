import React from 'react';
import EmailBody from './EmailBody';
import './EmailList.css'
import EmailListSettings from './EmailListSettings';
import EmailType from './EmailType';

const EmailList = () => {
    return <div className='emailList'>
        <EmailListSettings></EmailListSettings>
        <EmailType></EmailType>
        <EmailBody name='Arkalal' message='This is just a test hagsgasgdas I am something that cannnot be changes beacacahcahcjha of the aro kichu likhte obe beacuse na hole eta hobe nah' time='2:30 PM' subject='Test Subject'></EmailBody>
    </div>;
};

export default EmailList;
