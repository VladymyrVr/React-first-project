import React from "react";

import { Link } from 'react-router-dom'
//components
import Header from "../Header";

class Mainwelcome extends React.Component {

    componentDidMount (){
        const $ = window.$;
        $('.navbar-toggle').click(function(){
            $('.navbar-toggle').toggleClass('navbar-on');
            $('.main-nav').fadeToggle();
            $('.main-nav').removeClass('nav-hide');
        });
    }

    render () {
        return (
            <section className="main-welcome-section">
                <div className='navbar-toggle' title='Menu'>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
                <nav className="nav-hide main-nav">
                    <ul className="nav-list">
                        <li><Link to='/' className="active">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/industry">Industry</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/pages">Pages</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="wrapper">
                    <Header/>
                    <div className="category-name">
                        <p>We are leading consulting company</p>
                        <h2>Choose your industry</h2>
                    </div>
                    <div className="flex-wrapper">
                        <div className="industry-category">
                            <p className="education-industry">
                                Education
                            </p>
                        </div>
                        <div className="industry-category">
                            <p className="business-industry">
                                Business
                            </p>
                        </div>
                        <div className="industry-category">
                            <p className="technology-industry">
                                Technology
                            </p>
                        </div>
                        <div className="industry-category">
                            <p className="banking-industry">
                                Banking
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    };
}


export default Mainwelcome;