import React from "react";
import { Link } from "react-router-dom";

const Bottomsection = ({ match, fetchLegacyProject }) => {
  const { path } = match;

  if (path === "/legacy") {
    return (
      <section id="Bottomsection">
        <div className="Bottomsection-button">
          <a href="http://www.legacyschoolofarts.com">
            {" "}
            View The Legacy School{" "}
          </a>
        </div>
      </section>
    );
  }

  if (path === "/emcontractors") {
    return (
      <section id="Bottomsection">
        <div className={`Bottomsection-button`}>
          <a
            href="http://www.emscottcontractors.com"
            className={`Bottomsection-button-orange`}
          >
            {" "}
            View E.M. Contractors{" "}
          </a>
        </div>
      </section>
    );
  }

  if (path === "/sentinel") {
    return (
      <section id="Bottomsection">
        <div className={`Bottomsection-button`}>
          <a
            href="http://www.nysentinel.co"
            className={`Bottomsection-button-black`}
          >
            {" "}
            View The Sentinel{" "}
          </a>
        </div>
      </section>
    );
  }
};

export default Bottomsection;
