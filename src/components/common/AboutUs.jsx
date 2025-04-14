import { FaShieldAlt, FaUsers, FaHandshake, FaLightbulb, FaChartLine, FaGlobe } from "react-icons/fa"

function AboutUs() {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Savdhaan India</h1>
          <p>Our mission, vision, and the team behind India's premier cybersecurity awareness platform.</p>
        </div>
      </section>

      <section className="container" style={{ padding: "4rem 0" }}>
        <div className="stagger-animation" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "var(--border-radius-lg)",
              boxShadow: "var(--shadow-md)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Our Story</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>
                Savdhaan India was founded in 2020 with a clear mission: to empower Indian citizens with the knowledge
                and tools they need to navigate the digital world safely. As cyber threats continue to evolve and target
                individuals and businesses across India, we recognized the need for a comprehensive platform that
                bridges the gap between complex cybersecurity concepts and everyday users.
              </p>
              <p>
                Our team of cybersecurity experts, legal professionals, and educators came together to create a resource
                that makes cybersecurity accessible to everyone, regardless of their technical background. We believe
                that awareness is the first line of defense against cyber threats, and our platform is designed to raise
                that awareness across the nation.
              </p>
              <p>
                Today, Savdhaan India serves millions of users, providing them with up-to-date information on cyber
                threats, Indian cyber laws, complaint procedures, and practical security tools. We continue to grow and
                evolve, adapting to the changing digital landscape and the needs of our users.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "var(--border-radius-lg)",
                boxShadow: "var(--shadow-md)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaShieldAlt style={{ fontSize: "2.5rem", color: "var(--primary-color)" }} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower every Indian citizen with the knowledge, tools, and resources needed to stay safe in the
                digital world, and to foster a culture of cybersecurity awareness across the nation.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "white",
                borderRadius: "var(--border-radius-lg)",
                boxShadow: "var(--shadow-md)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "var(--success-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaLightbulb style={{ fontSize: "2.5rem", color: "var(--success-color)" }} />
              </div>
              <h3>Our Vision</h3>
              <p>
                A digitally secure India where every citizen is equipped with the knowledge and tools to protect
                themselves online, and where cybercrime is effectively addressed through awareness, education, and
                proper legal channels.
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "var(--border-radius-lg)",
              boxShadow: "var(--shadow-md)",
              padding: "2rem",
              marginTop: "2rem",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: "2rem" }}>Our Core Values</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "2rem",
              }}
            >
              <div style={{ display: "flex", gap: "1rem" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "var(--primary-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaUsers style={{ fontSize: "1.5rem", color: "var(--primary-color)" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Inclusivity</h3>
                  <p style={{ marginBottom: 0 }}>
                    We believe cybersecurity knowledge should be accessible to all Indians, regardless of technical
                    background, language, or location.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "var(--success-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaHandshake style={{ fontSize: "1.5rem", color: "var(--success-color)" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Integrity</h3>
                  <p style={{ marginBottom: 0 }}>
                    We are committed to providing accurate, unbiased information and maintaining the highest ethical
                    standards in all our operations.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "var(--warning-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaChartLine style={{ fontSize: "1.5rem", color: "var(--warning-color)" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Innovation</h3>
                  <p style={{ marginBottom: 0 }}>
                    We continuously evolve our platform and resources to address emerging cyber threats and leverage new
                    technologies for better security solutions.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaGlobe style={{ fontSize: "1.5rem", color: "var(--accent-color)" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Empowerment</h3>
                  <p style={{ marginBottom: 0 }}>
                    We don't just inform; we equip users with practical tools and actionable knowledge to take control
                    of their digital security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Mission</h2>
            <p>
              Help us create a safer digital India by spreading awareness and sharing our resources with your community.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
              <a href="/resources" className="btn-secondary">
                Explore Resources
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs