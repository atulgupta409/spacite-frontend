import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import LeftArrow from "../../media/icon/left_arrow.png";
import RightArrow from "../../media/icon/right_arrow.png";
import premiumBrand from "../../media/premium_brand.png";
import "./PremiumBrands.css";
import brand_logo from "../../media/brand_logo.png";

function PremiumBrands() {
  function Myarrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? LeftArrow : RightArrow;
    return (
      <button onClick={onClick} disabled={isEdge} className="carousel_arrow">
        <img src={pointer} alt="arrow" />
      </button>
    );
  }
  const breakPoints = [
    { width: 1, itemsToShow: 1.5 },
    // { width: 420, itemsToShow:  },
    { width: 500, itemsToShow: 2.2 },
    { width: 768, itemsToShow: 4 },
    { width: 992, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 4 },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #FEEFF8 0%, #EEFBFE 100%)",
      }}
      className="main_banner2"
    >
      <div className="container">
        <h3 className="sub_heading">
          <span>Premium</span> Brands
        </h3>
        <div className="section_heading">
          <h2>Coworking Spaces, Virtual Offices and More</h2>
        </div>
        <div className="top_space_row">
          <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
            <div class="card premium_card">
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
            <div class="card premium_card">
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
            <div class="card premium_card">
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
            <div class="card premium_card">
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
            <div class="card premium_card">
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
            <div class="card premium_card">
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
