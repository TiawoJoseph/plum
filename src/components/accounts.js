import React from 'react';
import Lorem from './lorem';
import '../css/accounts.css';
import Footer from './footer';
import Btnm from './Buttonmain';




function accounts() {
    return (
        <div className="accounts-global">
            <div className="accounts-content">
            <div className="accounts-h1-text">
            <div className="accounts-h1-textC">
                <h1>Accounts </h1>
                <br/>
                <Lorem className="lorem" />
                <br/>
                <Btnm title="Open an Account" />
                
                </div>
                </div>
                <div className="card-div">
            <div className="container-acc">
                
                <div className="card-acc">
                    <div className="content-acc">
                        <h1>Chequing</h1>
                        <Lorem />
                        <Lorem />
                        <br />
                    <Btnm title="Open now!"></Btnm>
                    <br />
                    </div>


                </div>
                
                </div>    
                <div className="container-acc">
                
                <div className="card-acc">
                    <div className="content-acc">
                        <h1>Savings</h1>
                        <Lorem />
                        <Lorem />
                        <br />
                        <Btnm title="Open now!"></Btnm>
                    <br />
                    </div>


                </div>
                </div>
                </div>  
                </div> 
                <Footer />
        </div>
        
    )
}

export default accounts;
