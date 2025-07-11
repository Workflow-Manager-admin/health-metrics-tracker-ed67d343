import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./features/Dashboard";
import Trends from "./features/Trends";
import MetricEntry from "./features/MetricEntry";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Enter Metrics", path: "/entry" },
  { name: "Trends/History", path: "/trends" },
];

export default function App() {
  return (
    <Router>
      <div className="layout-root">
        <header className="layout-header">
          <span className="app-brand">Health Almanac</span>
          <nav className="desktop-nav">
            {navItems.map(nav => (
              <NavLink
                to={nav.path}
                key={nav.name}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                end={nav.path === "/"}
              >
                {nav.name}
              </NavLink>
            ))}
          </nav>
        </header>
        <div className="layout-main">
          <aside className="layout-sidebar">
            <div>
              <span className="sidebar-title">Menu</span>
              {navItems.map(nav => (
                <NavLink
                  to={nav.path}
                  key={nav.name}
                  className={({ isActive }) =>
                    isActive ? "sidebar-link active" : "sidebar-link"
                  }
                  end={nav.path === "/"}
                >
                  {nav.name}
                </NavLink>
              ))}
            </div>
            <div className="sidebar-footer">
              <span>User: John Doe</span>
            </div>
          </aside>
          <main className="layout-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/entry" element={<MetricEntry />} />
              <Route path="/trends" element={<Trends />} />
            </Routes>
          </main>
        </div>
        <footer className="layout-footer">
          <span>
            Health Almanac &copy; {new Date().getFullYear()} &mdash; Live well, track smarter.
          </span>
        </footer>
      </div>
    </Router>
  );
}
