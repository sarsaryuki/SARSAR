import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import About from './pages/About';
import Academic from './pages/Academic';
import Admission from './pages/Admission';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/academic" className="nav-link" activeClassName="active">
                Academic Programs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admission" className="nav-link" activeClassName="active">
                Admission
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container my-5 py-4 px-4 border rounded bg-light shadow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-success text-white text-center py-3 mt-5">
        © 2025 Davao Central College. All rights reserved.
      </footer>
    </Router>
  );
};

export default App;
