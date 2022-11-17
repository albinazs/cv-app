import React, { Component } from "react";
import uniqid from "uniqid";
import "./../styles/Main.scss";
import Form from "./Form";
import View from "./View";

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
      experience: {
        company: "",
        position: "",
        from: "",
        to: "",
      },
      education: {
        university: "",
        program: "",
        degree: "",
        from: "",
        to: "",
      },
    };

    this.handleChangePersonal = this.handleChangePersonal.bind(this);
  }

  handleChangePersonal(e) {
    const name = e.target.name;
    this.setState({
      personalInfo: { ...this.state.personalInfo, [name]: e.target.value },
    });
  }

  render() {
    return (
      <main>
        <Form onChange={this.handleChangePersonal} userInput={this.state} />
        <View userInput={this.state} />
      </main>
    );
  }
}

export default Main;
