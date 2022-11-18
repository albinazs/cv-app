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
        firstName: "",
        lastName: "",
        position: "",
        phone: "",
        email: "",
        address: "",
        summary: "",
      },
      experience: {
        id: uniqid(),
        company: "",
        position: "",
        from: "",
        to: "",
        description: "",
      },
      experiences: [],
      education: {
        id: uniqid(),
        university: "",
        program: "",
        degree: "",
        from: "",
        to: "",
      },
    };

    this.handleChangePersonal = this.handleChangePersonal.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
  }

  handleChangePersonal(e) {
    const name = e.target.name;
    this.setState({
      personalInfo: { ...this.state.personalInfo, [name]: e.target.value },
    });
  }

  handleChangeExperience(e) {
    const name = e.target.name;
    this.setState({
      experience: { ...this.state.experience, [name]: e.target.value },
    });
  }

  handleChangeEducation(e) {
    const name = e.target.name;
    this.setState({
      education: { ...this.state.education, [name]: e.target.value },
    });
  }

  handleAddExperience() {
    console.log("add");
    /*     this.setState({ experiences: [10] }); */

    this.setState((prevState) => {
      const newExp = [prevState.experience, ...prevState.experiences];

      return {
        experiences: newExp,
        experience: {
          id: uniqid(),
          company: "",
          position: "",
          from: "",
          to: "",
          description: "",
        },
      };
    });
  }

  handleDeleteExperience(id) {
    console.log("delete");
    this.setState((prevState) => ({
      experiences: prevState.experiences.filter(
        (experience) => experience.id !== id
      ),
    }));
  }

  render() {
    console.log({ state: this.state });
    return (
      <main>
        <Form
          onChangePersonal={this.handleChangePersonal}
          onChangeExperience={this.handleChangeExperience}
          onChangeEducation={this.handleChangeEducation}
          onAddExperience={this.handleAddExperience}
          onDeleteExperience={this.handleDeleteExperience}
          userInput={this.state}
        />
        <Preview userInput={this.state} />
      </main>
    );
  }
}

export default Main;
