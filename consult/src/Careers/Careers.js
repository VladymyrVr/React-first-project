import React from 'react';

//components
import Welcome from '../Welcome';
import Career from './Career';
import CompaniesWeHelped from './CompaniesWeHelped';
import Testimonials from "../Home/Testimonials";


class Careers extends React.Component {
    render () {
        return (
            <div>
                <Welcome header='Careers'/>
                <Career/>
                <CompaniesWeHelped/>
                <Testimonials/>
            </div>
        )
    }
}

export default Careers;