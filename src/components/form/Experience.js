import React, { Component } from "react";
import Section from "../utils/Section";
import ExperienceUnit from "./ExperienceUnit";

export class Experience extends Component {
  render() {
    const {
      onChangeExperience,
      onAddExperience,
      onDeleteExperience,
      userInput,
    } = this.props;

    return (
      <Section title="Experience">
        {userInput.experiences.map((experience) => (
          <ExperienceUnit
            onChangeExperience={onChangeExperience}
            onDeleteExperience={onDeleteExperience}
            experience={experience}
            key={experience.id}
          />
        ))}
        <ExperienceUnit
          onChangeExperience={onChangeExperience}
          onAddExperience={onAddExperience}
          experience={userInput.experience}
        />
      </Section>
    );
  }
}

export default Experience;
