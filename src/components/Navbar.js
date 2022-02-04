import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components.css';

export default function Navbar(props){
    return  <div className='navbar'>
        <p className='heading'>Rolex</p>
        <div className='nav-item'>
            <Link to="/products"> Watches </Link>
        </div>
        <div className='nav-item'>
            <Link to="/shopping-cart"> Your Selection </Link>
        </div>
    </div>
}
