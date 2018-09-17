import React from 'react';

import notesLogo from '../../assets/images/facebook_cover_photo_1.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={notesLogo} alt="Personal Notes" />
    </div>
);

export default logo;
