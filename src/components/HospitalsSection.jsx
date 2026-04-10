import hospital1Img from "../assets/hospital2.jpg";

import { MapPin, Plus, Stethoscope, Check } from "lucide-react";

export default function HospitalsSection() {
  const leftCards = [
    {
      title: "Search by Location",
      text: "Find hospitals in your city or nearby areas quickly and easily.",
      icon: MapPin,
    },
    {
      title: "General Healthcare",
      text: "Access hospitals for check-ups, diagnostics, and everyday treatments.",
      icon: Plus,
    },
  ];

  const rightCards = [
    {
      title: "Specialized Care",
      text: "Explore hospitals for heart care, skin treatments, and mental wellness.",
      icon: Stethoscope,
    },
    {
      title: "Compare Hospitals",
      text: "View services, specialties, and choose the right hospital for your needs.",
      icon: Check,
    },
  ];

  return (
    <section className="hospitals-section" id="hospitals">
      <div className="container hospitals-wrapper">
        <div className="hospitals-heading">
          <h2>Find Trusted Hospitals by Location and Care Needs</h2>
          <p>
            Search hospitals by city, specialty, and essential healthcare
            services. Easily explore reliable options for consultations,
            treatments, diagnostics, and emergency support.
          </p>
        </div>

        <div className="hospitals-grid">
          <div className="hospitals-column">
            {leftCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className={`hospital-card ${
                    index === 0 ? "hospital-card-highlight" : ""
                  }`}
                >
                  <div className="hospital-card-icon">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              );
            })}
          </div>

          <div className="hospital-image-box">
            <img src={hospital1Img} alt="Trusted hospital services" />
            <div className="hospital-image-overlay">
              <span>Healthcare Access Made Simple</span>
              <h3>Trusted Hospitals, Easy Search</h3>
              <p>
                Find hospitals by city, compare care options, and choose the
                right.
              </p>
            </div>
          </div>

          <div className="hospitals-column">
            {rightCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className={`hospital-card ${
                    index === 1 ? "hospital-card-soft" : ""
                  }`}
                >
                  <div className="hospital-card-icon">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}