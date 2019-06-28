import React from "react";

const Topsection = ({ match, Legacy, Contractors, Sentinel }) => {
  const { path } = match;
  const { desktopImage, heading, info, detail, subheading } = Legacy;
  const { emHeading, emSubHeading, emContent } = Contractors;

  const { senheading, senSubHeading, seninfo, sendetail } = Sentinel;

  if (path === "/emcontractors") {
    return (
      <div id="Topsection">
        <div className="Topsection-heading">
          <h1> {emHeading}</h1>
          <h4> {emSubHeading}</h4>
        </div>
        <div className="Topsection-info">
          <p> {emContent}</p>
        </div>
      </div>
    );
  }

  if (path === "/legacy") {
    return (
      <div id="Topsection">
        <div className="Topsection-heading">
          <h1> {heading}</h1>
          <h4> {subheading}</h4>
        </div>
        <div className="Topsection-info">
          <h1> {info}</h1>
          <p> {detail}</p>
        </div>
        <div className="Topsection-image">
          <div>
            <img src={desktopImage} />
          </div>
        </div>
      </div>
    );
  }

  if (path === "/sentinel") {
    return (
      <div id="Topsection">
        <div className="Topsection-heading">
          <h1> {senheading}</h1>
          <h4> {senSubHeading}</h4>
        </div>
        <div className="Topsection-info">
          <h1> {seninfo}</h1>
          <p> {sendetail}</p>
        </div>
      </div>
    );
  }
};

export default Topsection;
