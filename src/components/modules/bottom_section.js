import React from "react";

const Bottomsection = ({ match }) => {
  const { path } = match;

  if (path === "/legacy") {
    return (
      <section id="Bottomsection">
        <div className="Bottomsection-button">
          <a href="https://legacy-school.herokuapp.com/">
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
            a
            href="https://floating-oasis-25772.herokuapp.com/"
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
            href="https://immense-bastion-16871.herokuapp.com/"
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
