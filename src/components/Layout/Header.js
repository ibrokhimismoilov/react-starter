import React from 'react';
import { NavLink } from 'react-router-dom';
import SelectLang from './SelectLang';

const Header = () => {
    return (
        <>
            <h1>Header section</h1>
            <nav>
                <NavLink to="/">Home</NavLink> {" "}
                <NavLink to="/news">News</NavLink>

                <SelectLang />
            </nav>
        </>
    );
};

export default Header;
