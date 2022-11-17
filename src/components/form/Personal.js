import React, { Component } from "react";
import Section from "../utils/Section";
import Input from "../utils/Input";

export class Personal extends Component {
  render() {
    const { onChange, personalInfo } = this.props;
    return (
      <div>
        <Section title="Personal Information">
          <Input
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={onChange}
            value={personalInfo.firstName}
          ></Input>
          <Input
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={onChange}
            value={personalInfo.lastName}
          ></Input>
          <Input
            type="text"
            placeholder="Position"
            name="position"
            onChange={onChange}
            value={personalInfo.position}
          ></Input>
          <Input
            type="tel"
            placeholder="Mobile phone"
            name="phone"
            onChange={onChange}
            value={personalInfo.phone}
          ></Input>
          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={onChange}
            value={personalInfo.email}
          ></Input>
          <Input
            type="test"
            placeholder="Address"
            name="address"
            onChange={onChange}
            value={personalInfo.address}
          ></Input>
        </Section>
      </div>
    );
  }
}

export default Personal;
