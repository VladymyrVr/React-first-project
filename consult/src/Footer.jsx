import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="footer-top">
                    <div className="logo">
                        <img src="img/logo.png" alt="Logo" />
                    </div>
                    <div className="navigation">
                        <h2>Navigation</h2>
                        <ul className="navigation-list">
                            <li><a href="">Home</a></li>
                            <li><a href="">About us</a></li>
                            <li><a href="">Industry</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="industary">
                        <h2>Industary</h2>
                        <ul className="industary-list">
                            <li><a href="html/not-found.html">Education</a></li>
                            <li><a href="html/not-found.html">Business</a></li>
                            <li><a href="html/not-found.html">Realstate</a></li>
                            <li><a href="html/not-found.html">Technology</a></li>
                            <li><a href="html/not-found.html">Banking</a></li>
                            <li><a href="html/not-found.html">Communication</a></li>
                            <li><a href="html/not-found.html">Much More</a></li>
                        </ul>
                    </div>
                    <div className="newsletter">
                        <h2>News Letter</h2>
                        <p className="email-info">Enter your email address to subscribe our notification of our new post & features
                            by
                            email.</p>
                            <form action="index.html">
                                <div className="flex-wrapper">
                                    <input type="email" placeholder="EMAIL ADDRESS"/>
                                    <button className="btn-subscribe" type="button">Subsribe</button>
                                </div>
                            </form>
                    </div>
                </div>
                <div className="footer-bottom">
                <span className="copyright">
                    Copyright © 2016 Consultplus theme.
                </span>
                    <ul className="social-networks-list">
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">LinkedIn</a></li>
                        <li><a href="">Google +</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};

export  default Footer;