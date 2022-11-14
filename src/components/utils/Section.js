import React, { Component } from "react";
import Input from "./Input";

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        <div>{children}</div>
      </section>
    );
  }
}

export default Section;
