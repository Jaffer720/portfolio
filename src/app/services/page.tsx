import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>Our Services</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Logo Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-desktop" /></div>
          <h4>Frontend Development</h4>
          <p>I build responsive frontends using NextJs, React and Tailwind CSS with a focus on clean UI and reusable components. I follow modular design, use Context API for state management, and integrate APIs efficiently.</p>
        </div>
      </div>
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-gears" /></div>
          <h4>Backend Development</h4>
          <p>I develop robust backend systems using Node.js and Express, ensuring secure and efficient data handling. My approach includes RESTful API design, database integration (MongoDB, SQL), and implementing authentication/authorization protocols to protect user data.</p>
        </div>
      </div>
      {/* Service Item 2 End */}

      {/* Service Item 4: Web Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-code" /></div>
          <h4>Full Stack Web-App Development</h4>
          <p>I build full-stack web applications using the MERN stack with clean, modular code and RESTful APIs. My approach ensures seamless client-server integration, efficient state management, and responsive UI with React and Tailwind CSS.</p>
        </div>
      </div>
      {/* Service Item 4 End */}
      {/* Service Item 3: WordPress */}
      {/* <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-wordpress" /></div>
          <h4>WordPress Development</h4>
          <p>Harness the power of WordPress for your website. Our experts will build a feature-rich and scalable
            WordPress site that empowers you to manage content effortlessly and stay ahead in the digital
            landscape.</p>
        </div>
      </div> */}
      {/* Service Item 3 End */}
      {/* Service Item 5: Video Editing */}
      {/* <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-film" /></div>
          <h4>Professional Video Editing</h4>
          <p>Enhance your video content with our professional video editing services. We will transform your raw
            footage
            into polished, engaging videos that captivate your audience and convey your message effectively.</p>
        </div>
      </div> */}
      {/* Service Item 5 End */}
      {/* Service Item 6: SEO Optimization */}
      {/* <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-rocket" /></div>
          <h4>SEO Optimization</h4>
          <p>Boost your online visibility and drive organic traffic to your website with our SEO optimization
            services.
            Our experts employ proven strategies to improve your search engine rankings and grow your online
            presence.
          </p>
        </div>
      </div> */}
      {/* Service Item 6 End */}
    </div>
  </div>
</section>


    </>
  );
};

export default Service;
