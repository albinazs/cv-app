import React, { Component } from "react";

export class Education extends Component {
  render() {
    const { education } = this.props;
    return (
      <section className="education">
        <div className="title">Education</div>
        <div class="wrapper">
          <div class="period">
            <div>
              {education.from} - {education.to}
            </div>
          </div>
          <div class="description">
            <div className="university">{education.university}</div>
            <div>{education.program}, {education.degree}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
