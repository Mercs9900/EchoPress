import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";


export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
    };
  }


  // Function to handle click event for country codes
  onClickCountryCode = (countryCode) => {
    // Log the selected country code to the console
    console.log(countryCode);
    this.props.onCountryChange(countryCode);
  };
  render() {

    let { mode } = this.state;
    const toggleMode = () => {
      if (this.state.mode === "light") {
        this.setState({ mode: "dark" });
        document.body.style.backgroundImage = "linear-gradient(45deg, #434343 0%, black 100%)";
        document.body.style.color = "white";
      } else {
        this.setState({ mode: "light" });
        document.body.style.backgroundImage = "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)";
        document.body.style.color = "black";
      }
    };

    return (
      <div>
        <nav className={`navbar navbar-expand-lg shadow p-3 mb-5 bg-${mode} navbar-${mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand fw-bold lobster " href="/">
              Echo<span className="text-danger">Press.</span>
            </a>
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
            <div className="collapse navbar-collapse montserrat-alternates fs-6" id="navbarNavAltMarkup">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <Link className="nav-link active btnAnim fw-medium" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link active btnAnim fw-medium" aria-current="page" to="/business">Business</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link active btnAnim fw-medium" aria-current="page" to="/entertainment">Entertainment</Link>
                </li>
                {/* <li className="nav-item ">
                  <a className="nav-link active btnAnim fw-medium" aria-current="page" href="/">general</a>
                </li> */}
                <li className="nav-item ">
                  <Link className="nav-link active btnAnim fw-medium" aria-current="page" to="/health">Health</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link active btnAnim fw-medium" aria-current="page" to="/science">Science</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link active btnAnim fw-medium" aria-current="page" to="/sports">Sports</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link active btnAnim fw-medium" aria-current="page" to="/technology">Technology</Link>
                </li>
              </ul>
              <div className="dropdown mx-2" >
                <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Country 🌎
                </button>
                <div className="dropdown-menu dropdownBoxGlass"  aria-labelledby="navbarDropdown">
                  <div id="dropdownBox">
                    {["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"].map((countryCode) => (
                      <button
                        key={countryCode}
                        className="dropdown-item fw-bold text-warning "
                        onClick={() => this.onClickCountryCode(countryCode)}
                      >
                        {countryCode.toUpperCase()}
                      </button>
                    ))}
                  </div>
                  
                </div>
                
              </div>
              <div className="form-check mx-3 form-switch d-flex justify-content-end align-items-center ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onClick={toggleMode}
                />
                <label
                  className={`form-check-label mx-1  fw-bold fs-3 text-uppercase text-${mode === "dark" ? "light" : "dark"}`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  {mode === "dark" ? "🪐" : "🌞"}
                </label>
              </div>
            </div>
            
          </div>
        </nav>
      </div>
    );
  }
}
Navbar.propTypes = {
  onCountryChange: PropTypes.func.isRequired,
};
