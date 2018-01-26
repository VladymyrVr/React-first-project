import React from 'react';

//components
import Welcome from '../Welcome';
import PricingPlans from './PricingPlans';
import Faq from "./Faq";

class Pages extends React.Component {
    render () {
        return (
            <div>
                <Welcome header='Pages'/>
                <PricingPlans/>
                <Faq/>
            </div>
        )
    }
}

export default Pages;