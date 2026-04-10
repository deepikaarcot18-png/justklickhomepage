import overseas2Img from "../assets/overseas2.jpg";

export default function OverseasSection() {
  return (
    <section className="overseas-section" id="overseas">
      <div className="overseas-grid">
        <div className="overseas-image-wrap">
          <img
            src={overseas2Img}
            alt="Overseas education and migration services"
            className="overseas-main-image"
          />

          <div className="overseas-floating-card">
            <span className="overseas-mini-tag">Global Support</span>
            <h4>Study. Move. Grow.</h4>
            <p>Admissions, visas, and career guidance.</p>
          </div>
        </div>

        <div className="overseas-content">
          <span className="overseas-label">OVERSEAS</span>

          <h2>Overseas Education & Migration</h2>

          <p className="overseas-description">
            Trusted support for study abroad, visa processing, and global career
            opportunities.
          </p>

          <div className="overseas-feature-grid">
            <div className="overseas-feature-item">
              <span className="feature-icon">✈</span>
              <div>
                <h4>Visa Support</h4>
                <p>Fast and clear documentation help.</p>
              </div>
            </div>

            <div className="overseas-feature-item">
              <span className="feature-icon">🎓</span>
              <div>
                <h4>Admissions</h4>
                <p>University and course guidance.</p>
              </div>
            </div>

            <div className="overseas-feature-item">
              <span className="feature-icon">🌍</span>
              <div>
                <h4>Destination Help</h4>
                <p>Choose the right country and path.</p>
              </div>
            </div>

            <div className="overseas-feature-item">
              <span className="feature-icon">💼</span>
              <div>
                <h4>Career Abroad</h4>
                <p>Plan your future with confidence.</p>
              </div>
            </div>
          </div>

          <div className="overseas-bottom-row">
            <div className="overseas-stat">
              <strong>500+</strong>
              <span>Verified consultants</span>
            </div>

            <div className="overseas-stat">
              <strong>40+</strong>
              <span>Top destinations</span>
            </div>

            <button type="button" className="overseas-btn">
              Explore Overseas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}