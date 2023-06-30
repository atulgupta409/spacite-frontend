import React, { useContext } from "react";
import Carousel from "react-elastic-carousel";
import premiumBrand from "../../media/premium_brand.png";
import "./PremiumBrands.css";
import brand_logo from "../../media/brand_logo.png";
import { CityContext } from "../../context/CityContext";

function PremiumBrands() {
  const { breakPoints, Myarrow } = useContext(CityContext);

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #FEEFF8 0%, #EEFBFE 100%)",
        marginTop: "-2px",
      }}
      className="main_banner2"
    >
      <div className="container">
        <h3 className="sub_heading">
          <span>Top</span>
          <span> Coworking in India</span>
        </h3>
        <div className="section_heading_brands">
          <h2>Coworking Spaces, Virtual Offices and More</h2>
        </div>
        <div className="top_space_row">
          <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
            <div className="card premium_card">
              <img
                src={premiumBrand}
                style={{ borderRadius: "20px 20px 0px 0px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="brand_name">WeWork</p>
                <p className="total_spaces">200+ Spaces</p>
              </div>
              <div className="brand_logo">
                <img src={brand_logo} alt="brand-logo" width="100%" />
              </div>
            </div>
            <div className="card premium_card">
              <img
                src={premiumBrand}
                style={{ borderRadius: "20px 20px 0px 0px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="brand_name">WeWork</p>
                <p className="total_spaces">200+ Spaces</p>
              </div>
              <div className="brand_logo">
                <img src={brand_logo} alt="brand-logo" width="100%" />
              </div>
            </div>
            <div className="card premium_card">
              <img
                src={premiumBrand}
                style={{ borderRadius: "20px 20px 0px 0px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="brand_name">WeWork</p>
                <p className="total_spaces">200+ Spaces</p>
              </div>
              <div className="brand_logo">
                <img src={brand_logo} alt="brand-logo" width="100%" />
              </div>
            </div>
            <div className="card premium_card">
              <img
                src={premiumBrand}
                style={{ borderRadius: "20px 20px 0px 0px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="brand_name">WeWork</p>
                <p className="total_spaces">200+ Spaces</p>
              </div>
              <div className="brand_logo">
                <img src={brand_logo} alt="brand-logo" width="100%" />
              </div>
            </div>
            <div className="card premium_card">
              <img
                src={premiumBrand}
                style={{ borderRadius: "20px 20px 0px 0px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="brand_name">WeWork</p>
                <p className="total_spaces">200+ Spaces</p>
              </div>
              <div className="brand_logo">
                <img src={brand_logo} alt="brand-logo" width="100%" />
              </div>
            </div>
            <div className="card premium_card">
              <img
                src={premiumBrand}
                style={{ borderRadius: "20px 20px 0px 0px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="brand_name">WeWork</p>
                <p className="total_spaces">200+ Spaces</p>
              </div>
              <div className="brand_logo">
                <img src={brand_logo} alt="brand-logo" width="100%" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default PremiumBrands;
