import React from 'react';
import './SidebarOptions.css'

const SidebarOptions = ({ Icon, title, number }) => {
    return <div className='sidebarOptions'>
        {Icon && <Icon></Icon>}
        <h2> {title} </h2>
        <p> {number} </p>
    </div>;
};

export default SidebarOptions;
