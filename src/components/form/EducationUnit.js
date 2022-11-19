import Input from "../utils/Input";
import Button from "../utils/Button";

const EducationUnit = (props) => {
  const { onChangeEducation, onAddEducation, onDeleteEducation, education } =
    props;

  return (
    <>
      <Input
        type="text"
        placeholder="University"
        name="university"
        onChange={onChangeEducation}
        value={education.university}
      />
      <Input
        type="text"
        placeholder="Program"
        name="program"
        onChange={onChangeEducation}
        value={education.program}
      />
      <Input
        type="text"
        placeholder="Degree"
        name="degree"
        onChange={onChangeEducation}
        value={education.degree}
      />
      <Input
        type="text"
        placeholder="From"
        name="from"
        onChange={onChangeEducation}
        value={education.from}
      />
      <Input
        type="text"
        placeholder="To"
        name="to"
        onChange={onChangeEducation}
        value={education.to}
      />
      {onAddEducation && <Button text="Add" onClick={onAddEducation} />}
      {onDeleteEducation && (
        <Button
          text="Delete"
          className="delete"
          onClick={() => onDeleteEducation(education.id)}
        />
      )}
    </>
  );
};

export default EducationUnit;
