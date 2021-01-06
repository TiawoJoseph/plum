import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Lorem from './lorem';
import compImg from '../imagees/images/aboutimg.png';
import '../css/company.css';
function companypg() {
    return (
        <div className="company-global">
            <Navbar />

            <div className="company-page1">
                
            <div className="rectangles-company">
                
                      <div className="rectangle-co"/>
                          <div className="circle-container-co">
                            <div className="rectangle2-co"/>
                            <div className="circle1-co">
                            <div className="rectangle3-co"/>
                            </div>
                            </div>
                            <div className="rectangle4-co"/>
                            <div className="circle-container-co">
                            < div className="rectangle5-co"/>
                            <div className="circle2-co">
                            < div className="rectangle6-co"/>
                            
                            </div>
                             </div>       
                        
                  </div>
            <div className="c-container">
                
            <div className="company-text">
            <h1 className="company-text-h1"> Genjo </h1>
            <h1 className="welcome-h1">welcomes you! </h1>
            </div>
            
         
                  </div>
            </div>


            <div className="company-page2">
                <div className="company-text-imgC">
            <div className="company-text-img">
                <img src={compImg} alt="" className="coompany-img" />
                <br />
                <div className="company-txt">
                <h1>Where we started</h1>
                <br />
                <Lorem />
                <br />
                <Lorem />
                </div>
                </div>
                </div>
                </div>


                <div className="company-page3">
                <h1>Our Goals</h1>
               <div className="colored-outterC">
       
        <div className="colored-innerC">
            <div className="container-coloured-mtg">
                
                <div className="card-couloured-mtg">
                    <div className="content-coulored-mtg">
                        
                        <Lorem />
                    </div>
                </div>
                </div> 
            <div className="container-coloured-mtg">
                
                <div className="card-couloured-mtg">
                    <div className="content-coulored-mtg">
                        
                        <Lorem />
                    </div>
                </div>
                </div> 
            <div className="container-coloured-mtg">
                
                <div className="card-couloured-mtg">
                    <div className="content-coulored-mtg">
                        
                        <Lorem />
                    </div>
                </div>
                </div> 
                </div>
                </div>
                </div>
                

                <div className="company-b4-footer">
                <h1>Made for you!</h1>
                <br />
                    <div className="m4u-container">
               
                    <div className="cb4f-text">
                        
                        <div className="cb4f-text-wrapper">  
                                       
                        <Lorem />
                        <br />
                        <Lorem />
                    </div>
                    </div>
                    </div>
                </div>
                
                <Footer />
        </div>
        
    )
}

export default companypg;
