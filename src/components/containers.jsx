import React, { Component } from "react";
import Container from "./container";

class Containers extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Container />
          </div>
        </div>
      </div>
    );
  }
}

export default Containers;
