import React, { Component } from "react";
import Personal from "./view/Personal";

export class View extends Component {
  render() {
    const { userInput } = this.props;
    return (
      <div>
        <Personal personalInfo={userInput.personalInfo} />
      </div>
    );
  }
}

export default View;
