import React from 'react';

const PricingPlans = () => {
    return (
        <section className="pricing-plans">
            <div className="wrapper">
                <h2>Pricing Plans</h2>
                <ul className="plan-list">
                    <li>
                        <div className="category-plan basic-plan">
                            <p><span className="price-plan">100$</span>/ month</p>
                            <p className="plan-name">Basic plan</p>
                        </div>
                        <div className="detail-info-plan">
                            <ul className="include-price">
                                <li>
                                    <p>Duis commodo mollis</p>
                                </li>
                                <li>
                                    <p>Nam aliquet sagittis.</p>
                                </li>
                                <li>
                                    <p>Fusce eleifend lectus.</p>
                                </li>
                            </ul>
                            <button type="button" className="btn-middle">Choose plan</button>
                        </div>
                    </li>
                    <li>
                        <div className="category-plan silver-plan">
                            <p><span className="price-plan">150$</span>/ month</p>
                            <p className="plan-name">Silver plan</p>
                        </div>
                        <div className="detail-info-plan">
                            <ul className="include-price">
                                <li>
                                    <p>Duis commodo mollis</p>
                                </li>
                                <li>
                                    <p>Nam aliquet sagittis.</p>
                                </li>
                                <li>
                                    <p>Fusce eleifend lectus.</p>
                                </li>
                                <li>
                                    <p>Etiam pulvinar elementum.</p>
                                </li>
                            </ul>
                            <button type="button" className="btn-middle">Choose plan</button>
                        </div>
                    </li>
                    <li>
                        <div className="category-plan gold-plan">
                            <p><span className="price-plan">200$</span>/ month</p>
                            <p className="plan-name">Golden plan</p>
                        </div>
                        <div className="detail-info-plan">
                            <ul className="include-price">
                                <li>
                                    <p>Duis commodo mollis</p>
                                </li>
                                <li>
                                    <p>Nam aliquet sagittis.</p>
                                </li>
                                <li>
                                    <p>Fusce eleifend lectus.</p>
                                </li>
                                <li>
                                    <p>Etiam pulvinar elementum</p>
                                </li>
                            </ul>
                            <button type="button" className="btn-middle">Choose plan</button>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default PricingPlans;