import React, { useState } from 'react';

import './App.css';

import logo from './assets/Vinyl Experts-logos.jpeg';
import logoTrans from './assets/Vinyl Experts-logos_black.png'
import homebg from './assets/ferrari-bg.jpg';
import aboutUsimg from './assets/porsche-bg.jpg'
import ppf from './assets/ppf.jpg'
import windowtint from './assets/windowtint.jpg'
import wrap from './assets/vinylwrap.jpg'
import colors from './assets/wrapcolors.jpg'

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Carousel from 'react-bootstrap/Carousel';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function App() {

  const [index, setIndex] = useState(0);

  const [show, setShow] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");

  const handleClickModal = event => {
    modal.style.display = "block";
    modalImg.src = colors;
  }

  const handleClickSpan = event => {
    modal.style.display = "none";
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }
    else{
      if(validated === true){
        setShow(false)
        alert("The Form has been Submitted.");
      }
    }
  };

  const popover_ppf = (
    <Popover id="popover-basic">
      <Popover.Body>
        A clear self healing film that is applied to a vehicle to protect if from rocks, paint chips and salt.
      </Popover.Body>
    </Popover>
  );

  const popover_tint = (
    <Popover id="popover-basic">
      <Popover.Body>
        The application of a dark film to the inside of your vehicle's windows. Non-Metal, Non-Fading, Color Stable.
      </Popover.Body>
    </Popover>
  );

  const popover_wrap = (
    <Popover id="popover-basic">
      <Popover.Body>
        Our talented team will create a design like nothing else, we will listen to your ideas to create the best wrap possible.
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="App" id="home">
      <header className="bg-light">

      {/* Navbar */}
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
              <a href="#home" className="navbar-brand">
                <img src={logo} className="img-fluid" width={200} id="logo"></img>
              </a>
              
              {/* Mobile nav */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              {/* navbar links */}
              <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <a href="#aboutus" className="nav-link text-light">About Us</a>
                      </li>
                      <li className="nav-item">
                          <a href="#services" className="nav-link text-light">Services</a>
                      </li>
                      <li className="nav-item">
                          <a href="#bundles" className="nav-link text-light">Bundles</a>
                      </li>
                      <li className="nav-item ms-2 d-none d-md-inline">
                          <a href="#quote" className="btn btn-danger text-light" onClick={() => setShow(true)}>Free Quote</a>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>

        {/* Main part / Intro */}
        <section id="intro">
          <div className="container-fluid" style={{ backgroundImage: `url(${homebg})`, height: '92vh', width: 'auto'}}>
              <div className="row justify-content-center">
                  <div className="text-center">
                    <img src={logoTrans} className="img-fluid" width={700} id="logo"></img>
                  </div>
              </div>
          </div>
        </section>

        {/* About us */}
        <section id="aboutus">
          <div className="row my-5 g-5 justify-content-center align-items-center container-fluid">
              <div className="col-8 col-lg-4">
                <img src={aboutUsimg} className="img-fluid" width={600} id="logo"></img>
              </div>
              <div className="col-6 col-lg-4 bg-dark px-4 py-2 text-white rounded">
                  <h2 className="display-3 mt-3"><strong>Our Mission...</strong></h2>
                  <p className="lead">We're leaders in Ottawa car wraps. Your vinyl wrap deserves the 
                      attention to detail and highest quality installation. 
                      We can work together to deliver a flawless product to the end customer. 
                      There are many reasons to wrap a vehicle. Looking for a fresh custom paint job 
                      but don't want to destroy the resale value on your vehicle? Check out our 
                      high gloss wrap films available in an assortment of colors and effects!
                  </p>
              </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className='bg-dark'>
          <div className="container-fluid">

            <div className="text-center text-white">
                <h2 className="display-3 mt-5"><strong>Services We Provide</strong></h2>
                <p className="lead">At Vinyl Experts we do it all from Commercial Vehicles to Personal Cars.</p>
            </div>

            <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-css">
              <Carousel.Item>
                <img className="" src={wrap} alt="vinyl wrap"/>
                <Carousel.Caption>
                  <OverlayTrigger trigger="hover" placement="top" overlay={popover_wrap}>
                    <h3><a className="text-white" href="https://www.youtube.com/watch?v=qfz4DDYSeJk" target="_blank">Vinyl Vehicle Wrapping</a></h3>
                  </OverlayTrigger>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="" src={ppf} alt="protective film"/>
                <Carousel.Caption>
                  <OverlayTrigger trigger="hover" placement="top" overlay={popover_ppf}>
                    <h3><a className="text-white" href="https://www.youtube.com/watch?v=ueU2Je40O-k" target="_blank">Protective Film</a></h3>
                  </OverlayTrigger>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="" src={windowtint} alt="window tint"/>
                <Carousel.Caption>
                  <OverlayTrigger trigger="hover" placement="top" overlay={popover_tint}>
                    <h3><a className="text-white" href="https://www.youtube.com/watch?v=bCKiX-vZif4" target="_blank">Window Tinting</a></h3>
                  </OverlayTrigger>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            <div className="row my-5 g-5 justify-content-center align-items-center container-fluid">
              <div className="col-6 col-lg-4">
                <h2 className="display-4 mt-3 text-white">Pick a color or style from our 3M catalogue.</h2>
                <p className='lead text-secondary'>We are the leaders in Ottawa car wrap</p>
              </div>
              <div className="col-6 col-lg-4">
                <img src={colors} className="img-fluid" id="colors" onClick={handleClickModal}></img>
                <div id="myModal" className="image-modal">
                  <span className="close" onClick={handleClickSpan}>&times;</span>
                  <img className="image-modal-content" id="img01"></img>
                </div>
              </div>
            </div>

            <div className='mb-5 text-dark'>.</div>
          </div>
        </section>

        {/* Bundles */}
        <section id="bundles">
          <div className="container-fluid">

            <div className="text-center">
              <h2 className="display-3 mt-5"><strong>Bundles Offered</strong></h2>
            </div>

            <div className="row card-decks my-4 justify-content-center">
              <div className="col-8 col-lg-4 col-xl-3">
                <div className="card">
                  <div className="card-body text-center py-4">
                    <h4 className="card-title display-5">Change Her Up</h4>
                    <p className="lead card-subtitle">Services Included...</p>
                    <p className="display-6 my-4 text-danger fw-bold">Vinyl Wrap, <br></br> Window Tints</p>
                    <a href="#quote" className="btn btn-outline-danger" onClick={() => setShow(true)}>Free Quote</a>
                  </div>
                </div>
              </div>

              <div className="col-8 col-lg-4 col-xl-3">
                <div className="card">
                  <div className="card-body text-center py-4">
                    <h4 className="card-title display-5">Full Tint</h4>
                    <p className="lead card-subtitle">Services Included...</p>
                    <p className="display-6 my-4 text-danger fw-bold">Window Tints, <br></br> Headlight Tints</p>
                    <a href="#quote" className="btn btn-outline-danger" onClick={() => setShow(true)}>Free Quote</a>
                  </div>
                </div>
              </div>

              <div className="col-8 col-lg-4 col-xl-3">
                <div className="card">
                  <div className="card-body text-center py-4">
                    <h4 className="card-title display-5">Protect Her</h4>
                      <p className="lead card-subtitle">Services Included...</p>
                      <p className="display-6 my-4 text-danger fw-bold">Protective Film, <br></br> Window Tints</p>
                      <a href="#quote" className="btn btn-outline-danger" onClick={() => setShow(true)}>Free Quote</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>

        {/* footer */}
        <section id="" className='bg-black text-white-50'>
          <div className="row mt-5 g-3 justify-content-center align-items-center container-fluid">
              <div className="col-6 col-lg-4">
                <h5>Contact Us</h5>
                <h6 className='text-decoration-underline'>1337 Woodroof Ave, Ottawa, ON K1L 3Z4 <br></br> 613-414-2301 <br></br> vinylexperts@gmail.com</h6>
              </div>
              <div className="col-6 col-lg-4">
                <h5>No Project Is Too Small Or Too Big...</h5>
                <h6>We can cater to all types of projects. 
                  If you're looking for something simple or super complicated,
                  our staff has you covered.  Pickup the phone and call us today!</h6>
              </div>
          </div>
        </section>

        {/* Free Quote Modal */}
        <Modal size="xl" centered show={show} onHide={() => setShow(false)} aria-labelledby="example-custom-modal-styling-title">
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Inscrivez-vous pour une Citation <strong>GRATUITE</strong>.
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row justify-content-center my-5">
              <div className="col-lg-9">
                <Form className="row" noValidate validated={validated} onSubmit={handleSubmit}>
                  <div className="col-lg-4">
                    <label for="fname" className="form-label">Nom et Prénom:</label>
                    <div className="input-group" controlId="validationCustom01">
                      <input type="text" className="form-control" id="fname" placeholder="ex. Jean Dupont" required></input>
                      <span className="input-group-text">
                        <i className="bi bi-person-lines-fill"></i>
                      </span>
                      <Form.Control.Feedback type="invalid">
                        Veuillez enter votre Nom et Prénom
                      </Form.Control.Feedback>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <label for="email" className="form-label">Couriel:</label>
                    <div className="input-group">
                      <input type="email" className="form-control" id="email" placeholder="ex. JeanDupont@example.com" required></input>
                      <span className="input-group-text">
                        <i className="bi bi-envelope-fill"></i>
                      </span>
                      <Form.Control.Feedback type="invalid">
                        Veuillez entrer un Couriel valide.
                      </Form.Control.Feedback>
                    </div>
                  </div>
                          
                  <div className="col-lg-3">
                    <label for="phone" className="form-label">Numéro de Téléphone:</label>
                    <div className="input-group">
                      <input type="number " className="form-control" id="phone" placeholder="ex. 6137891234" required></input>
                      <span className="input-group-text">
                        <i className="bi bi-phone-fill"></i>
                      </span>
                      <Form.Control.Feedback type="invalid">
                        Veuillez entrer votre Numéro.
                      </Form.Control.Feedback>
                    </div>
                  </div>

                  <div className="col-lg-5 mt-2">
                    <label for="expert" className="form-label">Marque et Modèle:</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="car" placeholder="ex. Ford F-150" required></input>
                      <span className="input-group-text">
                        <i className="bi bi-car-front-fill"></i>
                      </span>
                      <Form.Control.Feedback type="invalid">
                        S.v.p entrer la Marque et le Model de votre véhicule.
                      </Form.Control.Feedback>
                    </div>
                  </div>

                  <div className="col-lg-3 mt-2">
                    <label for="service" className="form-label">Année de Fabrication:</label>
                    <div className="input-group">
                      <input type="number" class="form-control" name="year" id="year" placeholder="ex. 2018" required/>
                      <span className="input-group-text">
                        <i class="bi bi-calendar-fill"></i>
                      </span>
                      <Form.Control.Feedback type="invalid">
                        S.v.p entrer l'Année de Fabrication de votre véhicule.
                      </Form.Control.Feedback>
                    </div>
                  </div>

                  <div class="col-lg-4 mt-2">
                    <label for="service" class="form-label">Service ou Forfait:</label>
                      <div class="input-group">
                        <select class="form-select" id="service" required>
                          <option value="vinylwrap">Habillage de Vinyle</option>
                          <option value="film">Film Protecteur</option>
                          <option value="tint">Fenêtre Teinte</option>
                          <option value="changeHerUp">Changez-la</option>
                          <option value="fullTint">Pleine Teinte</option>
                          <option value="protect">Protège-la</option>
                        </select>
                        <span class="input-group-text">
                          <i class="bi bi-box-seam-fill"></i>
                        </span>
                      </div>
                    </div>

                  <div className="mt-5 text-center">
                    <hr></hr>
                    <button type="submit" className="btn btn-danger">Soumettre</button>
                  </div>
                </Form>
              </div>
            </div>
          </Modal.Body>
        </Modal>

      </header>
    </div>
  );
}

export default App;
