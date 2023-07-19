import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SpaceSkeleton() {
  return (
    <div className="d-inline-block">
      <div className="city_page_title_box">
        <h2>
          <Skeleton className="wave-effect" />
        </h2>
        <div className="city_explore">
          <Skeleton className="wave-effect" />
        </div>
      </div>
      <div className="micro_location_properties">
        <div className="col-12">
          <div className="carousel-items">
            <div className="row property_card property_card_mob">
              <div className="col-6 col-sm-12 img_box2 img_box_micro">
                <Skeleton
                  className="wave-effect"
                  height={400}
                  width={400}
                  borderRadius={20}
                />
              </div>
              <div className="card_body col-6 col-sm-12">
                <p className="card-title">
                  <Skeleton className="wave-effect" />
                </p>
                <div className="location_box">
                  <p>
                    <Skeleton className="wave-effect" />
                  </p>
                </div>

                <p className="price_from">
                  <Skeleton className="wave-effect" />
                </p>
                <div className="price_box">
                  <p className="price">
                    <Skeleton className="wave-effect" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaceSkeleton;
