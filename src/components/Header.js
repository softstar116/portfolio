import React from "react";
const Header=()=>{
    return (
  <div>
  <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

  <header id="header">
                <div className="d-flex flex-column">

                <div className="profile">
                    <img src="assets/img/profile-img.png" alt="" className="img-fluid rounded-circle"></img>
                    <h1 className="text-light"><a href="index.html">Pavlo konstantinov</a></h1>
                    <div className="social-links mt-3 text-center">
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>

                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                    <li><a href="#about" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                    <li><a href="#testimonials" className="nav-link scrollto"><i className="bx bx-user"></i> <span>Feedback</span></a></li>
                    <li><a href="#goals" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>My Goal</span></a></li>
                    </ul>
                </nav>
                {/* <!-- .nav-menu --> */}
                </div>
    </header>
  </div>
    )
}
export default Header