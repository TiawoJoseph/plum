import React, { useState }from 'react'
import logo from '../imagees/logo/logo.svg';
import '../css/navbar.css';
import {Link} from 'react-router-dom';
import Button from './Button';
import Hamburger from  './Menutoggle';




function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    

    return (
      
        <div className="container-nav">
     
             <nav className="nav" >
        
          <div className="nav-logoC">
          <p><Link to="/"><img src={logo} alt="logo" className="nav-logo"/> </Link></p>
          </div>
          <div className="list-items" id= "hidden">
       
          <div className="signin-btn"> <Link to="/">HOME</Link></div>
          <p><Link to="/products">PRODUCTS</Link></p>
          <p><Link to="/company">COMPNAY</Link></p>
          <Button title="SIGN IN"></Button>
          
          </div>
        <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}> 
    
        <div className="nav-resp" />
        <div className="nav-resp" />
        <div className="nav-resp" />
    </button>
          <Hamburger isOpen={isOpen} />
      </nav>
        
           
        </div>
        
    )
}

export default Navbar;