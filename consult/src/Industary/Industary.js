import React from 'react';

//components

import Welcome from '../Welcome';
import Industry from './Industry';
import Testimonials from '../Home/Testimonials';

class Industary extends React.Component {



    render() {
        return (
            <div>
                <Welcome header='Industary'/>
                <Industry/>
                <Testimonials/>
            </div>
        )
    };
}

export default Industary;
