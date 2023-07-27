import React from "react";

const ImageCarousel = ({ images }) => {
  return (
    <div className="image-carousel">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-interval="false"
        data-bs-touch="true"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          {images?.map((image, index) => (
            <div
              key={index}
              class={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={image?.image}
                class="d-block w-100 img-fluid property_page_img"
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
