import React from "react";

const Product = () => {
  const arr = [
    {
      image: "Image7.png",
      left: "slider__wish--left",
    },
    {
      image: "Image6.png",
      left :"slider__wish--left"
    },
    {
      image: "Image8.png",
      left: "slider__wish--left",
    },
  ];
  return (
    <div className="slider slider--bg">
      <h1 className="slider__h1">SPRING/SUMMER 2021</h1>
      <div className="summerSlider">
        {arr.map((item) => {
          return (
            <>
              <div className="slider__summer">
                <div className="slider__item__top">
                  <img src={item.image} alt="img" height="100%"  width="100%"/>
                  <span className={`${item.left} slider__wish `}>
                    <i className="bi bi-heart"></i>
                  </span>
                </div>
                <div className="product">
                  <p style={{ fontSize: "9px", color: "grey" }}>Brand /Type</p>
                  <p style={{ fontSize: "12px" }}>Name and Characteristics</p>
                  <p style={{ fontSize: "14px", fontWeight: "600" }}>
                    74,95 € / <del style={{fontSize: "12px"}}>121,00 €</del>
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
      </div>
    </div>
  );
};

export default Product;
