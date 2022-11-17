import React, { Component } from "react";
import Section from "../utils/Section";
import Input from "../utils/Input";
import Button from "../utils/Button";

export class Education extends Component {
  render() {
    const { onChange, education } = this.props;
    return (
      <div>
        <Section title="Education">
          <Input
            type="text"
            placeholder="University"
            name="university"
            onChange={onChange}
            value={education.university}
          ></Input>
          <Input
            type="text"
            placeholder="Program"
            name="program"
            onChange={onChange}
            value={education.program}
          ></Input>
          <Input
            type="text"
            placeholder="Degree"
            name="degree"
            onChange={onChange}
            value={education.degree}
          ></Input>
          <Input
            type="text"
            placeholder="From"
            name="from"
            onChange={onChange}
            value={education.from}
          ></Input>
          <Input
            type="text"
            placeholder="To"
            name="to"
            onChange={onChange}
            value={education.to}
          ></Input>
          <Button text="Add" />
          <Button text="Delete" className="delete" />
        </Section>
      </div>
    );
  }
}

export default Education;
