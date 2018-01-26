import React from 'react';

const ConnectUs = () => {
    return (
        <section className="connect-us">
            <div className="wrapper">
                <div className="connect-information">
                    <h2>Connect us</h2>
                    <ul className="connect-list">
                        <li className="phone">
                            <h3>Call us</h3>
                            <span>+885 6886 5554</span>
                        </li>
                        <li className="email">
                            <h3>Email</h3>
                            <span>info@consultplus.com</span>
                        </li>
                        <li className="address">
                            <h3>Address</h3>
                            <span>Department 98 44-46 Mornigside Road Edinburgh, Scotland</span>
                        </li>
                    </ul>
                </div>
                <div className="map">
                    <img src="../img/map.png" alt="map" />
                </div>
            </div>
        </section>
    )
};

export default ConnectUs;