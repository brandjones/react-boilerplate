/**
 * These are global imports.
 */

import React from "react";

/**
 * These are "modules" needed to "piece" the Home view together.
 *
 */

import Badge from "../modules/badge";
import Navbar from "../modules/navbar";
import Content from "../modules/content";
import BounceLoader from "react-spinners/BounceLoader";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }
  render() {
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
      <div id="Home">
        <Badge />
        <Navbar match={this.props.match} />
        <Content />
      </div>
    );
  }
}

export default Home;
