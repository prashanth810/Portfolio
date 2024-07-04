import React, { useEffect, useRef } from "react";
import "./Portpolio.css";
import myimage from "../images/myimage2.jpg";
import aboutimage from "../images/myimage.JPG";

// web design

import Parcelyogi from "../images/Parcelyogi.png";
import Educa from "../images/Educa.png";
import Oldhouse from "../images/Old house.png";

// Javscript with design

import Registrationform from "../images/Registration.png";
import Todolist from "../images/Todo-List.png";
import Wallclock from "../images/Wallclock.png";
import formvalidation from "../images/form validations.png";

//recat developing

import makingcircles from "../images/Making circles on browser.png";

import Typed from "typed.js";
import "animate.css";
import Icons from "./Icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStore } from "@fortawesome/free-brands-svg-icons";
import { faCode, faCrop } from "@fortawesome/free-solid-svg-icons";
import Contactform from "./Contactform";

const Portpolio = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Web Designer", "Web Developer ", "Coder"],
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-white portfolio">
      <nav className="navbar navbar-expand-lg p-4 nav-barlogo">
        <div className="container w-75">
          <a
            className="animate__animated animate__bounceInLeft animate__slower navbar-brand text-white"
            href="#"
          >
            <img
              src="https://cdn-icons-png.freepik.com/512/1351/1351514.png"
              width="80px"
            />
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="animate__animated animate__lightSpeedInRight animate__slower navbar-nav ms-auto">
              <a
                className="nav-link active text-white mx-4"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
              <a className="nav-link text-white mx-4" href="#about">
                About
              </a>

              <a className="nav-link text-white mx-4" href="#services">
                Services
              </a>
              <a className="nav-link text-white mx-2" href="#Portfolio">
                Protfolio
              </a>
              <a className="nav-link text-white " href="#contactform">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="main  p-5">
        <div className="container">
          <div className="row" id="home">
            <div className="para1 col-md-6 col-sm-12 col-lg-6">
              <div className="animate__animated  animate__fadeInLeft animate__slower">
                <h3 className="role_header main_name">Hello, It's Me</h3>
                <h1 className="animate__animated animate__backInLeft main_name">
                  Prashanth
                </h1>
              </div>
              <h3 className="role">
                And I'm a <span className="text" ref={typedElement}></span>
              </h3>

              <p className="animate__animated animate__bounceInRight animate__slower role_description">
                I'm a Web Designer with extensive experience for 6 months
                <br />
                expertise is to create web site desing, frontend design, Web
                Developing also and More...
              </p>

              <div className="col-md-6">
                <Icons />
              </div>
            </div>
            <div className="animate__animated animate__bounceInRight animate__slower col-md-6 col-sm-12 col-lg-6 myimages">
              <img src={myimage} width="100%" className="myportfolio-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="main2">
        <div className="container">
          <div className="row about_me" id="about">
            <div className="col-md-6 col-sm-12 col-lg-6 text-start">
              <img src={myimage} width="100%" className="aboutimage" />
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 aboutme_paras">
              <div className="aboutme">
                <h2 className="text-start about-me">
                  About <span className="me_about"> Me </span>
                </h2>
              </div>
              <div className="aboutme_heading text-start">
                <h4 className="ima_developer">I'm Web Developer (React js)</h4>
              </div>
              <div className="aboutme_para">
                <p className="aboutme_para_description">
                  I'm a Front-end Designer, Front-end Developer from Hyderabad
                  in Front-end developement. I enjoyed to maing the web designs
                  and web developement using front-end and solving the simple
                  and complex problems in front-end. I maked simple and
                  intuitive designs Using front-end.
                </p>
              </div>
              <div className="icons_portfolio text-start">
                <Icons />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main3">
        <div className="container">
          <div className="my_services" id="services">
            <h1 className="my_service"> My Services </h1>
          </div>
          <div className="row cards_row">
            <div className="card">
              <div className="web_designer-icon">
                <FontAwesomeIcon icon={faCrop} style={{ color: "#63E6BE" }} />
              </div>
              <div className="card-body">
                <h5 className="card-titl fs-3"> Web </h5>
                <h5 className="card-title fs-2"> Designer </h5>
                <p className="card-text">Some quick example text...</p>
                <div>
                  <button className="aboutmebtn"> More About Me </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="web_designer-icon">
                <FontAwesomeIcon icon={faCode} style={{ color: "#63E6BE" }} />
              </div>
              <div className="card-body">
                <h5 className="card-title fs-3"> Web </h5>
                <h5 className="card-title fs-2"> Developer </h5>
                <p className="card-text">Some quick example text...</p>
                <div>
                  <button className="aboutmebtn"> More About Me </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="web_designer-icon">
                <FontAwesomeIcon
                  icon={faAppStore}
                  style={{ color: "#63E6BE" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fs-3"> React-native </h5>
                <h5 className="card-title fs-2"> Developer </h5>
                <p className="card-text">Some quick example text...</p>
                <div>
                  <button className="aboutmebtn"> More About Me </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Portfolio">
        <div className="main4">
          <div className="container">
            <div className="row">
              <div className="protfolio_mainhead">
                <h2 className="protfolio_subhead"> Portfolio </h2>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card_image" style={{ padding: "20px" }}>
                    <img src={Parcelyogi} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>
                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading"> Website Designer </h2>
                    <p> Using Html, Css , Bootstrap </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card_image" style={{ padding: "20px" }}>
                    <img src={Educa} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>

                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading"> Website Designer </h2>
                    <p> Using Html, Css , Bootstrap </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card_image" style={{ padding: "20px" }}>
                    <img src={Oldhouse} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>
                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading"> Website Designer </h2>
                    <p> Using Html, Css , Bootstrap </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main4">
          <div className="container">
            <div className="row">
              <div className="protfolio_mainhead" id="Portfolio">
                <h2 className="protfolio_subhead"> Using Javscript </h2>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card_image" style={{ padding: "20px" }}>
                    <img src={formvalidation} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>
                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading"> Form_validations</h2>
                    <p> Using Html, Css , Javascript, Bootstrap </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card_image" style={{ padding: "20px" }}>
                    <img src={Registrationform} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>

                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading">
                      Job Application_form
                    </h2>
                    <p> Using Html, Css , Javscript, Bootstrap </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card_image" style={{ padding: "20px" }}>
                    <img src={Todolist} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>
                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading"> Todo_Lists </h2>
                    <p> Using Html, Css , Javascript, Bootstrap </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card_image" style={{ padding: "30px" }}>
                    <img src={Wallclock} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>
                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading"> Wall_Clock </h2>
                    <p> Using Html, Css , Bootstrap, Javascript </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card_image" style={{ padding: "30px" }}>
                    <img src={makingcircles} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>
                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading"> Making_Circle </h2>
                    <p> Using React_js </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_forms">
        <Contactform />
      </div>
    </div>
  );
};

export default Portpolio;
