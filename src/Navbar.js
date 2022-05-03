import React from "react";

const Navbar = ({ darkMode, switchMode }) => {
  return (
    <nav className={`navbar ${darkMode ? "darkMode" : ""}`}>
      <h4>Where in the world?</h4>
      <div className="dark-mode-container" onClick={switchMode}>
        ☾ Dark Mode
      </div>
    </nav>
  );
};

export default Navbar;
