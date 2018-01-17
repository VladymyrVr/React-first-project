import React from "react";
import Header from "./Header";

const Mainwelcome = () => {
    return (
        <section className="main-welcome-section">
            <div className='navbar-toggle' title='Menu'>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
            </div>
            <nav className="nav-hide main-nav">
                <ul className="nav-list">
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Industry</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Contact Us</a></li>
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

export default Mainwelcome;