import React, { Component } from 'react';
import Home from './home';
import Products from './products';
import Company from './companypg';
import Join from './joinus';
import SignIn from './signIn';
import {Route} from 'react-router-dom';

export class sections extends Component {
    render() {
        return (
            <section>
                < Route path="/" component={Home}  exact/>
                < Route path="/products" component={Products} />
                < Route path="/company" component={Company} />
                < Route path="/joinus" component={Join} />
                < Route path="/sign-in" component={SignIn} />
            </section>
        )
    }
}

export default sections;
