import React, { Component } from "react";

export class Content extends Component {
  render() {
    const { personalInfo, children } = this.props;
    return (
      <div className="content">
        <p className="summary">{personalInfo.summary}</p>
        <div>{children}</div>
      </div>
    );
  }
}

export default Content;
