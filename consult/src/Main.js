import React from 'react';

import { Route } from 'react-router-dom';

//components
import Home from './Home/Home';
import About from './About/About'
import Industary from './Industary/Industary';
import Careers from "./Careers/Careers";
import Pages from "./Pages/Pages";
import ContactUs from './ContactUs/ContactUs';

class Main extends React.Component {

    render () {
        return (
            <div>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/industary' component={Industary}/>
                <Route path='/careers' component={Careers}/>
                <Route path='/pages' component={Pages}/>
                <Route path='/contactus' component={ContactUs}/>
            </div>
        )
    }
}

export default Main;