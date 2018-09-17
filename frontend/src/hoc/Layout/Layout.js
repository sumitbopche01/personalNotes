import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

class Layout extends Component {

    state = {

    }

    render() {
        return(
            <Aux>
                 <Toolbar />
                 <main className={classes.Content}>
                    {this.props.children}
                </main>               
            </Aux>
        );
    }
}

export default Layout;
