import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">

      <div className="container">

        <Link className="navbar-brand text-primary fw-bolder" to="/">
          M.B. Engineers
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link text-primary" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-primary"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                About
              </a>

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/about/team">Our Team</Link></li>
                <li><Link className="dropdown-item" to="/about/customers">Our Customers</Link></li>
                <li><Link className="dropdown-item" to="/about/projects">Projects</Link></li>
                <li><Link className="dropdown-item" to="/about/testimonials">Testimonials</Link></li>
                <li><Link className="dropdown-item" to="/about/faq">FAQ</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-primary" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-primary" to="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}