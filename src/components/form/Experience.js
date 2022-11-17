import React, { Component } from "react";
import Section from "../utils/Section";
import Input from "../utils/Input";
import Button from "../utils/Button";

export class Experience extends Component {
  render() {
    const { onChange, experience } = this.props;
    return (
      <div>
        <Section title="Experience">
          <Input
            type="text"
            placeholder="Company"
            name="company"
            onChange={onChange}
            value={experience.company}
          ></Input>
          <Input
            type="text"
            placeholder="Position"
            name="position"
            onChange={onChange}
            value={experience.position}
          ></Input>
          <Input
            type="text"
            placeholder="From"
            name="from"
            onChange={onChange}
            value={experience.from}
          ></Input>
          <Input
            type="text"
            placeholder="To"
            name="to"
            onChange={onChange}
            value={experience.to}
          ></Input>
          <Button text="Add" />
          <Button text="Delete" className="delete" />
        </Section>
      </div>
    );
  }
}

export default Experience;
