import React, { Component } from "react";

export class Experience extends Component {
  render() {
    const { experience } = this.props;
    return (
      <section className="experience">
        <div className="title">Experience</div>
        <div class="wrapper">
          <div className="period">
            {experience.from} - {experience.to}
          </div>
          <div className="description">
            <div className="company">{experience.company}</div>
            <div className="position">{experience.position}</div>
            <div>{experience.description}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
