import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import './App.css'
import EmailList from './Email body/EmailList';

const App = () => {
    return <div>
        <Header></Header>

        <div className="app-body">
            <Sidebar></Sidebar>
            <EmailList></EmailList>
        </div>
    </div>;
};

export default App;
