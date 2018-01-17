import React from "react";

const Features = () => {
  return (
      <section className="features">
          <div className="wrapper">
              <h2>Our features</h2>
              <ul className="features-list">
                  <li className="support">
                      <h2>24 Hour Support</h2>
                      <p> containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus</p>
                  </li>
                  <li className="business">
                      <h2>Business Boosting</h2>
                      <p> established fact that a reader will be distracted by
                          the readable content of a page when looking</p>
                  </li>
                  <li className="security">
                      <h2>Full Security</h2>
                      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                  </li>
                  <li className="process">
                      <h2>Creative Process</h2>
                      <p>There are many variations of passages of Ipsum avail
                          able, but the majority have suffered alteration.</p>
                  </li>
              </ul>
              <div className="boost-business">
                  <p>If you want to boost your business Contact us</p>
                  <button type="button" className="btn-long">Boost Your Business</button>
              </div>
          </div>
      </section>
  )
};

export default Features;