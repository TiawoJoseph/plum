import React from 'react';
import '../css/list.css';
import {Link} from 'react-router-dom';


function prodList() {
    return (
        <div className="list-global">
            <div className="product-list">
                <p className="gradient-first"> <Link to="/accounts">Accounts</Link></p>
                <p className="gradient-first"> <Link to="/credit-cards">Credit Cards</Link></p>
                <p className="gradient-last"> <Link to="/mortgages">Motgages</Link></p>
                <p className="gradient-last"> <Link to="/lending">Lending</Link></p>
                <p className="gradient-rand"> <Link to="/investments">Investments</Link></p>
                </div>
        </div>
    )
}

export default prodList;
