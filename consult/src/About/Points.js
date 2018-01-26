import React from 'react';

const Points = () => {
    return (
        <section className="points-section">
            <div className="wrapper">
                <ul className="points-list">
                    <li>
                        <div className="img-wrapper">
                            <img src="../img/our-team.png" alt="Our team"/>
                        </div>
                        <h3>Our Team</h3>
                        <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy</p>
                        <button type="button" className="btn-middle">Our team</button>
                    </li>
                    <li>
                        <div className="img-wrapper">
                            <img src="../img/career.png" alt="career"/>
                        </div>
                        <h3>Careers</h3>
                        <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy</p>
                        <button type="button" className="btn-middle">Join team</button>
                    </li>
                    <li>
                        <div className="img-wrapper">
                            <img src="../img/services.png" alt="" />
                        </div>
                        <h3>Services</h3>
                        <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy</p>
                        <button type="button" className="btn-middle">Full Services</button>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Points;