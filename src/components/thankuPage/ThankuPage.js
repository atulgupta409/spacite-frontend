import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./ThankuPage.css";

function ThankuPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container thanku_main">
      <div className="row">
        <div className="col-12 col-md-7 d-flex justify-content-center flex-column mt-5 mt-md-0">
          <h1 className="thanku_heading">Thank you for submitting the Query</h1>
          <p>
            We have received your request and will be sending you an email from
            a Spacite Space expert shortly.
          </p>
          <div className="row">
            <div className="col-4 col-md-3">
              <button className="globalBtn" onClick={goBack}>
                Previus page
              </button>
            </div>
            <div className="col-4 col-md-3" style={{ marginLeft: "-23px" }}>
              <Link to="/">
                <button className="thanku_btn">Homepage</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
          <img
            src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688629207512.png"
            alt="thank you"
            className="thanku_img"
          />
        </div>
      </div>
    </div>
  );
}

export default ThankuPage;
