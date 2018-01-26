import React from "react";

class Testimonials extends React.Component {
    componentDidMount() {
        const $ = window.$;

        $('.sl').slick({
            centerMode: true,
            slidesToShow: 3,
            centerPadding: false,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            infinite: true
        });
    }


    render() {
        return (
            <section className="testimonials">
                <div className="wrapper">
                    <h2>Testimonials</h2>
                    <div className="sl">

                        <div className="sl-slide">
                            <div className="img-wrapper-small-circle">
                                <img src="img/2.png" alt=""/>
                            </div>
                        </div>
                        <div className="sl-slide">
                            <div className="img-wrapper-small-circle">
                                <img src="img/3.png" alt=""/>
                            </div>
                        </div>
                        <div className="sl-slide">
                            <div className="img-wrapper-small-circle">
                                <img src="img/3.png" alt=""/>
                            </div>
                        </div>
                        <div className="sl-slide">
                            <div className="img-wrapper-small-circle">
                                <img src="img/1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <blockqoute className="client-comment">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type speci
                        book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    </blockqoute>
                    <div className="info-client">
                        <span>Client Name</span>
                        <p>Designation</p>
                    </div>
                </div>
            </section>
        )
    };
}

export default Testimonials;