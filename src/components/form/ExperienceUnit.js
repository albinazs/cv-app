import Input from "../utils/Input";
import Textarea from "../utils/Textarea";
import Button from "../utils/Button";

const ExperienceUnit = (props) => {
  const {
    onChangeExperience,
    onAddExperience,
    onDeleteExperience,
    experience,
  } = props;

  const AddExperience = () => {
    if (
      experience.company === "" &&
      experience.position === "" &&
      experience.from === "" &&
      experience.to === "" &&
      experience.description === ""
    ) {
      alert("Please add experience");
      return;
    }
    onAddExperience();
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Company"
        name="company"
        onChange={(e) => onChangeExperience(e, experience.id)}
        value={experience.company}
      />
      <Input
        type="text"
        placeholder="Position"
        name="position"
        onChange={(e) => onChangeExperience(e, experience.id)}
        value={experience.position}
      ></Input>
      <Input
        type="text"
        placeholder="From"
        name="from"
        onChange={(e) => onChangeExperience(e, experience.id)}
        value={experience.from}
      ></Input>
      <Input
        type="text"
        placeholder="To"
        name="to"
        onChange={(e) => onChangeExperience(e, experience.id)}
        value={experience.to}
      ></Input>
      <Textarea
        placeholder="Description"
        name="description"
        onChange={(e) => onChangeExperience(e, experience.id)}
        value={experience.description}
      />
      {onAddExperience && <Button text="Add" onClick={AddExperience} />}
      {onDeleteExperience && (
        <Button
          text="Delete"
          className="delete"
          onClick={() => onDeleteExperience(experience.id)}
        />
      )}
    </>
  );
};

export default ExperienceUnit;
