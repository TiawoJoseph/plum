import React from 'react';
import Lorem from './lorem';
import Chip from '../imagees/images/chip.png';
import Footer from './footer';
import '../css/creditcard.css';
import Btnm from './Buttonmain';

function creditcards() {
    return (
        <div className="cc-global">
           <div className="cc-content">
               <div className="cc-h1T-container">
            <div className="cc-h1-text">
                <h1> Credit cards</h1>
                <Lorem />
            </div>
            </div>
            
            <div className="plum-card-outerC">
            <div className="plum-card-innerC">
            <div className="Plum-Choice-Excel">

            <div className="container-cc">               
                <div className="card-cc">
                    <div className="content-cc">
                       <img src= {Chip} alt="chip" className="chip" />
                       <p> 4511 5555 5555 5555 </p>
                       <br />
                       <hr />
                       <br />
                            <p>John Doe</p>
                            <p>Valid Till 05/22</p>
                   
                 </div>
                </div>
                
                <div className="p-ce-text">
                <h1>Plum Choice Excel</h1>
                <Lorem />
                <br />
                <Btnm title="Apply now"> Apply</Btnm>
                </div>
                </div>
                </div>
                <br />
                <hr className="line" />
                <br />
                <div className="Plum-Beyond-I">
                <div className="container-cc">
                
                <div className="card-cc">
                    <div className="content-cc">
                    <img src= {Chip} alt="chip" className="chip" />
                       <p> 4511 5555 5555 5555 </p>
                       <br />
                       <hr />
                       <br />
                       <div className="cardN-date">
                            <p>John Doe</p>
                            <p>Valid Till 05/22</p>
                       </div>
                </div>
                </div>
                <div className="pbi-text">
                <h1>Plum Beyond I</h1>
                <Lorem />
                <br />
                <Btnm title="Apply now"> Apply</Btnm>
                </div>
                </div>
                
                </div>
                <br />
                <hr className="line" />
                <br />
                <div className="Plum-Rewards-Card">
                <div className="container-cc">
                
                <div className="card-cc">
                    <div className="content-cc">
                    <img src= {Chip} alt="chip" className="chip" />
                       <p> 4511 5555 5555 5555 </p>
                       <br />
                       <hr />
                       <br />
                       <div className="cardN-date">
                            <p>John Doe</p>
                            <p>Valid Till 05/22</p>
                       </div>
                </div>
                </div>
                <div className="prc-text">
                <h1>Plum Rewards Card</h1>
                <Lorem />
                <br />
                <Btnm title="Apply now"> Apply</Btnm>
                </div>
                </div>
               
                </div>
                <br />
                <hr className="line" />
                <br />

                <div className="Plum-Revo-Card">
                <div className="container-cc">
                
                <div className="card-cc">
                    <div className="content-cc">
                    <img src= {Chip} alt="chip" className="chip" />
                       <p> 4511 5555 5555 5555 </p>
                       <br />
                       <hr />
                       <br />
                       <div className="cardN-date">
                            <p>John Doe</p>
                            <p>Valid Till 05/22</p>
                       </div>
                </div>
                </div>
                <div className="prc-text">
                <h1>Plum Revo Card</h1>
                <Lorem />
                <br />
                <Btnm title="Apply now"> Apply</Btnm>
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

export default creditcards

