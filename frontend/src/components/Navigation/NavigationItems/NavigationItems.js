import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active>Home</NavigationItem>
        <NavigationItem link='/'>Popular Notes</NavigationItem>
    </ul>
);

export default navigationItems;
