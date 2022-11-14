import React, { Component } from "react";
import "./../styles/form.scss";
import Personal from "./form/Personal";

export class Form extends Component {
  render() {
    const { onChange, userInput } = this.props;
    return (
      <div>
        <Personal onChange={onChange} personalInfo={userInput.personalInfo} />
      </div>
    );
  }
}

export default Form;
