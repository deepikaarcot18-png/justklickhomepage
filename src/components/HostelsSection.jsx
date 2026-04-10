import hostel1Img from "../assets/hostel1.jpg";
import hostel2Img from "../assets/hostel2.jpg";

export default function HostelsSection() {
  return (
    <section className="hostels-section" id="hostels">
      <div className="container hostels-layout">
        <div className="hostels-visual">
          <div className="hostels-main-image-wrap">
            <img
              src={hostel1Img}
              alt="Premium hostel room"
              className="hostels-main-image"
            />
          </div>

          <div className="hostels-overlay-card">
            <img
              src={hostel2Img}
              alt="Comfortable stay"
              className="hostels-overlay-image"
            />
          </div>
        </div>

        <div className="hostels-content">
          <span className="hostels-label">HOSTEL SERVICES</span>

          <h2>Experience Comfortable & Verified Hostel Stays</h2>

          <p className="hostels-description">
            Discover safe, comfortable, and affordable hostel options for
            students, professionals, and travelers.
          </p>

          <div className="hostels-points-grid">
            <div className="hostels-point">Safe & verified stays</div>
            <div className="hostels-point">Budget-friendly options</div>
            <div className="hostels-point">Furnished rooms</div>
            <div className="hostels-point">Prime city locations</div>
          </div>

          <div className="hostels-feature-list">
            <div className="hostels-feature-item">
              <span className="hostels-bullet"></span>
              <p>For students and working professionals</p>
            </div>

            <div className="hostels-feature-item">
              <span className="hostels-bullet"></span>
              <p>Shared and private rooms available</p>
            </div>

            <div className="hostels-feature-item">
              <span className="hostels-bullet"></span>
              <p>Essential amenities included</p>
            </div>

            <div className="hostels-feature-item">
              <span className="hostels-bullet"></span>
              <p>Reliable listings with easy comparison</p>
            </div>
          </div>

          <button type="button" className="btn btn-light hostels-btn">
            Explore Hostels
          </button>
        </div>
      </div>
    </section>
  );
}