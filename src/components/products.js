import React from 'react'
import Navbar from './navbar';
import Lorem from './lorem';
import List from './prodList';

import Psection from './productSection';
import '../css/product.css';
import {BrowserRouter as Router} from 'react-router-dom';
function products() {
    return (
        <div className="products-global">
            <Navbar />
            <Router>
            <div className="our-products">
                <div className="products-container">
                    <div className="products-text">
                <h1>Our Products</h1>
                <Lorem />
                </div>
                </div>

                <List />
                <div className="product-name">
               <Psection />
               </div>
            </div>
            </Router>

        
        </div>
    )
}

export default products;
