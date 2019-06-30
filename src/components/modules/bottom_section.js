import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Bottomsection = ({ match }) => {
  const { path } = match;

  if (path === "/legacy") {
    return (
      <section id="Bottomsection">
        <div className="Bottomsection-button">
          <Link
            to={e => {
              e.prevenDefault();
              axios.get("wwww.legacyschoolofarts.com");
            }}
          >
            View The Legacy School{" "}
          </Link>
        </div>
      </section>
    );
  }

  if (path === "/emcontractors") {
    return (
      <section id="Bottomsection">
        <div className={`Bottomsection-button`}>
          <Link
            to={() => {
              e.prevenDefault();
              axios.get("wwww.emscottcontractors.com");
            }}
            className={`Bottomsection-button-orange`}
          >
            {" "}
            View E.M. Contractors{" "}
          </Link>
        </div>
      </section>
    );
  }

  if (path === "/sentinel") {
    return (
      <section id="Bottomsection">
        <div className={`Bottomsection-button`}>
          <Link
            to={() => {
              e.prevenDefault();
              axios.get("www.nysentinel.co");
            }}
            className={`Bottomsection-button-black`}
          >
            {" "}
            View The Sentinel{" "}
          </Link>
        </div>
      </section>
    );
  }
};

export default Bottomsection;
