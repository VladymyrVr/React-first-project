import React from "react";

const Services = () => {
    const list = [
        {
            className: 'consultation',
            header: 'business consultation',
            content: 'Many variations of passages of Lorem available, but the majority have suffered alteration in some form, by injected humour'
        },
        {
            className: 'boost-local-business',
            header: 'business consultation',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.'
        },
        {
            className: 'accounting',
            header: 'accounting',
            content: 'professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.'
        }
    ];
  return (
      <section className="services">
          <div className="wrapper">
              <h2>Services</h2>
              <ul className="service-list">
                  {
                      list.map((item, index) => {
                          return (
                              <li key={item.className} className={item.className}>
                                  <h2>{item.header}</h2>
                                  <p>{item.content}</p>
                              </li>
                          );
                      })
                  }
              </ul>
              <button type="button" className="btn-middle">Full Services</button>
          </div>
      </section>
  )
};

export default Services;