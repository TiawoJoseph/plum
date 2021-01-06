import React from 'react';
import Btnm from './Buttonmain'
import Lorem from './lorem';
import Footer from './footer';
import '../css/investment.css';

function investments() {
    return (
        <div className="investment-global">
         <div className="investment-content" >   
         <div className="investment-h1T-container">
            <div className="investment-h1-text">
                <h1> Investments</h1>
                <br />
                <Lorem />
                <br />
                <Btnm title="Open an Investment"> Open an Ivestment </Btnm>
            </div>
            </div>
              
            <div className="cards--container">
                <div className="Left-container">
                     <div className="container-investments">
                        <div className="card-investments">
                         <div className="content-investments">
                            <h1>TFSA</h1>
                            <Lorem />
                            <br />
                <Btnm title="Open now!"> Open an Ivestment </Btnm>
            </div>
                </div>
                     </div>    

                <div className="container-investments">                
                     <div className="card-investments">
                         <div className="content-investments">
                            <h1>RRSP</h1>
                            <Lorem />
                            <br />
                <Btnm title="Open now!"> Open an Ivestment </Btnm>
                    </div>
                </div>               
                        </div>    
            </div>

                <div className="right-container" >
                <div className="container-investments">
                
                <div className="card-investments">
                    <div className="content-investments">
                        <h1>Self-directed investments</h1>
                        <Lorem />
                       
                        <br />
                <Btnm title="Open now!"> Open an Ivestment </Btnm>
                    </div>


                </div>
                
                </div>    
                <div className="container-investments">
                
                <div className="card-investments">
                    <div className="content-investments">
                        <h1>Marginal Self directed investing account </h1>
                        <Lorem />
                       
                        <br />
                <Btnm title="Open now!"> Open an Ivestment </Btnm>
                    </div>


                </div>
                
                </div>  
                </div>
                </div>
               
                </div>
           <Footer />
        </div>
    )
}

export default investments;
