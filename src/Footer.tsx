import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer slider slider--bg">
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <>
              <div className="footer__item">
                <h3>Footer{item}</h3>
                <p className="footer__top">item1</p>
                <p>item2</p>
                <p>item3</p>
              </div>
            </>
          );
        })}
      </section>
      <img height="106px" width="100%" src="Footer Bottom.png"></img>
    </>
  );
};

export default Footer;
