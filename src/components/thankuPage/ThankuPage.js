import React from "react";
import thankYou from "../media/Thank you page vector.svg";
import { Link, useNavigate } from "react-router-dom";

function ThankuPage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="container thanku_main">
      <div className="row">
        <div className="col-12 col-md-7 d-flex justify-content-center flex-column">
          <h1>Thank you for submitting the Query</h1>
          <p>
            We have received your request and will be sending you an email from
            a Spacite Space expert shortly.
          </p>
          <div className="row">
            <div className="col-3">
              <button className="globalBtn" onClick={goBack}>
                Previus page
              </button>
            </div>
            <div className="col-3" style={{ marginLeft: "-23px" }}>
              <Link to="/">
                <button className="thanku_btn">Homepage</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
          <img src={thankYou} alt="thank you" className="thanku_img" />
        </div>
      </div>
    </div>
  );
}

export default ThankuPage;
