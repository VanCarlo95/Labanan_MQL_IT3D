import React, {useState} from 'react'
import {Link} from 'react-router-dom';

function Sidebar(){
    return(
    <>
    <div className='sidebar'>
        {/* <ul> */}
        <ul>
            <Link to="/" className="sidebar-head">
                <header><i className='fa-solid fa-hammer'/>H.I.M.S </header>
                <i class="fa-solid fa-chart-line"/>Dashboard 
                <i class="fa-solid fa-handshake" />Partner Brands
                <i class="fa-solid fa-circle-question"/>About 
                <i class="fa-solid fa-envelope"/>Contacts 
            </Link>
        </ul>
            {/* <li><a href="#"><i class="fas fa-link"></i> Partner Brands</a></li>
            <li><a href="#"><i class="fas fa-stream"></i> Overview</a></li>
            <li><a href="#"><i class="fas fa-calendar-week"></i> Events</a></li>
            <li><a href="#"><i class="fas fa-question-circle"></i> About</a></li>
            <li><a href="#"><i class="fas fa-sliders"></i> Services</a></li>
            <li><a href="#"><i class="fas fa-envelope"></i> Contacts</a></li> */}
        {/* </ul> */}
    </div>
    </>
    );
}

export default Sidebar;