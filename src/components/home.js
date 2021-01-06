import Chip from '../imagees/images/chip.png';
import Logo from '../imagees/logo/logo.svg';
import people from '../imagees/images/people.svg';
import Dbtn from '../imagees/images/Group 47.png';
import mobile from '../imagees/images/mobileapp.png';
import '../css/home.css';
import React , {Component} from 'react';
import Footer from './footer';
import Navbar from './navbar';

    

      
export class home extends Component {
    render() {
        return (
            <div className="App"> 
            
            <section id="Home-Screen">
                < Navbar />
                
                  <div className="rectangles">
                      <div className="rectangle"/>
                          <div className="circle-container">
                            <div className="rectangle2"/>
                            <div className="circle1">
                            <div className="rectangle3"/>
                            </div>
                            </div>
                            <div className="rectangle4"/>
                            <div className="circle-container">
                            < div className="rectangle5"/>
                            <div className="circle2">
                            < div className="rectangle6"/>
                            </div>
                            </div>       
                  </div>
      
            <div className="rectancle7-c">
              < div className="rectangle7"/>
              </div>
      
            <div className="Home">     
              <div className="container1">
              <p className="poppins">the new </p>
              <h1 className="raleway"> Online Bank</h1>
      
              <div className="container2">
              <p> Serving you <span className="dTextt"> better </span>& </p>
              <p> Leading a  <span className="dTextt"> better </span> future. </p>
             </div>
             <div className="container">                
                      <div className="card">
                          <div className="content">
                             <img src= {Logo} alt="chip" className="logo img-responsive" />
                             <img src= {Chip} alt="chip" className="chip img-fluid" />
                             <p className="em"> 4511 5555 5555 5555 </p>
                             <br />
                             <hr />      
                             <br />                
                                  <p>John Doe</p>
                                  <p className="pv">Valid Till 00/00</p>
                           
                       </div>
                      </div>
                      </div>
             
            </div>
            </div>
            </section>
      
            <section id="WWA-screen">
            <div className="wwaT">
              <div className="ww-container2">
            <h1> Who we are</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing placerat 
            suspendisse pellentesque arcu. Massa tincidunt fermentum vitae, nisl ut feugiat 
            ligula turpis sceleri faucibus pulvinar
             blandit urna, accumsan nec, sodales massa em enim risus eget nullam sagittis, 
            </p>
              </div>
              <div className="wwa-container2">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing placerat 
            suspendisse pellentesque arcu. Massa tincidunt fermentum vitae, nisl ut feugiat 
            ligula turpis sceleri faucibus pulvinar
             blandit urna, accumsan nec, sodales massa em enim risus eget nullam sagittis, 
            </p>
            </div>
      
            </div>
            </section>
      
      <section id="hwcy-screen">
          <div className="HowWeCHY">
          <div className="hwchy-container1">
          < img src={ people} alt="" className="peopleDem img-fluid"/>
          </div>
          <div className="hwchy-container2">
            <h1>How we can help you</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing placerat 
            suspendisse pellentesque arcu. Massa tincidunt fermentum vitae, nisl ut feugiat 
            ligula turpis sceleri faucibus pulvinar
             blandit urna, accumsan nec, sodales massa em enim risus eget nullam sagittis, 
            </p>
          
          </div>
      
          </div>
      </section>
      
          <section className="download-screen">
            <div className="container1">
            < img src={Dbtn} alt="" className="download-btn img-fluid"/>
            < img src={mobile} alt="" className="download-phone img-responsive"/>
            </div>
          </section>
          
          <Footer />
      
          </div>
        )
    }
}

export default home






