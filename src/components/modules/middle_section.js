import React from "react";

const Middlesection = ({ match }) => {
  const { path } = match;

  if (path === "/legacy") {
    return (
      <section id="Middlesection">
        <div className="Middlesection-title">
          <h1> Software Development Lifecycle </h1>
        </div>
        <div className="Middlesection-image">
          <img src="/images/sdlc.png" />
        </div>
      </section>
    );
  }

  if (path === "/emcontractors") {
    return (
      <section id="Middlesection">
        <div className="Middlesection-title">
          <h1> Desktop View </h1>
        </div>
        <div className="Middlesection-image">
          <img src="/images/em.png" />
        </div>
      </section>
    );
  }

  if (path === "/sentinel") {
    return (
      <section id="Middlesection">
        <div className="Middlesection-title">
          <h1> Optimized for Mobile.</h1>
        </div>
        <div className="Middlesection-image">
          <img src="/images/sen_mobile.png" />
        </div>
      </section>
    );
  }
};

export default Middlesection;
