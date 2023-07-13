import React, { useContext } from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import premiumBrand from "../../media/premium_brand.png";
import "./PremiumBrands.css";
import brand_logo from "../../media/brand_logo.png";
import { CityContext } from "../../context/CityContext";
import { getBrands } from "../../service/Service";
import { useState, useEffect } from "react";

function PremiumBrands() {
  const { breakPoints, Myarrow } = useContext(CityContext);

  const [brands, setBrands] = useState([]);
  const handleFetchBrands = async () => {
    await getBrands(setBrands);
  };

  useEffect(() => {
    handleFetchBrands();
  }, []);
  // console.log(brands);

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
            {brands
              ?.filter((brand) => brand?.should_show_on_home == true)
              .map((item, i) => (
                <div className="card premium_card" key={i}>
                  <div className="image-container">
                    <img
                      src={item?.featureImage}
                      className="img-fluid card-img-top"
                      alt={item?.name}
                    />
                  </div>
                  <div className="card-body">
                    <p className="brand_name">{item?.name}</p>
                  </div>
                  <div className="brand_logo">
                    <img src={item?.image} alt="brand-logo" width="100%" />
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default PremiumBrands;
