import React from 'react';
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <a href='/'>
                    <img src="https://cdn.worldvectorlogo.com/logos/correc-1.svg" alt="logo" />
                </a>
            </div>
        </header>
    );
}

export default Header;