import React from 'react';
import Btnm from './Buttonmain';
import Lorem from './lorem';
import Footer from './footer';
import '../css/mtg.css';

function mtg() {
    return (
        <div className="mtg-global">
           <div className="mtg-content">
            <div className="mtg-h1T-C">
            <div className="mtg-h1-text">
        
                <h1>Mortgages</h1>
                <Lorem />
                <br/>
                <Btnm title="Apply for a Mortgage" />
            </div>
            </div>
        <div className="colored-outterC">
       
        <div className="colored-innerC">
            <div className="container-coloured-mtg">
                
                <div className="card-couloured-mtg">
                    <div className="content-coulored-mtg">
                        <h1>Home Buying</h1>
                        <Lorem />
                    </div>
                </div>
                </div> 
            <div className="container-coloured-mtg">
                
                <div className="card-couloured-mtg">
                    <div className="content-coulored-mtg">
                        <h1>Mortgage Transfers</h1>
                        <Lorem />
                    </div>
                </div>
                </div> 
            <div className="container-coloured-mtg">
                
                <div className="card-couloured-mtg">
                    <div className="content-coulored-mtg">
                        <h1>Your Plum Mortgage</h1>
                        <Lorem />
                    </div>
                </div>
                </div> 
                </div>
                </div>
                <div className="seperationC">
                    <div id="line">
<hr className="mtg-line" />
</div>
<br />
<br />
<br />
<h1> Check out <span> our mortgages</span></h1>
</div>
                <div className="container-clear">
                <div className="container-mtg">
                
                <div className="card-mtg">
                    <div className="content-mtg">
                        <h1>Fixed-rate Mortgages</h1>
                        <div className="mtg-rates">
                        <div className="term">
                            <quote className="mtg">
                                Term
                            </quote>
                            <h6>10 years </h6>
                            </div>
                            <div className="special-rate">
                            <quote className="mtg">
                               Special rate
                            </quote>

                            <h6>2.14% </h6>
                          </div>

                          <div className="high-ratio">
                            <quote className="mtg">
                                High-ratio rate
                            </quote>

                            <h6>1.85% </h6>
                        </div>

                        </div>
                        <hr />
                        <br />
                        <h3>When to choose Fixed</h3>
                        <br />
                        <Lorem />
                        <br />
                        <hr />
                        <br />
                        <Lorem />
                      
                    </div>
                </div>
                </div>   
                
                <div className="container-mtg">
                
                <div className="card-mtg">
                    <div className="content-mtg">
                        <h1>Variable-rate Mortgages</h1>
                        <div className="mtg-rates">
                            <div className="term">
                            <quote className="mtg">
                                Term
                            </quote>
                            <h6>10 years </h6>
                            </div>
                            <div className="special-rate">
                            <quote className="mtg">
                               Special rate
                            </quote>

                            <h6>1.65% </h6>
                                </div>
                            <div className="high-ratio">
                            <quote className="mtg">
                                High-ratio rate
                            </quote>

                            <h6>1.75% </h6>
                        </div>
                        </div>
                        <hr />
                        <br />
                        <h3>When to choose variable</h3>
                        <br />
                        <Lorem />
                        <br />
                        <hr />
                        <br />
                        <Lorem />
                      
                    </div>
                </div>
                </div>
                </div>

                </div>
              <Footer />
        </div>
    )
}

export default mtg;
