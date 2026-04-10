// import { useEffect, useRef, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import overseasImg from "../assets/overseas.jpg";
// import hostelImg from "../assets/hostel.jpg";
// import hospitalImg from "../assets/hotels.jpg";
// import realestateImg from "../assets/realestate.jpg";
// import traininginstituteImg from "../assets/traininginstitute.jpg";

// const slides = [
//   {
//     id: 1,
//     title: "Overseas",
//     shortText:
//       "Find trusted overseas education, visa and migration consultants.",
//     image: overseasImg,
//   },
//   {
//     id: 2,
//     title: "Hostels",
//     shortText:
//       "Discover secure, comfortable and affordable hostels in top cities.",
//     image: hostelImg,
//   },
//   {
//     id: 3,
//     title: "Hospitals",
//     shortText:
//       "Explore trusted hospitals, clinics and healthcare services near you.",
//     image: hospitalImg,
//   },
//   {
//     id: 4,
//     title: "Real Estates",
//     shortText:
//       "Browse verified properties, rentals, agents and real estate services.",
//     image: realestateImg,
//   },
//   {
//     id: 5,
//     title: "Training Institutes",
//     shortText:
//       "Find top institutes for coaching, skill development and career training.",
//     image: traininginstituteImg,
//   },
// ];

// const AUTO_MS = 5000;

// export default function HeroSection() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [textVisible, setTextVisible] = useState(true);
//   const timerRef = useRef(null);

//   const restartAuto = () => {
//     if (timerRef.current) clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % slides.length);
//       setTextVisible(false);
//       setTimeout(() => setTextVisible(true), 120);
//     }, AUTO_MS);
//   };

//   const changeSlide = (nextIndex) => {
//     setTextVisible(false);
//     setTimeout(() => {
//       setActiveIndex(nextIndex);
//       setTextVisible(true);
//     }, 150);
//     restartAuto();
//   };

//   const nextSlide = () => {
//     changeSlide((activeIndex + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     changeSlide(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
//   };

//   const goToSlide = (index) => {
//     if (index === activeIndex) return;
//     changeSlide(index);
//   };

//   useEffect(() => {
//     restartAuto();
//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current);
//     };
//   }, []);

//   return (
//     <section className="hero-section" id="hero">
//       <div className="hero-slider">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`hero-slide ${index === activeIndex ? "active" : ""}`}
//             style={{ backgroundImage: `url(${slide.image})` }}
//             aria-hidden={index !== activeIndex}
//           >
//             <div className="hero-overlay" />
//           </div>
//         ))}

//         <div className="container hero-content">
//           <div
//             key={activeIndex}
//             className={`hero-text ${textVisible ? "hero-text-enter" : "hero-text-exit"}`}
//           >
            

//             <h1>{slides[activeIndex].title}</h1>
//             <p>{slides[activeIndex].shortText}</p>
//           </div>
//         </div>

//         <button
//           type="button"
//           className="hero-arrow left"
//           onClick={prevSlide}
//           aria-label="Previous slide"
//         >
//           <ChevronLeft size={20} />
//         </button>

//         <button
//           type="button"
//           className="hero-arrow right"
//           onClick={nextSlide}
//           aria-label="Next slide"
//         >
//           <ChevronRight size={20} />
//         </button>

//         <div className="hero-controls">
//           <div className="hero-dots" role="tablist" aria-label="Hero slides">
//             {slides.map((slide, index) => (
//               <button
//                 key={slide.id}
//                 type="button"
//                 role="tab"
//                 aria-selected={index === activeIndex}
//                 aria-label={`Go to ${slide.title}`}
//                 className={`hero-dot ${index === activeIndex ? "active" : ""}`}
//                 onClick={() => goToSlide(index)}
//               >
//                 <span className="hero-dot-core" />
//               </button>
//             ))}
//           </div>

//           <div className="hero-progress-track" aria-hidden="true">
//             <div
//               key={activeIndex}
//               className="hero-progress-fill"
//               style={{ animationDuration: `${AUTO_MS}ms` }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  BedDouble,
  Cross,
  House,
  GraduationCap,
} from "lucide-react";
import overseasImg from "../assets/overseas.jpg";
import hostelImg from "../assets/hostel.jpg";
import hospitalImg from "../assets/hotels.jpg";
import realestateImg from "../assets/realestate.jpg";
import traininginstituteImg from "../assets/traininginstitute.jpg";

const slides = [
  {
    id: 1,
    title: "Overseas",
    shortText:
      "Find trusted overseas education, visa and migration consultants.",
    image: overseasImg,
  },
  {
    id: 2,
    title: "Hostels",
    shortText:
      "Discover secure, comfortable and affordable hostels in top cities.",
    image: hostelImg,
  },
  {
    id: 3,
    title: "Hospitals",
    shortText:
      "Explore trusted hospitals, clinics and healthcare services near you.",
    image: hospitalImg,
  },
  {
    id: 4,
    title: "Real Estates",
    shortText:
      "Browse verified properties, rentals, agents and real estate services.",
    image: realestateImg,
  },
  {
    id: 5,
    title: "Training Institutes",
    shortText:
      "Find top institutes for coaching, skill development and career training.",
    image: traininginstituteImg,
  },
];

const mobileNavItems = [
  { label: "Overseas", href: "#overseas", icon: Globe },
  { label: "Hostels", href: "#hostels", icon: BedDouble },
  { label: "Hospitals", href: "#hospitals", icon: Cross },
  { label: "Real Estates", href: "#real-estates", icon: House },
  {
    label: "Training Institutes",
    href: "#training-institutes",
    icon: GraduationCap,
  },
];

const AUTO_MS = 5000;

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const timerRef = useRef(null);

  const restartAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
      setTextVisible(false);
      setTimeout(() => setTextVisible(true), 120);
    }, AUTO_MS);
  };

  const changeSlide = (nextIndex) => {
    setTextVisible(false);
    setTimeout(() => {
      setActiveIndex(nextIndex);
      setTextVisible(true);
    }, 150);
    restartAuto();
  };

  const nextSlide = () => {
    changeSlide((activeIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    changeSlide(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
  };

  const goToSlide = (index) => {
    if (index === activeIndex) return;
    changeSlide(index);
  };

  useEffect(() => {
    restartAuto();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === activeIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== activeIndex}
          >
            <div className="hero-overlay" />
          </div>
        ))}

        <div className="container hero-content">
          <div
            key={activeIndex}
            className={`hero-text ${
              textVisible ? "hero-text-enter" : "hero-text-exit"
            }`}
          >
            <h1>{slides[activeIndex].title}</h1>
            <p>{slides[activeIndex].shortText}</p>
          </div>
        </div>

        <button
          type="button"
          className="hero-arrow left"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          className="hero-arrow right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        <div className="hero-controls">
          <div className="hero-dots" role="tablist" aria-label="Hero slides">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to ${slide.title}`}
                className={`hero-dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              >
                <span className="hero-dot-core" />
              </button>
            ))}
          </div>

          <div className="hero-progress-track" aria-hidden="true">
            <div
              key={activeIndex}
              className="hero-progress-fill"
              style={{ animationDuration: `${AUTO_MS}ms` }}
            />
          </div>
        </div>
      </div>

      <div className="mobile-nav-links">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;

          return (
            <a key={item.label} href={item.href} className="mobile-nav-link">
              <div className="mobile-nav-icon">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}