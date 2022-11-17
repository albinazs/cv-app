import React, { Component } from "react";

export class Contact extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <section className="contact">
        <div className="title">Contact</div>
        <div className="subtitle">Phone</div>
        <div>{personalInfo.phone}</div>
        <div className="subtitle">E-mail</div>
        <div>{personalInfo.email}</div>
        <div className="subtitle">Address</div>
        <div>{personalInfo.address}</div>
      </section>
    );
  }
}

export default Contact;
