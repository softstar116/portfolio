import React from "react";
import { Link,useParams  } from "react-router-dom";
import { content } from "../Content";
const Details=()=>{
  const { param } = useParams();
  const { hero } = content;

  const {project_content}=content
  // const param = props.match.params.param;  
  return (
      
  <div>
    
  <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

  <section id="breadcrumbs" className="breadcrumbs"style={{backgroundColor:"black",color:"white"}}>
      <div className="container">
      {/* <video
                className="object-cover absolute z-[-1] shadow-3xl min-h-screen"
                src={hero.video}
                style={{objectFit:'cover',position:'fixed',width:'100vw',height:'100vh',left:0,top:0}}
                autoPlay
                loop
                muted
                /> */}
        <div className="d-flex justify-content-between align-items-center">
          <h2>Portfoio Details</h2>
          <ol>
            <li><Link to="/home">Home</Link></li>
            <li>Portfoio Details</li>
          </ol>
        </div>

      </div>
    </section>
    {/* <!-- End Breadcrumbs --> */}

    {/* <!-- ======= Portfolio Details Section ======= --> */}
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-8">
            <div className="portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">

                <div className="swiper-slide">
                <img src={project_content[param-1].image} style={{height:440}}alt="" />
                </div>

                {/* <div className="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-details-2.jpg" alt=""></img>
                </div>

                <div className="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-details-3.jpg" alt=""></img>
                </div> */}

              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>

          <div className="col-lg-4" >
            <div className="portfolio-info" >
              <h3>Project information</h3>
              <ul>
                <li><strong style={{color:"black"}}>Project Name</strong>: <a href="#">{project_content[param-1].project_name}</a></li>
                <li><strong style={{color:"black"}}>Complete Date</strong>:<a href="#">{project_content[param-1].completion_date}</a></li>
                <li><strong style={{color:"black"}}>Skills</strong>: <a href="#">{project_content[param-1].skills}</a></li>
                <li><strong style={{color:"black"}}>Price</strong>: <a href="#">{project_content[param-1].price}</a></li>
                <li><strong style={{color:"black"}}>Project URL</strong>: <a href="#">{project_content[param-1].project_url}</a></li>
                {/* <li><strong style={{color:"black"}}>Details</strong>: <a href="#">{project_content[param-1].detail}</a></li> */}
              </ul>
            </div>
       
          </div>

        </div>
        <div className="row">
        <div className="section-title info" >
        <h2>Details</h2>
        <h5>{project_content[param-1].detail}</h5>
        {/* <h4 >My goal is to broaden my skillset and create successful products for my client's business.</h4> */}
      </div>
        </div>
      </div>
    </section>
  </div>
    )
}
export default Details