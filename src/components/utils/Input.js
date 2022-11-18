import React, { Component } from "react";

export class Input extends Component {
  render() {
    const { type, placeholder, name, onChange, value } = this.props;
    return (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={(e) => onChange(e)}
        value={value}
        maxLength="50"
      />
    );
  }
}

export default Input;
