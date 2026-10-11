

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Yeabsra<span>.</span></div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <main>

        <section className="hero">

          <div className="hero-left">
            <p className="label">computer scince</p>

            <h1>
              Yeab
              <br />
              belay
              <span>.</span>
            </h1>

            <p className="hero-text">
              computer science student and aspiring developer
              interested in technology, software, and creating
              useful digital solutions.
            </p>

            <a href="#projects" className="view-button">
              Explore My Work →
            </a>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <span>Based in</span>
              <strong>Ethiopia</strong>
            </div>

            <div className="hero-card">
              <span>Education</span>
              <strong>Computer Science</strong>
            </div>

            <div className="hero-card">
              <span>Graduation</span>
              <strong>2026</strong>
            </div>
          </div>

        </section>

        {/* About */}
        <section id="about" className="content-section">

          <div className="section-title">
            <span>01</span>
            <h2>About Me</h2>
          </div>

          <div className="section-content">
            <p>
              I am a Computer Science student passionate about
              technology and software development.
            </p>

            <p>
              I enjoy learning new technologies, solving problems,
              and building practical projects that can make everyday
              experiences easier and better.
            </p>
          </div>

        </section>

        {/* Education */}
        <section id="education" className="content-section">

          <div className="section-title">
            <span>02</span>
            <h2>Education</h2>
          </div>

          <div className="education-item">

            <div className="year">
              2026
            </div>

            <div>
              <h3>University of Gondar</h3>

              <p className="degree">
                Bachelor of Science in Computer Science
              </p>

              <p className="description">
                Academic background in computer science,
                programming, databases, networking, and
                information technology.
              </p>
            </div>

          </div>

        </section>

        {/* Skills */}
        <section className="content-section">

          <div className="section-title">
            <span>03</span>
            <h2>Skills</h2>
          </div>

          <div className="skill-list">

            <div>
              <strong>Frontend</strong>
              <p>HTML · CSS · JavaScript · React · TypeScript</p>
            </div>

            <div>
              <strong>Programming</strong>
              <p>Python · JavaScript</p>
            </div>

            <div>
              <strong>Tools</strong>
              <p>Git · GitHub · VS Code</p>
            </div>

          </div>

        </section>

        {/* Projects */}
        <section id="projects" className="content-section">

          <div className="section-title">
            <span>04</span>
            <h2>Projects</h2>
          </div>

          <div className="project-list">

            <article className="project-item">
              <span>01</span>

              <div>
                <h3>Addis Food Review</h3>

                <p>
                  A food discovery and review website focused
                  on restaurants around Addis Ababa.
                </p>

                <small>
                  HTML · CSS · JavaScript
                </small>
              </div>
            </article>

            <article className="project-item">
              <span>02</span>

              <div>
                <h3>Travel 365 Days</h3>

                <p>
                  A tourism website showcasing destinations
                  and travel experiences in Ethiopia.
                </p>

                <small>
                  HTML · CSS · JavaScript
                </small>
              </div>
            </article>

            <article className="project-item">
              <span>03</span>

              <div>
                <h3>smart scheduling</h3>

              

                <small>
                  React · TypeScript · GPS
                </small>
              </div>
            </article>

          </div>

        </section>

        {/* Experience */}
        <section className="content-section">

          <div className="section-title">
            <span>05</span>
            <h2>Experience</h2>
          </div>

          <div className="education-item">

            <div className="year">
              2025
            </div>

            <div>
              <h3>Networking Intern</h3>

              <p className="degree">
                Addis Ababa City Administration Innovation and
                Technology Development Bureau
              </p>

              <p className="description">
                Two-month internship experience focused on
                networking and information technology.
              </p>
            </div>

          </div>

        </section>

        {/* Contact */}
        <section id="contact" className="contact">

          <p className="label">06 · CONTACT</p>

          <h2>
            Let's build
            <br />
            something useful<span>.</span>
          </h2>

          <div className="contact-links">

            <a href="mailto:your-email@gmail.com">
              Email ↗
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer>
        <span>© 2026 Yeab Belay</span>
        <span>React · TypeScript</span>
      </footer>

    </div>
  );
}

export default App;

