import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { content } from "../Content";

const Home=()=>{
    const { hero } = content;
    return (
    <div>
      <Header />
                 <video
                className="object-cover absolute z-[-1] shadow-3xl min-h-screen"
                src={hero.video}
                style={{objectFit:'cover',position:'fixed',width:'100vw',height:'100vh',left:0,top:0}}
                autoPlay
                loop
                muted
                />
 <main id="main">

  <section id="about" className="about">
    <div className="container">

      <div className="section-title">
        <h2>About</h2>
        <p style={{position:"relative", fontStyle:"italic"}}>
        Hello, I’m Pavlo, thank you for visiting my portfolio!<br></br>
        I've been a professional web&mobile app developer for over 5 years with a wide range of skills in iOS, Android, React Native, Flutter, native & hybrid app development.<br></br>
        Over the last 5 years, I have built numerous mobile apps like Delivery Apps, Ticketing apps, Chat apps, HealthCare apps, Social media apps, etc using React Native, Flutter and other technologies like Firebase, Node.js & AWS.<br></br>
        Delivered bug-free, high-performing, and responsive applications to the clients, which helped in their businesses a lot.<br></br>
      

        </p>
      </div>

      <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
          <img src="assets/img/profile-img.png" className="img-fluid" alt=""></img>
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Senior React/React Native/Flutter/iOS/Android App Developer</h3>
          <p className="fst-italic">
          ⚡Mobile: iOS, Android, React Native, Flutter, Swift and Kotlin, 
          </p>
          <p className="fst-italic">
            ⚡Frontend: React/Redux, Next.js, JavaScript, TypeScript, Tailwind CSS, MUI
          </p>
          <p className="fst-italic">
            ⚡Backend: PHP, Laravel, Node/ExpressJS
          </p>
          <p className="fst-italic">
            ⚡Database: SQL/NoSQL (MySQL, PostgreSQL, MongoDB, DynamoDB,Firebase) 
          </p>
          <p className="fst-italic">
            ⚡Management Tool: Slack, JIRA, Trello. 
          </p>
          <p className="fst-italic">
            ⚡Version control: Git(GitHub, GitLab, BitBucket) 
          </p>
          <p className="fst-italic">
            ⚡Clouding Service and Third-party SDK: AWS, Google, Azure, Stripe, Braintree, Twilio
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>10 October 1998</span></li>
                {/* <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> */}
                {/* <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>057 701 4008</span></li> */}
                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Odesa, Zatonskoho, buil. 24</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                {/* <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>26</span></li> */}
                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                {/* <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>uo0901576@gmail.com</span></li> */}
                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
          </div>
          <p>⚡  My experience developing user-friendly solutions on time and on budget would enables to bring value to your business. <br></br></p>
          <p>⚡   Looking forward to working together! </p>             
        </div>
      </div>

    </div>
  </section>

  <section id="skills" className="skills section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Skills</h2>
        <p style={{position:'relative'}}>Here are my familiar languages, frameworks, tools and expertise</p>
      </div>

      <div className="row skills-content">

        <div className="col-lg-6" data-aos="fade-up">

          <div className="progress">
            <span className="skill">React Native <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" style={{width: "100%"}}></div>
              {/* <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div> */}
            </div>
          </div>

          <div className="progress">
            <span className="skill">React <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill">Node <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill">TypeScript <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}></div>
            </div>
          </div>


        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

        <div className="progress">
            <span className="skill">Flutter <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Dart <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Swift <i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Kotlin <i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
            </div>
          </div>


        </div>

      </div>

    </div>
  </section>
{/* <!-- End Skills Section --> */}

{/* <!-- ======= Resume Section ======= --> */}
  <section id="resume" className="resume">
    <div className="container">

      <div className="section-title">
        <h2>Resume</h2>
      </div>

      <div className="row">
        <div className="col-lg-6" data-aos="fade-up">
          <h3 className="resume-title">Sumary</h3>
          <div className="resume-item pb-0">
            <h4>Pavlo konstantinov</h4>
            <p><em>Over 7 years' IT industry experience with 5 years focusing on Android and web solutions.<br></br> Sr. Mobile application developer with experience developing mobility apps including Mobile Web and native apps on Windows Mobile and Android devices.<br></br> Planned, designed, developed and implemented successful large-scale projects from conception to completion Proficient with Android and ios application development lifecycle from application creation to deployment in Google Play.</em></p>
            <ul>
              {/* <!-- <li>Dmytrijeva St, 46, Mykolaiv, Mykolaivs'ka oblast</li> --> */}
              <li>Odesa,Zatonskoho, buil. 24, Housing</li>
              {/* <li>1-832-500-8879</li> */}
              {/* <li>uo0901576@gmail.com</li> */}
            </ul>
          </div>

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            {/* <h4>Bachelor of Computer Science</h4> */}
            <h5>2015 - 2016</h5>
            <p><em>Odessa Automobile and Road Technical College</em></p>
            {/* <p>Data Structure and Algorithms, Computer Graphics, Fundamentals of Computation, Linear Algebra, Engineering Graphics, Computational Methods in Engineering, Analytic Geometry, Physics, Calculus, Trigonometry, Algebra, Design Patterns, Software Architecture, Object Oriented Programming</p> */}
          </div>
          <div className="resume-item">
            <h4>Bachelor of Computer Science</h4>
            <h5>2016 - 2019</h5>
            <p><em>Odesa Mechnikov National University</em></p>
            <p>Data Structure and Algorithms, Computer Graphics, Fundamentals of Computation, Linear Algebra, Engineering Graphics, Computational Methods in Engineering, Analytic Geometry, Physics, Calculus, Trigonometry, Algebra, Design Patterns, Software Architecture, Object Oriented Programming</p>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Senior Mobile Developer</h4>
            <h5>07/2021 - 03/2023</h5>
            <p><em>Synebo</em></p>
            <ul>
              <li>iOS/Android mobile applications ecosystem development, maintenance and update.</li>
              <li>Realtime based services.</li>
              <li>Firebase integrations.</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Mobile App Developer</h4>
            <h5>10/2020 - 06/2021</h5>
            <p><em>Lohika</em></p>
            <ul>
              <li>iOS/Android mobile applications ecosystem development, maintenance and update</li>
              <li>Realtime based services</li>
              <li>Firebase integrations</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Front-End Developer|React</h4>
            <h5>05/2020 - 09/2020</h5>
            <p><em>Luxoft Odesa Mykhaylovsky </em></p>
            <ul>
              <li>Developed front-end using React , Redux, MUI, Mapbox</li>
            </ul>
          </div>
    
      
        </div>
      </div>

    </div>
  </section>
{/* <!-- End Resume Section --> */}

{/* <!-- ======= Portfolio Section ======= --> */}
  <section id="portfolio" className="portfolio section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Portfolio</h2>
        <h4 style={{TextAlign:"center", position:'relative', color:'white'}}>Professional and Personal Projects I was part of.
        If you want, I can provide link and Figma Design</h4>
      </div>

      <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-1.png" style={{width:415.99,height:300}} alt=""></img>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-1.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
              <Link to="/detail/1" title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-2.png"style={{width:415.99,height:300}} alt=""></img>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-2.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
              <Link to="/detail/2" title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-3.png" style={{width:415.99,height:300}} alt=""></img>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-3.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
              <Link to="/detail/3" title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-4.png" style={{width:415.99,height:300}} alt=""></img>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-4.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
              <Link to="/detail/4" title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-5.png" style={{width:415.99,height:300}} alt=""></img>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-5.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
              <Link to="/detail/5" title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-6.png" style={{width:415.99,height:300}} alt=""></img>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-6.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
              <Link to="/detail/6" title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div>
        </div>

        {/* <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-7.png" style={{width:415.99,height:300}} alt=""></img>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-7.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="/detail" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-8.png" style={{width:415.99,height:300}} alt=""></img>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-8.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="/detail" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-9.png" style={{width:415.99,height:300}} alt=""></img>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-9.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="/detail" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div> */}

      </div>

    </div>
  </section>
{/* <!-- End Portfolio Section -->

  {/* <!-- ======= Testimonials Section ======= --> */}
  <section id="testimonials" className="testimonials section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Feedback</h2>
        <h4 style={{TextAlign:"center",position:"relative",color:"white"}}>Client's satisfaction is my first concern. Coding is the part of my life! Support to client's business with my problem-solving skills is pleasure!</h4>
      </div>

      <div className="testimonials-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper-wrapper swiper-slide-duplicate swiper-slide-duplicate-prev" id="swiper-wrapper-7638e07105533f852" >
        <div className="swiper-slide" data-swiper-slide-index="0" role="group" aria-label="1 / 5" style={{width: "30%"}} >
                <div className="testimonial-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  <p style={{color: "black"}}>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    I wanted to take a moment to express my gratitude for the exceptional work that you and your team have done on the software development project for our organization. The software is truly outstanding and has exceeded our expectations in every way.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>
              </div>
          <div className="swiper-slide  swiper-slide-duplicate swiper-slide-duplicate-active" style={{width: "30%"}}>
            <div className="testimonial-item"data-swiper-slide-index="1" role="group" aria-label="2 / 5" data-aos="fade-up">
              <p  style={{color: "black"}}>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                I didn't see any Freelancers like this, There was a good team, with good communication, really they're professional developers, they worked for me 24 hrs, without stopping, I appreciate their works.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""></img>
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
            </div>
          </div>  
          <div className="swiper-slide  swiper-slide-duplicate swiper-slide-duplicate-next" style={{width: "30%"}}>
            <div className="testimonial-item"data-swiper-slide-index="2" role="group" aria-label="3 / 5" data-aos="fade-up">
              <p  style={{color: "black"}}>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Pavlo lists 100% client satisfaction as their main goal and they delivered that and much more. Throughout the project, I was kept informed of their progress and consulted on options, available variations and possible improvements. The team went above and beyond what was required to deliver the highest customer service. Cosmostaker's work was of the highest quality and exceeded all objects. A great I would highly recommend.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""></img>
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
            </div>
          </div>  
          
        </div>
        <div className="swiper-pagination"></div>
      </div>

    </div>
  </section>

  <section id="goals" className="contact">
    <div className="container">

      <div className="section-title">
        <h2>My Goal</h2>
        <h4 style={{TextAlign:"center",position:"relative",color:"white"}}>I hope you got interested in my works!</h4>
        <p style={{TextAlign:"center",position:"relative",color:"white"}}>My goal is to broaden my skillset and create successful products for my client's business. 

I’m always learning new and better ways to accomplish my work and deliver better, more efficient and amazing products to you. Lets get together!!</p>
      </div>

      <div className="row" data-aos="fade-in">

        <div className="col-lg-5 d-flex align-items-stretch">
          {/* <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>Zatonskoho, buil. 24, Housing. 1, fl. 133</p>
            </div>

            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>info@example.com</p>
            </div>


          </div> */}

        </div>

        {/* <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" className="form-control" id="name" required></input>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Email</label>
                <input type="email" className="form-control" name="email" id="email" required></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="name">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject" required></input>
            </div>
            <div className="form-group">
              <label htmlFor="name">Message</label>
              <textarea className="form-control" name="message" rows="10" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div> */}

      </div>

    </div>
  </section>

</main>

    <Footer />

    </div>
    )
}
export default Home