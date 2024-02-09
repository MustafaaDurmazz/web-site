import React from 'react'
import { NavLink, Link } from "react-router-dom";

function navbar({ user, handleLogOut }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container">
        <img height="50" src="/aydede.png" alt="Logo" />
        <Link className="navbar-brand" to="/">
          O&O
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className="nav-link" to="/">
              Ana Sayfa
            </NavLink>
            <NavLink className="nav-link" to="/products">
              Ürünler
            </NavLink>
            <NavLink className="nav-link" to="/about">
              Hakkımızda
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              İletişim
            </NavLink>
            {user ? (
              <>
                <NavLink className="nav-link" to="/fav">Favoriler</NavLink>
                <button className="nav-link" onClick={handleLogOut}>
                  Logout ({user.name})
                </button>

                <NavLink className="nav-link" to="/Sepet">Sepetim</NavLink>
                <button className="nav-link" onClick={handleLogOut}>

                </button>
              </>
            ) : (
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>

            )}
            </ul>
      <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default navbar