import React from "react";

import NavBar from "../modules/navbar";
import LegacyObj from "../../config/legacy";
import ContractorsObj from "../../config/em_contractors";
import SentinelObj from "../../config/sentinel";
import Topsection from "../modules/top_section";
import Middlesection from "../modules/middle_section";
import Bottomsection from "../modules/bottom_section";

import BounceLoader from "react-spinners/BounceLoader";

import axios from "axios";

class Legacy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 500);
  }

  // goToGoogle = e => {
  //   e.preventDefault();
  //   console.dir(history);
  // };

  render() {
    const { match } = this.props;

    if (this.state.loading) {
      return (
        <div className="BounceLoader">
          <div className="BounceLoader-container">
            <BounceLoader
              sizeUnit={"px"}
              size={50}
              color={"#333"}
              loading={this.state.loading}
              margin="2px"
            />
          </div>
        </div>
      );
    }

    return (
      <div id="Legacy" ref={this.reference}>
        <NavBar match={match} />
        <Topsection
          match={match}
          Contractors={ContractorsObj}
          Sentinel={SentinelObj}
          Legacy={LegacyObj}
        />
        <Middlesection match={match} />
        <Bottomsection
          match={match}
          his={history}
          goToGoogle={this.goToGoogle}
          fetchLegacyProject={this.fetchLegacyProject}
        />
        <NavBar match={match} />
      </div>
    );
  }
}

export default Legacy;
