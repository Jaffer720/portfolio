
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/Jaffer.jpg"
              alt="Jaffer Profile"
              className="shadow-dark"
            />
            <h1>Muhammad Jaffer</h1>
            <p className="typewriter">Full/MERN Stack Developer || Frontend Developer || Backend Develper</p>
            <div className="social-links">
              <a href="mailto:mjaffer720@gmail.com" target="_blank">
                <i className="fa fa-envelope" />
              </a>
              <a href="https://wa.me/+923475788068" target="_blank">
                <i className="fa fa-whatsapp" />
              </a>
              <a href="https://github.com/Jaffer720" target="_blank">
                <i className="fa fa-github" />
              </a>
              {/* <a href="https://instagram.com/" target="_blank">
                <i className="fa fa-instagram" />
              </a> */}
              <a href="https://linkedin.com/in/muhammad-jaffer-9b2142253/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
