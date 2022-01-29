import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import './App.css'
import EmailList from './Email body/EmailList';
import Compose from './compose/Compose';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import MailOpen from './mail open/MailOpen';

const App = () => {

    const isMessageOpen = useSelector((state) => state.compose.value)

    return <div>
        <Header></Header>

        <div className="app-body">
            <Sidebar></Sidebar>

            <Routes>
                <Route path='/' element={<EmailList></EmailList>}></Route>
                <Route path='/mailbox' element={<MailOpen></MailOpen>}></Route>
            </Routes>

        </div>

        {
            isMessageOpen && <Compose></Compose>
        }
    </div>;
};

export default App;
