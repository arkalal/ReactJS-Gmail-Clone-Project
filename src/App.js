import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import './App.css'

const App = () => {
    return <div>
        <Header></Header>

        <div className="app-body">
            <Sidebar></Sidebar>
        </div>
    </div>;
};

export default App;
