import React, { Component } from "react";
import "./../styles/Form.scss";
import Personal from "./form/Personal";
import Experience from "./form/Experience";
import Education from "./form/Education";

export class Form extends Component {
  render() {
    const { onChange, userInput } = this.props;
    return (
      <section className="form">
        <Personal onChange={onChange} personalInfo={userInput.personalInfo} />
        <Experience onChange={onChange} experience={userInput.experience} />
        <Education onChange={onChange} education={userInput.education} />
      </section>
    );
  }
}

export default Form;
