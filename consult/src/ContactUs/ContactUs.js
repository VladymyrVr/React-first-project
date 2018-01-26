import React from 'react';

//components
import Welcome from  '../Welcome'
import ConnectUs from './ConnectUs'
import WriteUs from "./WriteUs";

class ContactUs extends React.Component {
    constructor(props){
        super(props);

    }

    render () {
        return (
            <div>
                <Welcome header='Contact Us'/>
                <ConnectUs/>
                <WriteUs/>
            </div>
        )
    }
}

export default ContactUs;