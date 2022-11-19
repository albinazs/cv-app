import Section from "../utils/Section";
import EducationUnit from "./EducationUnit";

const Education = (props) => {
  const { onChangeEducation, onAddEducation, onDeleteEducation, userInput } =
    props;
    
  return (
    <Section title="Education">
      {userInput.educations.map((education) => (
        <EducationUnit
          onChangeEducation={onChangeEducation}
          onDeleteEducation={onDeleteEducation}
          education={education}
          key={education.id}
        />
      ))}
      <EducationUnit
        onChangeEducation={onChangeEducation}
        onAddEducation={onAddEducation}
        education={userInput.education}
      />
    </Section>
  );
};

export default Education;
