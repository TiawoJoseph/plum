import React from 'react';
import fb from '../imagees/images/facebook.svg';
import ig from '../imagees/images/insta.png';
import tw from '../imagees/images/twitter.png';
import '../css/footer.css';
import {Link} from 'react-router-dom';
import Button from './Button';

function footer() {
    return (
        <div className="footer-global">
            <section className="footer">

                <div className="footer-nav">
                <p> <Link to="/">Home</Link></p>
                <p> <Link to="/products">Products</Link></p>
                <p> <Link to="/company">Company</Link></p>
                
                </div>
<br />
                <div className="footer-navS">
                <Button title="SIGN IN"></Button>
                    </div>
                <div className="footer-nav2">
                <p><span> Contact Us</span></p>
                <p> (647) 888-8888 </p>
                <p> info@plumbank.io </p>
                </div>
                <br />
                <div className="nav3-wrapper">
                <div className="footer-nav3">
                    <p> Find us here!</p>
                    </div>
                    <div className="footer-nav4">
                    <img src={fb} alt="" className="fb" />
                    <img src={tw} alt="" className="tw" />
                    <img src={ig} alt="" className="ig" />
                
                </div>
                </div>

            </section>
        </div>
    )
}

export default footer;
