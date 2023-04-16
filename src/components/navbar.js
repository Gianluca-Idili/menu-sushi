import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCartFill } from 'react-icons/bs';


    function Navbar(props) {
      return (
        <nav className="navbar sticky-top navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Dragon Sushi</span>
            {props.isCartOpen && (
              <button className="btn btn-primary" onClick={props.onToggleCart}>
                Carrello
              </button>
            )}
            {!props.isCartOpen && (
              <button className="text-warning btn btn-outline-dark" onClick={props.onToggleCart}>
              <div className="d-flex flex-column align-items-center">
                <BsCartFill style={{ fontSize: "2em" }} />
                <span>Carrello</span>
              </div>
            </button>
            )}
          </div>
        </nav>
      );
    }
    
    export default Navbar;
    