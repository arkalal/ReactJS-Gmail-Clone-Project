import React from 'react';
import './SidebarOptions.css'

const SidebarOptions = ({ Icon, title, number, isActive }) => {
    return <div className={isActive ? 'sidebarOptions-active sidebarOptions' : 'sidebarOptions'}>
        {Icon && <Icon className='svG'></Icon>}
        <h2> {title} </h2>
        <p> {number} </p>
    </div>;
};

export default SidebarOptions;
