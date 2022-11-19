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

  return (
    <div>
      <Input
        type="text"
        placeholder="Company"
        name="company"
        onChange={onChangeExperience}
        value={experience.company}
      />
      <Input
        type="text"
        placeholder="Position"
        name="position"
        onChange={onChangeExperience}
        value={experience.position}
      ></Input>
      <Input
        type="text"
        placeholder="From"
        name="from"
        onChange={onChangeExperience}
        value={experience.from}
      ></Input>
      <Input
        type="text"
        placeholder="To"
        name="to"
        onChange={onChangeExperience}
        value={experience.to}
      ></Input>
      <Textarea
        placeholder="Description"
        name="description"
        onChange={onChangeExperience}
        value={experience.description}
      />
      {onAddExperience && <Button text="Add" onClick={onAddExperience} />}
      {onDeleteExperience && (
        <Button
          text="Delete"
          className="delete"
          onClick={() => onDeleteExperience(experience.id)}
        />
      )}
    </div>
  );
};

export default ExperienceUnit;
