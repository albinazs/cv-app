import React, { Component } from "react";

export class Personal extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <div>
        <div>view div {personalInfo.firstName}</div>
        <div>view div {personalInfo.lastName}</div>
        <div>view div {personalInfo.position}</div>
        <div>view div {personalInfo.phone}</div>
        <div>view div {personalInfo.email}</div>
        <div>view div {personalInfo.address}</div>
      </div>
    );
  }
}

export default Personal;
