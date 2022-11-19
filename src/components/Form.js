import Personal from "./form/Personal";
import Experience from "./form/Experience";
import Education from "./form/Education";
import "./../styles/Form.scss";

const Form = (props) => {
  const {
    onChangePersonal,
    onChangeExperience,
    onChangeEducation,
    onAddExperience,
    onDeleteExperience,
    userInput,
  } = props;
  return (
    <section className="form">
      <Personal
        onChangePersonal={onChangePersonal}
        personalInfo={userInput.personalInfo}
      />
      <Experience
        onChangeExperience={onChangeExperience}
        onAddExperience={onAddExperience}
        onDeleteExperience={onDeleteExperience}
        userInput={userInput}
      />
      <Education
        onChangeEducation={onChangeEducation}
        education={userInput.education}
      />
    </section>
  );
};

export default Form;
