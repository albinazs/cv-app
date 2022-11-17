import React, { Component } from "react";

export class Textarea extends Component {
  render() {
    const { placeholder, name, onChange, inputValue } = this.props;
    return (
      <textarea
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={inputValue}
        maxlength="350"
      />
    );
  }
}

export default Textarea;
