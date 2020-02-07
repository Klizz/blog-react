import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper pink darken-3">
        <a href="/" class="brand-logo">Blog</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Services</a>
          </li>
          <li>
            <a href="badges.html">About us</a>
          </li>
          <li>
            <a href="collapsible.html">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;