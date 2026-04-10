import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#hero" className="footer-logo-link">
            <img src={logo} alt="Justklick Logo" className="footer-logo" />
          </a>

          <p className="footer-brand-text">
            Discover trusted services, businesses, and professionals with a
            seamless, premium, and user-friendly experience across every category.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#hero">Home</a>
            <a href="#categories">Categories</a>
            <a href="#footer">Contact</a>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <a href="#overseas">Overseas</a>
            <a href="#hostels">Hostels</a>
            <a href="#hospitals">Hospitals</a>
            <a href="#real-estates">Real Estates</a>
            <a href="#training-institutes">Training Institutes</a>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <a href="/help-center">Help Center</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms & Conditions</a>
            <a href="/post-requirement">Post Requirement</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <a href="mailto:support@justklick.com">support@justklick.com</a>
            <a href="tel:+919876543210">+91 98765 43210</a>
            <p>Hyderabad, India</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Justklick. All rights reserved.</p>
      </div>
    </footer>
  );
}