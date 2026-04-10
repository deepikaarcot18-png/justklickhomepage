import realEstateImg from "../assets/realestate2.jpg";

export default function RealEstatesSection() {
  return (
    <section className="real-estates-section" id="real-estates">
      <div className="container real-estates-layout">
        <div className="real-estates-content">
          <span className="real-estates-label">PREMIUM PROPERTY SEARCH</span>

          <h2>
            DISCOVER PRIME
            <br />
            REAL ESTATE LOCATIONS
          </h2>

          <p className="real-estates-description">
            Search verified real estate listings across top locations with
            trusted support, premium facilities, and transparent property
            details. Explore apartments, villas, office spaces, rentals, and
            commercial properties that match your lifestyle and business needs.
          </p>

          <div className="real-estates-features">
            <span>Verified Listings</span>
            <span>Top Locations</span>
            <span>Modern Facilities</span>
            <span>Trusted Agents</span>
          </div>
        </div>

        <div className="real-estates-visual">
          <div className="real-estates-image-wrap">
            <img
              src={realEstateImg}
              alt="Premium real estate property"
              className="real-estates-main-image"
            />
          </div>

          <div className="real-estates-quote-card">
            <div className="real-estates-quote-line"></div>

            <div className="real-estates-quote-content">
              <p>
                Find premium spaces in the right locations with better
                facilities, smarter choices, and reliable real estate guidance.
              </p>
              <strong>Location Based Property Search</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}