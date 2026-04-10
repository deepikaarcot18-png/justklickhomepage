import trainingImg from "../assets/training1.jpg"; // ✅ adjust path if needed

export default function TrainingInstitutesSection() {
  return (
    <section className="training-section" id="training-institutes">
      <div className="container training-layout">

        {/* LEFT IMAGE */}
        <div className="training-image-wrap">
          <img
            src={trainingImg}   // ✅ use imported image
            alt="Training institute"
            className="training-main-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="training-content">
          <h2>Training Institutes</h2>

          <p className="training-description">
            Discover top training institutes offering industry-relevant skills,
            certifications, and career-focused learning. Build expertise with
            real-world training designed to elevate your career growth.
          </p>

          <div className="training-points">
            <div className="training-point">
              <h4>Professional Courses</h4>
              <p>Industry-focused programs in software, business, and design.</p>
            </div>

            <div className="training-point">
              <h4>Certification Programs</h4>
              <p>Globally recognized certifications that enhance credibility.</p>
            </div>

            <div className="training-point">
              <h4>Career Growth</h4>
              <p>Hands-on training aligned with real job requirements.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}