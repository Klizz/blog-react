import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper pink darken-3">
        <a href="/" class="brand-logo">Blog</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Servicios</a>
          </li>
          <li>
            <a href="badges.html">Acerca de</a>
          </li>
          <li>
            <a href="collapsible.html">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;