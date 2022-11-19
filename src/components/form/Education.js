import Section from "../utils/Section";
import Input from "../utils/Input";
import Button from "../utils/Button";

const Education = ({ onChangeEducation, onAddEducation, education }) => {
  return (
    <Section title="Education">
      <Input
        type="text"
        placeholder="University"
        name="university"
        onChange={onChangeEducation}
        value={education.university}
      ></Input>
      <Input
        type="text"
        placeholder="Program"
        name="program"
        onChange={onChangeEducation}
        value={education.program}
      ></Input>
      <Input
        type="text"
        placeholder="Degree"
        name="degree"
        onChange={onChangeEducation}
        value={education.degree}
      ></Input>
      <Input
        type="text"
        placeholder="From"
        name="from"
        onChange={onChangeEducation}
        value={education.from}
      ></Input>
      <Input
        type="text"
        placeholder="To"
        name="to"
        onChange={onChangeEducation}
        value={education.to}
      ></Input>
      <Button text="Add" onAddEducation={onAddEducation}/>
      <Button text="Delete" className="delete" />
    </Section>
  );
};

export default Education;
