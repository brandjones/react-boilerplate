import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div id="Content">
      <div className="row">
        <section className="Content-em">
          <Link to="/emcontractors">
            <img alt="EM Contractors" src="/images/em_home.png" />
          </Link>
        </section>
        <section className="Content-leg">
          <Link to="/legacy">
            <img alt="Legacy School" src="/images/chalk.png" />
          </Link>
          <Link to="/sentinel">
            <img alt="New York Sentinel" src="/images/nys.png" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Content;
