import { Link } from "react-router-dom"
import "./navigation.css"

const Navigation = () => {
    return (
        <>
      <nav className="navbar navbar-expand-lg navbar-dark background-navigation fixed-top py-4 z-9999">
        <div className="container-fluid">
          <Link className="navbar-brand brand-font" to={"/"}>
            <span className="game-text h2">Game</span><span className="bro-text me-1 h3">Bro</span> <i className="bi bi-joystick icon-color h3"></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse position-relative" id="navbarNavAltMarkup">
            <div className="navbar-nav position-lg-absolute right-center">
              <Link className="nav-link link-hover" to={"/about-us"}>
                About Us
              </Link>
              <Link className="nav-link link-hover mx-2" to={"/products"}>
                Products
              </Link>
              <Link className="nav-link link-hover" to={"/contacts"}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
    )
}
export default Navigation