import React from 'react';

//components
import Mainwelcome from "./Mainwelcome";
import ShortAboutUs from "./Short-about-us";
import Features from "./Features";
import Projects from "./Projects";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Quickcontact from "./Quickcontact";

class Home extends React.Component {

    render () {
        return (
            <div>
                <Mainwelcome/>
                <ShortAboutUs/>
                <Features/>
                <Projects/>
                <Services/>
                <Testimonials/>
                <Quickcontact/>
            </div>
        )
    }
}

export default Home;

