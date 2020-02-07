import React from 'react';
import "../materialize/css/materialize.css";
import Subscribe from './Suscription';

function Footer() {
    return(
        <div>
            <footer className="page-footer pink darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Suscríbete a nuestro boletín</h5>
              < Subscribe />
            
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Recursos utilizados:</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="https://reactjs.org/">ReactJs</a></li>
              <li><a className="grey-text text-lighten-3" href="https://materializecss.com/">Materialize css</a></li>
              <li><a className="grey-text text-lighten-3" href="https://code.visualstudio.com/">Visual Studio Code</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 Copyright Text
        </div>
      </div>
    </footer>
        </div>
    )
}

export default Footer;