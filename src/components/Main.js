import React, { useState } from "react";
import uniqid from "uniqid";
import Form from "./Form";
import Preview from "./Preview";
import "./../styles/Main.scss";

const Main = () => {
  const [userInput, setUserInput] = useState({
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
    educations: [],
  });

  const handleChangePersonal = (e) => {
    const name = e.target.name;
    setUserInput((prevState) => ({
      ...prevState,
      personalInfo: { ...prevState.personalInfo, [name]: e.target.value },
    }));
    console.log(userInput);
  };

  const handleChangeExperience = (e) => {
    const name = e.target.name;
    setUserInput((prevState) => ({
      ...prevState,
      experience: { ...prevState.experience, [name]: e.target.value },
    }));
  };

  const handleChangeEducation = (e) => {
    const name = e.target.name;
    setUserInput((prevState) => ({
      ...prevState,
      education: { ...prevState.education, [name]: e.target.value },
    }));
  };

  const handleAddExperience = () => {
    setUserInput((prevState) => ({
      ...prevState,
      experiences: [...prevState.experiences, prevState.experience],
      experience: {
        id: uniqid(),
        company: "",
        position: "",
        from: "",
        to: "",
        description: "",
      },
    }));
  };

  const handleDeleteExperience = (id) => {
    setUserInput((prevState) => ({
      experiences: prevState.experiences.filter(
        (experience) => experience.id !== id
      ),
    }));
  };

  const handleAddEducation = () => {
    setUserInput((prevState) => ({
      ...prevState,
      educationss: [...prevState.educations, prevState.education],
      education: {
        id: uniqid(),
        university: "",
        program: "",
        degree: "",
        from: "",
        to: "",
      },
    }));
  };

  return (
    <main>
      <Form
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onChangeEducation={handleChangeEducation}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onAddEducation={handleAddEducation}
        userInput={userInput}
      />
      <Preview userInput={userInput} />
    </main>
  );
};

export default Main;
