import React from 'react';
import '../styles/NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bgNav">
        <div className="container-fluid">
        <Link to='/' className="navbar-brand colorL" > Panda's </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" ulPosicion collapse navbar-collapse" id="navbarNav">
            <ul className="ul navbar-nav">
              <li className=" nav-item">
                <a className="nav-link colorL active" aria-current="page" href="#">Seccion 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link colorL active" href="#">Detalles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link colorL active" href="#">Seccion 3</a>
              </li>
            </ul>
          </div>
          <CartWidget/>
        </div>
      </nav>
    </>
  )
}

export default NavBar