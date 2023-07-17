import React, { useState, useEffect, useContext } from "react";
import "./Partner.css";
import { getClients } from "../../service/Service";
import { CityContext } from "../../context/CityContext";
import Carousel from "@itseasy21/react-elastic-carousel";

function Partner() {
  const [clients, setClients] = useState([]);
  const { breakPointsClients, Myarrow } = useContext(CityContext);
  const handleFetchClients = async () => {
    await getClients(setClients);
  };

  useEffect(() => {
    handleFetchClients();
  }, []);
  console.log(clients);

  return (
    <>
      <div className="main_banner2 main_banner_partner">
        <div className="container">
          <h2>
            Our Brands <span className="top_city_span">Partners</span>
          </h2>
          <div className="row desk_hide" style={{ marginTop: "30px" }}>
            <Carousel breakPoints={breakPointsClients} renderArrow={Myarrow}>
              {clients?.map((client, i) => {
                return (
                  <div className="client_box" key={i}>
                    <img
                      src={client?.logo_url}
                      alt={client?.name}
                      className="img-fluid"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="container mob_hide">
        <div className="row">
          <Carousel breakPoints={breakPointsClients} renderArrow={Myarrow}>
            {clients?.map((client, i) => {
              return (
                <div className="client_box" key={i}>
                  <img
                    src={client?.logo_url}
                    alt={client?.name}
                    className="img-fluid"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Partner;
