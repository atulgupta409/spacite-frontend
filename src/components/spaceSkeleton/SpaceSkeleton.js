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
      <div className="top_space_row">
        <div className="property-card">
          <div className="property_img">
            <Skeleton
              className="wave-effect"
              circle={true}
              height={300}
              width={300}
            />
          </div>
          <div className="card-body space_card">
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
  );
}

export default SpaceSkeleton;
