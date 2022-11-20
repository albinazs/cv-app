import Input from "../utils/Input";
import Button from "../utils/Button";

const EducationUnit = (props) => {
  const { onChangeEducation, onAddEducation, onDeleteEducation, education } =
    props;

  const AddEducation = () => {
    if (
      education.university === "" &&
      education.program === "" &&
      education.degree === "" &&
      education.from === "" &&
      education.to === ""
    ) {
      alert("Please add education");
      return;
    }
    onAddEducation();
  };

  return (
    <>
      <Input
        type="text"
        placeholder="University"
        name="university"
        onChange={(e) => onChangeEducation(e, education.id)}
        value={education.university}
      />
      <Input
        type="text"
        placeholder="Program"
        name="program"
        onChange={(e) => onChangeEducation(e, education.id)}
        value={education.program}
      />
      <Input
        type="text"
        placeholder="Degree"
        name="degree"
        onChange={(e) => onChangeEducation(e, education.id)}
        value={education.degree}
      />
      <Input
        type="text"
        placeholder="From"
        name="from"
        onChange={(e) => onChangeEducation(e, education.id)}
        value={education.from}
      />
      <Input
        type="text"
        placeholder="To"
        name="to"
        onChange={(e) => onChangeEducation(e, education.id)}
        value={education.to}
      />
      {onAddEducation && <Button text="Add" onClick={AddEducation} />}
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
