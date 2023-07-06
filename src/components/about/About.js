import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <section id="banner_area" className="mobile_banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-5 order-sm-last">
              <div className="banner_img your_space_img">
                <img
                  src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688629365491.png"
                  alt="listSpaceBanner"
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
            <div className="col-sm-7 order-sm-first">
              <div className="banner_content">
                <h2 style={{ textAlign: "left" }}>
                  Advertise <span style={{ color: "#d09cff" }}>Your Space</span>{" "}
                  to Lacs of Tenants Every Month !
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  donec dui egestas ut auctor dictum ultricies consectetur
                  justo. Porta et ac, curabitur diam donec et phasellus semper
                  nam.
                </p>
                <NavLink to="/contact">
                  <button className="globalBtn">List Now</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2"></div>
            <div className="col-sm-8 col-12">
              <div className="about-text text-center">
                <h3>About Spacite</h3>
                <h4>#SPACESEARCHMADESIMPLE</h4>
                <p>
                  <strong>Book, List & Discover unique places</strong>
                  <br />
                  Spacite is a movement of technologists, architects and
                  influencers that strongly believe in disrupting the way people
                  have access to undiscovered and idle places in order to create
                  experiences and meaningful events. We enable space owners to
                  bring motion to their spaces and monetize them. The result? A
                  hyper lively urban scene where people can create unique
                  experiences for their guests, brand followers, employees or
                  group of friends, having access to a diverse range of places
                  that were never visible to them before.
                </p>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </section>
      <section id="mission_vission_sec" className="padding-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="about-img">
                <img
                  src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688627981282.png"
                  alt="missionImg"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="mission-content">
                <h3>Our Mission</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sed nibh in ex facilisis vehicula sit amet vel nisi.
                  Sed ligula arcu, malesuada a metus non, vehicula volutpat
                  mauris. Praesent in egestas diam, et iaculis ligula. Etiam
                  pretium ipsum ut mi iaculis mollis.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-5 order-sm-last">
              <div className="about-img">
                <img
                  src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688628065983.png"
                  alt="visionImg"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-7 order-sm-first">
              <div className="vission-content">
                <h3>Our Vision</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sed nibh in ex facilisis vehicula sit amet vel nisi.
                  Sed ligula arcu, malesuada a metus non, vehicula volutpat
                  mauris. Praesent in egestas diam, et iaculis ligula. Etiam
                  pretium ipsum ut mi iaculis mollis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experts_area" className="experts_area">
        <div className="container">
          <div className="row pb-2">
            <div className="col-md-12">
              <h3 className="text-center">Meet Our Experts</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                nisi, augue lobortis suscipit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam nisi, augue lobortis
                suscipit.
              </p>
            </div>
          </div>
          <div className="row pt-4 experts_list">
            <div className="col-4">
              <div className="experts_box">
                <div className="experts-item">
                  <div className="experts-img">
                    <img
                      src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688628135891.jpg"
                      alt="expert1"
                      className="img-fluid"
                    />
                  </div>
                  <div className="experts-content">
                    <h4>John Smith</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="experts_box">
                <div className="experts-item">
                  <div className="experts-img">
                    <img
                      src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688628194842.jpg"
                      alt="expert2"
                      className="img-fluid"
                    />
                  </div>
                  <div className="experts-content">
                    <h4>Will Smith</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="experts_box">
                <div className="experts-item">
                  <div className="experts-img">
                    <img
                      src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688628221693.jpg"
                      alt="expert3"
                      className="img-fluid"
                    />
                  </div>
                  <div className="experts-content">
                    <h4>Williams</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="cta_area3">
        <div className="container">
          <div
            className="row"
            style={{
              backgroundImage: `url("https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688627849173.jpg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
            }}
          >
            <div className="col-md-6">
              <div className="cta_box2">
                <h3>Not able to find your perfect space...</h3>
                <NavLink to="/contact">
                  <button className="globalBtn">Contact us</button>
                </NavLink>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
