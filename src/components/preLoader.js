import React from 'react'
import logo from '../imagees/logo/logo.svg';


function preLoader() {
    return (
        <div className="preLoader">
            <img src={logo} className="nav-logo" alt="logo"/>
        </div>
    )
}

export default preLoader;
