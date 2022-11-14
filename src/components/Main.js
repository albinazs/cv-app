import React, { Component } from "react";
import uniqid from "uniqid";
import "./../styles/main.scss";
import Form from "./Form";
import View from "./View";
import Input from "./utils/Input";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        firstName: "",
        lastName: "",
        position: "",
        phone: "",
        email: "",
        address: "",
      },
    };

    this.handleChangePersonal = this.handleChangePersonal.bind(this);
  }

  handleChangePersonal(e) {
    const name = e.target.name;
    this.setState({
      personalInfo: { [name]: e.target.value },
    });
  }

  render() {
    return (
      <div>
        <Form onChange={this.handleChangePersonal} userInput={this.state} />

        <View userInput={this.state} />
      </div>
    );
  }
}

export default Main;
