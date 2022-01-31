import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import EmailBody from './EmailBody';
import './EmailList.css'
import EmailListSettings from './EmailListSettings';
import EmailType from './EmailType';

const EmailList = () => {

    const [Emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('composeData').orderBy('timestamp', 'desc').onSnapshot((collection) => {
            setEmails(collection.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return <div className='emailList'>
        <EmailListSettings></EmailListSettings>
        <EmailType></EmailType>

        {
            Emails.map(({ id, data }) => {
                return <EmailBody key={id} email={data.from} name={data.fromName} message={data.emailText} time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()} subject={data.sub}></EmailBody>
            })
        }
    </div>;
};

export default EmailList;
