import { NavLink } from "react-router-dom";
import "./index.css";
function Navbar() {
  let navLinks = [
    "Home",
    "About",
    "Projects",
    "Certifications",
    "Blog",
    "Contact",
  ];
  let navPath = [
    "/",
    "/about",
    "/project",
    "/certificates",
    "/blog",
    "/contact",
  ];

  const navData = navLinks.map((links, id) => (
    <NavLink
      className={({ isActive }) => {
        return `nav-link mx-lg-2 mx-md-1 py-2 ${isActive ? "text-info" : ""}`;
      }}
      aria-current="page"
      to={`${navPath[id]}`}
      key={id}
      onClick={() => {
        const offcanvasEl = document.getElementById("offcanvasNavbar");

        const instance =
          window.bootstrap?.Offcanvas.getOrCreateInstance(offcanvasEl);

        instance.hide();
      }}>
      {links}
    </NavLink>
  ));

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary py-3 sticky-top">
      <div className="container">
        
        <div
          className="offcanvas offcanvas-end d-md-none"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ backgroundColor: "#0B1A2A" }}>
          <div className="offcanvas-header">
            <NavLink className="navbar-brand" to="/">
              <img
                src="https://res.cloudinary.com/dgpnfehem/image/upload/v1777800503/portfolio-logo_mvivtf.png"
                alt=""
                style={{ height: "40px", width: "auto" }}
              />
            </NavLink>
            <i
              className="fa-solid fa-xmark ms-auto fs-3"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></i>
          </div>
          <div className="offcanvas-body">{navData}</div>
        </div>



        <NavLink className="navbar-brand" to="/">
          <img
            src="https://res.cloudinary.com/dgpnfehem/image/upload/v1777800503/portfolio-logo_mvivtf.png"
            alt=""
            style={{ height: "40px", width: "auto" }}
          />
        </NavLink>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-none d-md-flex justify-content-end">
          <div className="navbar-nav">{navData}</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
