import React from "react";

const Projects = () => {
  return (
      <section className="projects">
          <div className="wrapper">
              <h2>Projects</h2>
              <div className="flex-wrapper">
                  <div className="project-block-middle">
                      <div className="img-wrapper-middle">
                          <img src="img/banking-pr.png" alt="Banking"/>
                      </div>
                      <div className="project-descript">
                          <h2>Project Heading</h2>
                          <p>Popularised in the 1960s with the release
                              Letraset sheets containing Lorem.</p>
                      </div>
                  </div>
                  <div className="project-block-large">
                      <div className="img-wrapper-large">
                          <img src="img/real-estate-1.png" alt="Real Estate"/>
                      </div>
                      <div className="project-descript">
                          <h2>Project Heading</h2>
                          <p>Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                              passages. fact that a reader will be distracted by the readable of a page when.</p>
                      </div>
                  </div>
              </div>
              <button type="button" className="btn-middle">Full projects</button>
          </div>
      </section>
  )
};

export default Projects;