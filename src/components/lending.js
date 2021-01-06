import React from 'react';
import Btnm from './Buttonmain';
import Lorem from './lorem';
import Footer from './footer';
import '../css/lending.css';

function lending() {
    return (
        <div className="lending-global">
           <div className="lending-content">
               <div className="lending-h1-text">
               <div className="lending-h1-textC">
                <h1> Lending</h1>
                < br />
                <Lorem />
                <br/>
                <Btnm title="Apply for Lending" />
            </div>
            </div>
            < br />
            <h1 className="find"> Find an option  that works <span>for you!</span></h1>
            <div className="circle1-lending">
                <div className="rectangle3-lending"/>
                </div>
                <div className="circle2-lending">
                <div className="rectangle4-lending"/>
                </div>
            <div className="lending-cardC">
            
            <div className="container-lending">
                
                <div className="card-lending">
                    <div className="content-lending">
                        <h1>Secured Lending</h1>
                        <Lorem />
                        <Lorem />
                        <br/>
                        <Btnm title="Apply now" />
                    </div>


                </div>
                
                </div>    
                <div className="container-lending">
                
                <div className="card-lending">
                    <div className="content-lending">
                        <h1>Unsecured Lending</h1>
                        <Lorem />
                        <Lorem />
                        <br/>
                        <Btnm title="Apply now" />
                    </div>


                </div>
                
                </div>  
                </div>
                </div>
             <Footer />
        </div>
    )
}

export default lending;
