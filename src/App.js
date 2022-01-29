import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import './App.css'
import EmailList from './Email body/EmailList';
import Compose from './compose/Compose';
import { useSelector } from 'react-redux';

const App = () => {

    const isMessageOpen = useSelector((state) => state.compose.value)

    return <div>
        <Header></Header>

        <div className="app-body">
            <Sidebar></Sidebar>
            <EmailList></EmailList>
        </div>

        {
            isMessageOpen && <Compose></Compose>
        }
    </div>;
};

export default App;
