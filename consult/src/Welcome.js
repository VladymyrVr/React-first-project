import React from 'react';

import { NavLink } from 'react-router-dom';

//components
import Header from './Header'

class Welcome extends React.Component {


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
                        <li><NavLink to='/' activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
                        <li><NavLink to="/industary" activeClassName="active">Industry</NavLink></li>
                        <li><NavLink to="/careers" activeClassName="active">Careers</NavLink></li>
                        <li><NavLink to="/pages" activeClassName="active">Pages</NavLink></li>
                        <li><NavLink to="/contactus" activeClassName="active">Contact Us</NavLink></li>
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