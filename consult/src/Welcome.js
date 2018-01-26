import React from 'react';

import { Link } from 'react-router-dom';

//components
import Header from './Header'

class Welcome extends React.Component {
    constructor (props) {
        super(props);
    }

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
            <section className="welcome-section">
                <div className='navbar-toggle' title='Menu'>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
                <nav className="nav-hide main-nav">
                    <ul className="nav-list">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/industary">Industry</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/pages">Pages</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="wrapper">
                    <Header/>
                    <div className="category-name">
                        <h2>{this.props.header}</h2>
                    </div>
                </div>
            </section>
        )
    };
    }


export default Welcome;