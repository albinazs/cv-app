import React, { Component } from "react";
import "./../styles/Preview.scss";
import Header from "./preview/Header";
import Content from "./preview/Content";
import Experience from "./preview/Experience";
import Education from "./preview/Education";
import Contact from "./preview/Contact";

export class Preview extends Component {
  render() {
    const { userInput } = this.props;
    return (
      <section className="preview">
        <Header personalInfo={userInput.personalInfo} />
        <div className="main">
          <Content personalInfo={userInput.personalInfo}>
            <Experience experience={userInput.experience} />
            <Education education={userInput.education} />
          </Content>
          <Contact personalInfo={userInput.personalInfo} />
        </div>
      </section>
    );
  }
}

export default Preview;
