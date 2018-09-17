import React from 'react';

import notesLogo from '../../assets/images/logo_transparent.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={notesLogo} alt="Personal Notes" />
    </div>
);

export default logo;
