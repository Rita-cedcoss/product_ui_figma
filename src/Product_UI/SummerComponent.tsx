import React from "react";

const SummerComponent = () => {
  const arr = [
    {
      image: "Image7.png",
      left: "slider__wish--left",
    },
    {
      image: "Image6.png",
    },
    {
      image: "Image8.png",
      left: "slider__wish--left",
    },
  ];
  return (
    <div className="slider slider--bg">
      <h1 style={{ fontSize: "32px" }}>SPRING/SUMMER 2021</h1>
      <div className="summerSlider">
        {arr.map((item) => {
          return (
            <>
              <div className="slider__summer">
                <div className="slider__item__top">
                  <img src={item.image} alt="img" />
                  <span className={`${item.left} slider__wish `}>
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
      </div>
    </div>
  );
};

export default SummerComponent;
