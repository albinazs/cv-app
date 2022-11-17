import React, { Component } from "react";
import uniqid from "uniqid";
import "./../styles/Main.scss";
import Form from "./Form";
import Preview from "./Preview";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        firstName: "John",
        lastName: "Kempinsky",
        position: "Senior web developer",
        phone: "+345628292048",
        email: "johnkempinsky@gmail.com",
        address: "London, United Kingdom",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.",
      },
      experience: {
        company: "ASBIS corporation",
        position: "Senior web developer",
        from: "2016",
        to: "2021",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum",
      },
      education: {
        university: "University of Technology, Oklahoma",
        program: "Computer Science",
        degree: "Master",
        from: "2011sdvsvsvssvsvsvsvs",
        to: "2016",
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
        <Preview userInput={this.state} />
      </main>
    );
  }
}

export default Main;
