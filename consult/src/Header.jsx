import React from "react";

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="img/logo.png" alt="Logo" />
            </div>
            <nav>
                <ul className="nav-list">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/industary">Industry</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/pages">Pages</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                </ul>
            </nav>
            <div className="contact-info">
                <span className="phone">+91 5685 6664 555</span>
                <button className="btn-email" type="button"></button>
            </div>
        </header>
    );
};

export default Header;