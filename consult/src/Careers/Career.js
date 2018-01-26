import React from 'react';

class Career extends React.Component {

    componentDidMount (){
        const $ = window.$;
            $('.apply').click(function(){
                $(this).toggleClass('active-button').parent().children('.job-apply').slideToggle('slow');
                $('.vacancy-info').toggleClass('clear-border');
                return false;
            });
    }
    render () {
        return (
            <section className="careers">
                <div className="wrapper">
                    <h2>New Jobs</h2>
                    <ul className="jobs-list">
                        <li>
                            <div className="vacancy-info">
                                <div className="vacancy">
                                    <p>Accountant manager</p>
                                    <span>full time</span>
                                </div>
                                <p className="location"> Location:<span>San Francisco</span></p>
                                <button type="button" className="btn-middle apply">Apply Now</button>
                                <form action="" className="job-apply">
                                    <input type="text" placeholder="First Name" />
                                    <input type="text" placeholder="Last Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="text" placeholder="Phone Number" />
                                    <input type="text" placeholder="Location(City)" />
                                    <input type="text" placeholder="Resume/CV" />
                                    <textarea placeholder="Write your self / copy paste your Resume" ></textarea>
                                    <button type="button" className="btn-long">Submit application</button>
                                </form>
                            </div>
                        </li>
                        <li>
                            <div className="vacancy-info">
                                <div className="vacancy">
                                    <p>Computer & information systam manager</p>
                                    <span>full time</span>
                                </div>
                                <p className="location"> Location:<span>San Francisco</span></p>
                                <button type="button" className="btn-middle apply">Apply Now</button>
                                <form action="" className="job-apply">
                                    <input type="text" placeholder="First Name" />
                                    <input type="text" placeholder="Last Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="text" placeholder="Phone Number" />
                                    <input type="text" placeholder="Location(City)" />
                                    <input type="text" placeholder="Resume/CV" />
                                    <textarea placeholder="Write your self / copy paste your Resume" ></textarea>
                                    <button type="button" className="btn-long">Submit application</button>
                                </form>
                            </div>
                        </li>
                        <li>
                            <div className="vacancy-info">
                                <div className="vacancy">
                                    <p>sales executive</p>
                                    <span>full time</span>
                                </div>
                                <p className="location"> Location:<span>San Francisco</span></p>
                                <button type="button" className="btn-middle apply">Apply Now</button>
                                <form action="" className="job-apply">
                                    <input type="text" placeholder="First Name" />
                                    <input type="text" placeholder="Last Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="text" placeholder="Phone Number" />
                                    <input type="text" placeholder="Location(City)" />
                                    <input type="text" placeholder="Resume/CV" />
                                    <textarea placeholder="Write your self / copy paste your Resume" ></textarea>
                                    <button type="button" className="btn-long">Submit application</button>
                                </form>
                            </div>
                        </li>
                        <li>
                            <div className="vacancy-info">
                                <div className="vacancy">
                                    <p>education consultants</p>
                                    <span>full time</span>
                                </div>
                                <p className="location"> Location:<span>San Francisco</span></p>
                                <button type="button" className="btn-middle apply">Apply Now</button>
                                <form action="" className="job-apply">
                                    <input type="text" placeholder="First Name" />
                                    <input type="text" placeholder="Last Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="text" placeholder="Phone Number" />
                                    <input type="text" placeholder="Location(City)" />
                                    <input type="text" placeholder="Resume/CV" />
                                    <textarea placeholder="Write your self / copy paste your Resume" ></textarea>
                                    <button type="button" className="btn-long">Submit application</button>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    };
    }


export default Career;