import React, { Component } from "react";

export class Input extends Component {
  render() {
    const { type, placeholder, name, onChange, inputValue } = this.props;
    return (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={inputValue}
      />
    );
  }
}

export default Input;
