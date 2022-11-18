import React, { Component } from "react";

export class Education extends Component {
  render() {
    const { education } = this.props;
    return (
      <section className="education">
        <div className="title">Education</div>
        <div className="wrapper">
          <div className="period">
            <div>
              {education.from} - {education.to}
            </div>
          </div>
          <div className="description">
            <div className="university">{education.university}</div>
            <div>
              {education.program}, {education.degree}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
