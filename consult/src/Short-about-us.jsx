import React from "react";

const ShortAboutUs = () => {
    return (
        <section className="short-about-us">
            <div className="wrapper">
                <div className="short-info">
                    <h2>About us</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    <button type="button" className="btn-middle">Read More</button>
                </div>
                <div className="slider">
                    <div><img src="img/logo-1.png" alt=""/></div>
                    <div><img src="img/videohive.png" alt=""/></div>
                    <div><img src="img/audiojungle.png" alt=""/></div>
                    <div><img src="img/graphicriver.png" alt=""/></div>
                    <div><img src="img/photodune.png" alt=""/></div>
                    <div><img src="img/graphicriver.png" alt=""/></div>
                    <div><img src="img/photodune.png" alt=""/></div>
                </div>
            </div>
        </section>
    )
};

export default  ShortAboutUs;