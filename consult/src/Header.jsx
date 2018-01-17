import React from "react";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="img/logo.png" alt="Logo" />
            </div>
            <nav>
                <ul className="nav-list">
                    <li><a href="" className="active">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Industry</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Contact Us</a></li>
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