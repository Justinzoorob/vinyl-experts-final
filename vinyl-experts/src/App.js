
import './App.css';

import logo from './assets/Vinyl Experts-logos.jpeg';
import logoTrans from './assets/Vinyl Experts-logos_black.png'
import homebg from './assets/ferrari-bg.jpg';
import aboutUsimg from './assets/porsche-bg.jpg'

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div className="App">
      <header className="bg-light">

      {/* Navbar */}
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
              <a href="#intro" className="navbar-brand">
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
                          <a href="#appointment" className="btn btn-danger text-light">Free Quote</a>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>

        {/* Main part / Intro */}
        <section id="intro">
          <div className="container-fluid" style={{ backgroundImage: `url(${homebg})`, height: '92vh'}}>
              <div className="row justify-content-center">
                  <div className="text-center">
                    <img src={logoTrans} className="img-fluid" width={700} id="logo"></img>
                      {/* <h1>
                          <div className="display-1 my-2 text-danger"><strong>Vinyl Experts</strong></div>
                          <div className="display-5 text-black"><strong>Colors and styles are endless...</strong></div>
                      </h1> */}
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
              <div className="col-lg-4 bg-dark px-4 py-2 text-white rounded">
                  <h2 className="display-3 mt-3">Our Mission...</h2>
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

      </header>
    </div>
  );
}

export default App;
