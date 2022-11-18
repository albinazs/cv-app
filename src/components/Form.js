import React, { Component } from "react";
import "./../styles/Form.scss";
import Personal from "./form/Personal";
import Experience from "./form/Experience";
import Education from "./form/Education";

export class Form extends Component {
  render() {
    const {
      onChangePersonal,
      onChangeExperience,
      onChangeEducation,
      onAddExperience,
      onDeleteExperience,
      userInput,
    } = this.props;
    return (
      <section className="form">
        <Personal
          onChangePersonal={onChangePersonal}
          personalInfo={userInput.personalInfo}
        />
        <Experience
          onChangeExperience={onChangeExperience}
          onAddExperience={onAddExperience}
          onDeleteExperience={onDeleteExperience}
          userInput={userInput}
        />
        <Education
          onChangeEducation={onChangeEducation}
          education={userInput.education}
        />
      </section>
    );
  }
}

export default Form;
