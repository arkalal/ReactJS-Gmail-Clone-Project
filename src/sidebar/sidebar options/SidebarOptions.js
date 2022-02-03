import React from 'react';
import './SidebarOptions.css'

const SidebarOptions = ({ Icon, title, number, onClick }) => {
    return <div className={onClick ? 'sidebarOptions-active sidebarOptions' : 'sidebarOptions'} onClick={onClick}>
        {Icon && <Icon className='svG'></Icon>}
        <h2> {title} </h2>
        <p> {number} </p>
    </div>;
};

export default SidebarOptions;
