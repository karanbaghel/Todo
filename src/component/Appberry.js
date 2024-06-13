import React, { useEffect } from "react";
import video1 from "../images/hero.mp4";
import waves2 from "../images/waves2.svg";
import gif1 from "../images/1.gif";
import gif7 from "../images/7.gif";
import gif8 from "../images/8.gif";
import gif5 from "../images/5.gif";
import img9 from "../images/9.png";
import img10 from "../images/10.png";
import img11 from "../images/11.png";
import "../style/appberry.css";

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

const Appberry = () => {
  useEffect(() => {
    // Initialize tooltips
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);
  return (
    <>
      {/* navbar start  */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-capitalize" to="/about">
                  about
                </Link>
                {/* <a className="nav-link active text-capitalize" href="/">
                  about
                </a> */}
              </li>

              <li className="nav-item">
                <a className="nav-link active text-capitalize" href="/">
                  service
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active text-capitalize" href="/">
                  contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* navbar ends */}

      {/* heor section start */}

      <section className="bgcolorrr section-main">
        <div className="container">
          <div
            className="row  d-flex justify-content-center align-items-center"
            style={{
              height: "100vh",
            }}
          >
            <div className="col-12 col-md-6 col-lg-6  d-flex flex-column  justify-content-center aligh-item-center">
              <h1 className="text-white">We collect High Quality Leads</h1>
              <p className="text-white">
                Navbar navigation links build on our .nav options with their own
                modifier className and require the use of toggler classes for proper
                responsive styling. Navigation in navbars will also grow to
                occupy as much horizontal space as possible to keep your navbar
                contents securely aligned.
              </p>
              <div className="text-center">
                <button
                  className="btn btn-primary ms-n1"
                  data-bs-toggle="tooltip bg-"
                  data-bs-title="Hello user "
                >
                  download
                </button>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6  ">
              <video
                src={video1}
                loop
                autoPlay
                muted
                className="hero-video-section img-fluid"
              ></video>
            </div>
          </div>
        </div>
      </section>

      {/* heor section ends */}

      {/* bussiness section start */}

      {/* <section className="service-section">
        <div className="container">
          <div className="row">
            <h2 className="text-center">what we will do  for <span><br></br> your bussiness</span> </h2>
            <hr className=" w-25 mx-auto fw-bold"></hr>
          </div>

          <div className="container ">
            <div className="row">
              <div className="col-12 col-lg-4 col-md-6">
                <div className="text-center card-box shadow-sm p-3 mb-5 bg-body-tertiary rounded" style={{ width: '300px' }}>
                  <img src={gif1} alt="" className="img-fluid" width={"200px"} ></img>
                  <h5 className="my-3 fw-normal">Link building</h5>
                  <p className="mb-5">A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of</p>
                  <div className="d-flex justify-content-center align-item-center">

                    <div className="circlediv d-flex justify-content-center align-item-center">
                      <FaArrowRight className="mt-1" />
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4 col-md-6">
                <div className="text-center  shadow-sm p-3 mb-5 bg-body-tertiary rounded" style={{ width: '300px' }}>
                  <img src={gif8} alt="" className="img-fluid"  width={"200px"} ></img>
                  <h5 className="my-3 fw-normal">Contain markiting</h5>
                  <p className="mb-5">A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of</p>
                  <div className="d-flex justify-content-center align-item-center">
                    <div className="circlediv d-flex justify-content-center align-item-center">
                      <FaArrowRight className="mt-1" />
                    </div>


                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-6">
                <div className="text-center card-box shadow-sm p-3 mb-5 bg-body-tertiary rounded" style={{ width: '300px' }}>
                  <img src={gif7} alt="" className="img-fluid" width={"200px"} ></img>
                  <h5 className="my-3 fw-normal">On page Sco</h5>
                  <p className="mb-5">A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of</p>
                  <div className="d-flex justify-content-center align-item-center ">
                    <div className="circlediv d-flex justify-content-center align-item-center">
                      <FaArrowRight className="mt-1" />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section> */}

      {/* bussiness section start */}

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mt-5">
                What Will You Do For
                <br />
                your business
              </h2>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 col-md-6 mb-4">
              <div
                className="text-center shadow-lg p-3 bg-body-tertiary rounded"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                <img src={gif1} width="200px" className="img-fluid" alt="" />
                <h4 className="fw-normal">Link building</h4>
                <p>
                  While shadows on components are disabled by default in
                  Bootstrap and can be enabled via $enable-shadows, you
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-4 col-md-6 mb-4">
              <div
                className="text-center shadow-lg p-3 bg-body-tertiary rounded"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                <img src={gif8} width="200px" className="img-fluid" alt="" />
                <h4 className="fw-normal">Link building</h4>
                <p>
                  While shadows on components are disabled by default in
                  Bootstrap and can be enabled via $enable-shadows, you
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-4 col-md-6 mb-4">
              <div
                className="text-center shadow-lg p-3 bg-body-tertiary rounded"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                <img src={gif7} width="200px" className="img-fluid" alt="" />
                <h4 className="fw-normal">Link building</h4>
                <p>
                  While shadows on components are disabled by default in
                  Bootstrap and can be enabled via $enable-shadows, you
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* bussiness section end*/}

      {/* online products */}
      <section className="bgcolorrr section-main">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12  mt-5 d-flex justify-content-center align-item-center">
              <img src={gif5} className="img-fluid " width={"300px"}></img>
            </div>

            <div className="col-12 col-lg-6  col-md-12  mt-5  ">
              <h2 className="text-capitalize text-white text-md-center text-lg-start text-center common-heading">
                Step Up Build A<br></br>
                Successful Digital
                <br></br>Products
              </h2>
              <p className="mt-3 mb-5 text-white">
                Assign responsive-friendly margin or padding values to an
                element or a subset of its sides with shorthand classes.
                Includes support for individual properties, all properties, and
                vertical and horizontal properties. Classes are built from a
                default Sass map ranging from .25rem to 3rem
              </p>
              <div className=" text-md-center text-lg-start text-center">
                <button className="btn btn-primary mb-5">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* via online mode start */}
      <section>
        <div className="container">
          <div className="row">
            <div className="text-center mt-5">
              <h2>
                Generating New Customers via <br></br>
                Online mode
              </h2>
              <hr className="w-25 mx-auto " />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6  ">
              <div className="px-3 d-flex flex-column flex-md-row align-items-center  py-5 shadow rounded">
                <img
                  alt=""
                  src={gif5}
                  style={{ maxWidth: "150px", height: "auto" }}
                  className="img-fluid "
                ></img>

                <div className="row">
                  <div className="text-center text-md-start">
                    <p className=" fw-bolder  ">social media advesting</p>
                    <p>
                      A is an element that lets the user navigate to another
                      page by clicking or tapping on it. In react-router-dom, a
                      renders an accessible element with a real href that points
                      to the resource it's linking to. This means that things
                      like right-clicking a
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6  ">
              <div className="px-3 d-flex flex-column flex-md-row align-items-center  py-5 shadow rounded">
                <img
                  alt=""
                  src={gif5}
                  style={{ maxWidth: "150px", height: "auto" }}
                  className="img-fluid "
                ></img>

                <div className="row">
                  <div className="text-center text-md-start">
                    <p className=" fw-bolder  ">social media advesting</p>
                    <p>
                      A is an element that lets the user navigate to another
                      page by clicking or tapping on it. In react-router-dom, a
                      renders an accessible element with a real href that points
                      to the resource it's linking to. This means that things
                      like right-clicking a
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6  ">
              <div className="px-3 d-flex flex-column flex-md-row align-items-center  py-5 shadow rounded">
                <img
                  alt=""
                  src={gif5}
                  style={{ maxWidth: "150px", height: "auto" }}
                  className="img-fluid "
                ></img>

                <div className="row">
                  <p className=" fw-bolder  ">social media advesting</p>
                  <p>
                    A is an element that lets the user navigate to another page
                    by clicking or tapping on it. In react-router-dom, a renders
                    an accessible element with a real href that points to the
                    resource it's linking to. This means that things like
                    right-clicking a
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6  ">
              <div className="px-3 d-flex flex-column flex-md-row align-items-center  py-5 shadow rounded">
                <img
                  alt=""
                  src={gif5}
                  style={{ maxWidth: "150px", height: "auto" }}
                  className="img-fluid "
                ></img>
                {/* <img src={gif5} style={{ maxWidth: '150px', height: 'auto' }}  className="img-fluid " className="rounded float-start" alt="..."></img> */}

                <div className="row">
                  <div className="text-center text-md-start">
                    <p className=" fw-bolder  ">social media advesting</p>
                    <p>
                      A is an element that lets the user navigate to another
                      page by clicking or tapping on it. In react-router-dom, a
                      renders an accessible element with a real href that points
                      to the resource it's linking to. This means that things
                      like right-clicking a
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* via online mode ends */}

      {/* image sevtion */}



      {<section className="bgcolorrr section-main">

      <div className="container">
          <div className="row">
            <div className="text-center mt-5">
              <h2>
                Generating New Customers via <br></br>
                Online mode
              </h2>
              <hr className="w-25 mx-auto " />
            </div>
          </div>
        </div>

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container mb-5">
                <div class="row justify-content-center">

                  <div class="col-lg-3 col-md-6 col-sm-4">
                    <div class="card mb-4">
                      <img src={img10} class="card-img-top img-fluid" alt="Card image cap" />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-6 col-sm-4">
                    <div class="card mb-4">
                      <img src={img11} class="card-img-top  img-fluid" alt="Card image cap" />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-6 col-sm-4">
                    <div class="card mb-4">
                      <img src={img11} class="card-img-top  img-fluid" alt="Card image cap" />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* <!-- Add more carousel items as needed --> */}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>

</div>

      </section>}



      {/* last section */}

      <section>
      <div className="container">
          <div className="row">
            <div className="text-center mt-5">
              <h2>
                Generating New Customers via <br></br>
                Online mode
              </h2>
              <hr className="w-25 mx-auto " />
            </div>
          </div>
        </div>  

        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card mb-4">
                <img src={img11} class="card-img-top img-fluid" alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card mb-4">
                <img src={img11} class="card-img-top img-fluid" alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card mb-4">
                <img src={img11} class="card-img-top img-fluid" alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card mb-4">
                <img src={img11} class="card-img-top img-fluid" alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* last section end */}

    </>
  );
};

export default Appberry;
