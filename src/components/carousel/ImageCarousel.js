import React from "react";

const ImageCarousel = ({ images }) => {
  return (
    <div className="image-carousel">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-interval="false"
        data-bs-touch="true"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images?.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={image?.image}
                className="d-block w-100 img-fluid property_page_img"
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="carousel-indicators">
          {images?.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

// import React from "react";
// import Carousel from "react-bootstrap/Carousel";

// const ImageCarousel = ({ images }) => {
//   return (
//     <div className="image-carousel">
//            {" "}
//       <Carousel fade>
//                {" "}
//         {images?.map((image) => (
//           <Carousel.Item key={image._id}>
//                         <img src={image.image} />         {" "}
//           </Carousel.Item>
//         ))}
//              {" "}
//       </Carousel>
//          {" "}
//     </div>
//   );
// };

// export default ImageCarousel;
