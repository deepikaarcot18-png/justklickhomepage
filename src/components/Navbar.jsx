// import logo from "../assets/logo.png";

// export default function Navbar() {
//   return (
//     <header className="navbar">
//       <div className="container navbar-container">
//         <div className="logo-box">
//           <img src={logo} alt="Justklick Logo" className="logo-img" />
//         </div>

//         <nav className="nav-links">
//           <a href="#overseas">Overseas</a>
//           <a href="#hostels">Hostels</a>
//           <a href="#hospitals">Hospitals</a>
//           <a href="#real-estates">Real Estates</a>
//           <a href="#training-institutes">Training Institutes</a>
//         </nav>

//         <div className="nav-actions">
//           <button type="button" className="btn btn-light">
//             Login
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="logo-box">
          <img src={logo} alt="Justklick Logo" className="logo-img" />
        </div>

        <nav className="nav-links">
          <a href="#overseas">Overseas</a>
          <a href="#hostels">Hostels</a>
          <a href="#hospitals">Hospitals</a>
          <a href="#real-estates">Real Estates</a>
          <a href="#training-institutes">Training Institutes</a>
        </nav>

        <div className="nav-actions">
  <Link to="/register" className="btn btn-light">
    Register
  </Link>
</div>
      </div>
    </header>
  );
}