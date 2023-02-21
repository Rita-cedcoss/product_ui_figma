import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="about__left">
        <div className="about__content">
          <h3>It’s all about you</h3>
          <p>
            Try now, pay later. We want that you’re really confident and happy
            with your purchase - you have 30 days before we charge you! Learn
            more about our policy.
          </p>
          <span className="about__arrow">
            <i className="bi bi-arrow-right"></i>
          </span>
        </div>
      </div>
      <div className="about__right">
        <img src="Frame 124.png" height="330px" width="700px" />
      </div>
    </section>
  );
};

export default About;
