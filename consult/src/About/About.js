import React from 'react';

//components

import Welcome from '../Welcome';
import AboutUs from './AboutUs';
import Points from './Points';
import Testimonials from '../Home/Testimonials';

class About extends React.Component {



    render() {
        return (
            <div>
                <Welcome header='About Us'/>
                <AboutUs/>
                <Points/>
                <Testimonials/>
            </div>
        )
    };
}

export default About;
