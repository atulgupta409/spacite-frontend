import React, { useContext, useEffect, useState } from "react";
import { CityContext } from "../../context/CityContext";
import HomeContact from "../home-contact/HomeContact";
import Carousel from "@itseasy21/react-elastic-carousel";
import { Link } from "react-router-dom";
import ContactFormModal from "../../modal-form/ContactFormModal";
import Modal from "react-modal";
import { getPopularWorkspaceByCity } from "../../service/Service";

function PopularCoworking() {
  const { cities, breakPoints, Myarrow } = useContext(CityContext);
  const workImage =
    "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690177876357.png";

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [popularSpaces, setPopularSpaces] = useState([]);

  const handleFetchPopularSpaces = async (cityNames) => {
    await getPopularWorkspaceByCity(cityNames, setPopularSpaces);

    // console.log(citiesData, "data");
  };

  useEffect(() => {
    if (cities.length > 0) {
      handleFetchPopularSpaces(cities);
    }
  }, [cities]);
  // console.log(popularSpaces);

  return (
    <div>
      <div className="container">
        {cities?.map((elem, i) => {
          return (
            <div style={{ marginTop: "30px", marginBottom: "30px" }} key={i}>
              <h2>
                Popular Coworking in{" "}
                <span className="top_city_span">{elem.name}</span>
              </h2>
              <div className="micro_location_properties near_coworking">
                <div className="row">
                  <div className="col-md-12">
                    <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
                      {popularSpaces?.map((workspace) =>
                        workspace
                          ?.filter((space) => {
                            return space?.location?.city?.name === elem.name;
                          })
                          .map((mySpace, k) => {
                            return (
                              <div className="carousel-items" key={k}>
                                <div className="property_card">
                                  <Link
                                    to={`/coworking/${mySpace?.slug}`}
                                    target="_blank"
                                    style={{ padding: "0" }}
                                  >
                                    <div className="img_box">
                                      <img
                                        src={
                                          mySpace?.images?.length > 0
                                            ? mySpace?.images[0]?.image
                                            : workImage
                                        }
                                        alt={
                                          mySpace?.images?.length > 0
                                            ? mySpace?.images[0]?.alt
                                            : "workimage"
                                        }
                                        className="img-fluid"
                                      />
                                    </div>
                                  </Link>
                                  <div className="card_body">
                                    <p className="card-title">
                                      {mySpace?.name?.length > 20
                                        ? mySpace?.name?.substring(0, 20) +
                                          "..."
                                        : mySpace?.name}
                                    </p>
                                    <div className="location_box">
                                      <p>
                                        {mySpace?.location?.address?.length > 24
                                          ? mySpace?.location?.address?.substring(
                                              0,
                                              24
                                            ) + "..."
                                          : mySpace?.location?.address}
                                      </p>
                                    </div>
                                    <div className="card_amenities">
                                      <div>
                                        <img
                                          src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361871283.png"
                                          alt="wifi"
                                          className="img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <img
                                          src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688626817843.png"
                                          alt="dedicated desk"
                                          className="img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <img
                                          src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361881320.png"
                                          alt="meeting rooms"
                                          className="img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <img
                                          src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361932524.png"
                                          alt="printer"
                                          className="img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <img
                                          src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361894820.png"
                                          alt="pantry"
                                          className="img-fluid"
                                        />
                                      </div>
                                      <div>
                                        <img
                                          src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688361905753.png"
                                          alt="parking"
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <p className="price_from">Starting</p>
                                    <div className="price_box">
                                      <p className="price">
                                        ₹{" "}
                                        {mySpace?.plans
                                          ?.reduce((prev, current) =>
                                            current.price < prev.price
                                              ? current
                                              : prev
                                          )
                                          .price?.toLocaleString()}
                                        /*<span>Month</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="card_button_link">
                                    <div onClick={openModal}>Enquire Now</div>
                                    <div>
                                      <Link
                                        to={`/coworking/${mySpace?.slug}`}
                                        target="_blank"
                                      >
                                        Explore Now
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                      )}
                    </Carousel>
                  </div>
                </div>
              </div>
              {i === 2 && <HomeContact />}
            </div>
          );
        })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
      >
        <ContactFormModal closeModal={closeModal} />
      </Modal>
    </div>
  );
}

export default PopularCoworking;
