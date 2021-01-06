import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Account from './accounts';
import Credit from './creditcards';
import Investments from './investments';
import Mtg from './mtg';
import Lending from './lending';
export class productSection extends Component {
    render() {
        return (
            <div>
                 <section>
                < Route path="/accounts" component={Account}  exact/>
                < Route path="/credit-cards" component={Credit} />
                < Route path="/investments" component={Investments} />
                < Route path="/mortgages" component={Mtg} />
                < Route path="/lending" component={Lending} />
            </section>
            </div>
        )
    }
}

export default productSection;

