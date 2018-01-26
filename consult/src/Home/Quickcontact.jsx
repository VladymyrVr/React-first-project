import React from "react";

const Quickcontact = () => {
    const contactlist = [
        {
            className: 'email-info',
            header: 'Email',
            content: 'info@consultplus.com'
        },
        {
            className: 'phone-info',
            header: 'call us',
            content: '+91 8879 8767 990'
        },
        {
            className: 'career-info',
            header: 'career',
            content: 'consult@career.com'
        }
    ];
    return (
        <section className="quick-contact">
            <div className="wrapper">
                <h2>Quick contact</h2>
                <ul className="contact-list">
                    {
                        contactlist.map((item, index) => {
                            return (
                                <li>
                                    <div className={item.className + ' contact-info'}>
                                        <p>{item.header}</p>
                                        <span>{item.content}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
};

export default Quickcontact;