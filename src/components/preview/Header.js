import React, { Component } from "react";

export class Header extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <div className="header">
        <div className="fullname">
          {personalInfo.firstName} {personalInfo.lastName}
        </div>
        <div>{personalInfo.position}</div>
      </div>
    );
  }
}

export default Header;
