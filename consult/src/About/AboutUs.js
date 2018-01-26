import React from 'react';

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="wrapper">
                <div className="flex-wrapper">
                    <ul className="inform-list">
                        <li>
                            <h2>About Us</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book
                                has survived not only five centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                containing .</p>
                        </li>
                        <li>
                            <h2>Vision</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled</p>
                        </li>
                        <li>
                            <h2>Mission</h2>
                            <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled.</p>
                        </li>
                    </ul>
                    <div className="sidebar">
                        <div className="video-imitation">
                            <img src="../img/about-us.png" alt="about-us"/>
                            <button type="button" className="btn-play-video"></button>
                        </div>
                        <div className="consultation-field">
                            <h2>
                                FREE Consultation
                            </h2>
                            <form action="">
                                <input type="text" className="name" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                                <textarea name="comment" placeholder="comment"></textarea>
                                <button type="button" className="btn-middle">Submit now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutUs;