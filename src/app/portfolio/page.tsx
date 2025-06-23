import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          {/* <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="graphics-design">
                Graphics Design
              </button>
              <button type="button" data-filter="web-design">
                Web Design
              </button>
              <button type="button" data-filter="wordpress">
                Wordpress
              </button>
            </div>
          </div> */}
          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="FYP">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/fyp-web.jpg" alt="portfolio" />
                </div>
                <a href="https://bon-appetit-web.vercel.app/" className="portfolio-info">
                  <h4>Bon Appetit Online Food Order processing Website</h4>
                  <div className="icon">
                    <i className="fa fa-arrow-right" />
                  </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="FYP">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/fyp-admin.jpg" alt="portfolio" />
                </div>
                <a href="https://github.com/Jaffer720/FYP/tree/main/Frontend" className="portfolio-info">
                  <h4>Bon Appetit Online Food Order processing Admin pannel</h4>
                  <div className="icon">
                    <i className="fa fa-arrow-right" />
                  </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="Rinor">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/rinor-dmc.jpg" alt="portfolio" />
                </div>
                <a href="https://dmc-listings-rinor-beta.vercel.app/" className="portfolio-info">
                  <h4>Rinor DMC listing</h4>
                  <div className="icon">
                    <i className="fa fa-arrow-right" />
                  </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            <div className="portfolio-item padd-15" data-category="other">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/hhn.jpg" alt="portfolio" />
                </div>
                <a  href="https://github.com/Jaffer720/healthy-habitat-network" className="portfolio-info">
                  <h4>healthy-habitat-network</h4>
                  <div className="icon">
                    <i className="fa fa-arrow-right" />
                  </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            <div className="portfolio-item padd-15" data-category="rinor">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/rinor-site.jpg" alt="portfolio" />
                </div>
                <a href="https://rinor-site-latest-version.vercel.app/" className="portfolio-info">
                  <h4>Rinor Site</h4>
                  <div className="icon">
                    <i className="fa fa-arrow-right" />
                  </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            <div className="portfolio-item padd-15" data-category="Backend">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/Piazza-Api.jpg" alt="portfolio" />
                </div>
                <a href="https://github.com/Jaffer720/piazzaApi" className="portfolio-info">
                  <h4>piazzaApi</h4>
                  <div className="icon">
                    <i className="fa fa-arrow-right" />
                  </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
