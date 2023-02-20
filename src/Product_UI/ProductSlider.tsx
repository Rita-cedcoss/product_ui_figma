import Slider from "react-slick";
import React from "react";
import { color, fontWeight } from "@mui/system";
type prodSliderProps = {
  heading: string;
};
const ProductSlider = (props: prodSliderProps) => {
  const arr = [
    "Image.png",
    "Image@2x.png",
    "Image3.png",
    "Image4.png",
    "Image6.png",
    "Image6.png",
    "Image6.png",
  ];
  let arrow = ">";
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <button className="slidernext">{arrow}</button>,
  };
  return (
    <div className="slider">
      <h1 style={{ fontSize: "32px" }}>{props.heading}</h1>
      <Slider {...settings}>
        {arr.map((item, i: number) => {
          return (
            <>
              <div className="slider__item">
                <div className="slider__item__top">
                  <img height="195px" width="180px" src={item} alt="img" />
                  <span className="slider__wish">
                    <i className="bi bi-heart"></i>
                  </span>
                </div>
                <div className="product">
                  <p style={{ fontSize: "9px", color: "grey" }}>Brand /Type</p>
                  <p style={{ fontSize: "12px" }}>Name and Characteristics</p>
                  <p style={{ fontSize: "14px", fontWeight: "600" }}>
                    74,95 € /121,00 €
                  </p>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <span>(45)</span>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;