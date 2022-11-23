import React, { useState } from "react";
import uniqid from "uniqid";
import Form from "./Form";
import Preview from "./Preview";
import emptyCV from "./utils/emptyCV.js";
import exampleCV from "./utils/exampleCV.js";
import "./../styles/Main.scss";

const Main = () => {
  const [userInput, setUserInput] = useState({
    ...emptyCV,
  });

  const handleChangePersonal = (e) => {
    const name = e.target.name;
    setUserInput((prevState) => ({
      ...prevState,
      personalInfo: { ...prevState.personalInfo, [name]: e.target.value },
    }));
  };

  const handleChangeExperience = (e, id) => {
    const name = e.target.name;
    setUserInput((prevState) => {
      const isIDinArray = prevState.experiences.some(
        (experienceItem) => experienceItem.id === id
      );
      if (!isIDinArray) {
        return {
          ...prevState,
          experience: {
            ...prevState.experience,
            [name]: e.target.value,
          },
        };
      }
      return {
        ...prevState,
        experiences: prevState.experiences.map((experienceItem) => {
          if (experienceItem.id === id) {
            return {
              ...experienceItem,
              [name]: e.target.value,
            };
          }
          return experienceItem;
        }),
      };
    });
  };

  const handleChangeEducation = (e, id) => {
    const name = e.target.name;
    setUserInput((prevState) => {
      const isIDinArray = prevState.educations.some(
        (educationItem) => educationItem.id === id
      );
      if (!isIDinArray) {
        return {
          ...prevState,
          education: {
            ...prevState.education,
            [name]: e.target.value,
          },
        };
      }
      return {
        ...prevState,
        educations: prevState.educations.map((educationItem) => {
          if (educationItem.id === id) {
            return {
              ...educationItem,
              [name]: e.target.value,
            };
          }
          return educationItem;
        }),
      };
    });
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
      ...prevState,
      experiences: prevState.experiences.filter(
        (experience) => experience.id !== id
      ),
    }));
  };

  const handleAddEducation = () => {
    setUserInput((prevState) => ({
      ...prevState,
      educations: [...prevState.educations, prevState.education],
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

  const handleDeleteEducation = (id) => {
    setUserInput((prevState) => ({
      ...prevState,
      educations: prevState.educations.filter(
        (education) => education.id !== id
      ),
    }));
  };

  const handleLoadExample = () => {
    setUserInput((prevState) => ({
      ...prevState,
      ...exampleCV,
    }));
  };

  const handleReset = () => {
    setUserInput(emptyCV);
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
        onDeleteEducation={handleDeleteEducation}
        onLoadExample={handleLoadExample}
        onReset={handleReset}
        userInput={userInput}
      />
      <Preview userInput={userInput} />
    </main>
  );
};

export default Main;
