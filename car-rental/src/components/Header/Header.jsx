import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];
const Header = () => {
  const menuRef = useRef(null);
  const menuToggle = () => menuRef.current.classList.toggle("menu-active");
  return (
    <header className="header">
      {/* .............header top......... */}
      <div className="header-top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header-top-left">
                <span>Need Help?</span>
                <span className="header-top-help">
                  <i class="ri-phone-fill"></i> +1-202-555-0149
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header-top-right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i>Login
                </Link>
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i>Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* //////header-middle///// */}
      <div className="header-middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-3">
                    <i class="ri-car-line"></i>
                    <span>
                      Rent Car <br />
                      Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header-location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header-location-content">
                  <h4>Bangladesh</h4>
                  <h6>Sylhet City, Bangladesh</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header-location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header-location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="d-flex align-items-center justify-content-end"
            >
              <button className="header-btn btn">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a Call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ////Main Navigation/// */}
      <div className="main-navbar">
        <Container>
          <div className="navigation-wrapper d-flex align-items-center justify-content-between">
            <span className="mobile-menu">
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "nav-item nav-active" : "nav-item"
                    }
                    to={item.path}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav-right">
              <div className="search-box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
