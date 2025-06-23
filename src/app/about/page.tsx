import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Muhammad Jaffer a <span>Full/Mern Stack Developer</span>
                  </h2>
                  <p>
                    Hi! My name is Muhammad Jaffer. I am a Full/Mern Stack Developer, and I am
                    very passionate and dedicated to my work. With 2 years
                    experience as a Full/Mern Stack Developer, I have acquired the skills and
                    knowledge necessary to successfully compelete a full stack web application. I enjoy
                    every step of the development process, from discussion and
                    collaboration.
                  </p>
                </div>
              </div>
              <div className="row">
                {/* <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.urfolio.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>your@email.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>SSC</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+99 ********</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Your City</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div> */}
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html5</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Css3</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Typescript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>React Js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Express Js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Node Js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Mongo DB</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Next JS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Tailwind CSS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Material UI</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>OAuth</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">

                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">

                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h4 className="timeline-title">Full Stack Developer</h4>
                          <h6 className="timeline-date">
                            Netbots
                            <span> | </span>
                            <i className="fa fa-calendar" /> May 2023 to Dec 2024
                          </h6>
                          <ul className="timeline-text">
                            <li>Creating Web Pages: Building user interfaces and interactive web pages using React.</li>
                            <li>Handling Data: Managing data and interactions between the user interface and the server.</li>
                            <li> Working with Databases: Storing and retrieving data in a MongoDB database.</li>
                            <li>Team Collaboration: Working with designers and other developers to make the app come together.</li>
                            <li>Fixing Issues: Identifying and fixing problems in the app to make it work smoothly.</li>
                            <li>Learning New Things: Keeping up with the latest tools and ways of doing things.</li>
                            <li>Documenting Work: Writing down how your code works so others can understand.</li>
                            <li>Managing Time: Staying organized to get things done on time.</li>
                            <li>Learning and Growing: Improving your skills and contributing to the team&apos;s success.</li>
                          </ul>

                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h4 className="timeline-title">Frontend Developer</h4>
                          <h6 className="timeline-date">
                            Curli Dev
                            <span> | </span>
                            <i className="fa fa-calendar" /> Feb 2024 to May 2024
                          </h6>
                          <ul className="timeline-text">
                            <li>Creating Web Pages: Building user interfaces and interactive web pages using React in Nextjs framework along with TypeScript.</li>
                            <li>Team Collaboration: Working with designers and other developers to make the app come together.</li>
                            <li>Fixing Issues: Identifying and fixing problems in the app to make it work smoothly.</li>
                            <li>Documenting Work: Writing down how your code works so others can understand.</li>
                          </ul>

                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h4 className="timeline-title">
                            Bachelor's in Computer Science
                          </h4>
                          <h6 className="timeline-date">
                            University of Baltistan
                            <span> | </span>
                            <i className="fa fa-calendar" /> 2019 to 2033
                          </h6>

                          <p className="timeline-text">
                            City: Skardu, Pakistan || website:{" "}
                            <a href="https://www.uobs.edu.pk">www.uobs.edu.pk</a>
                          </p>
                        </div>
                        {/* Timeline Item end */}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
