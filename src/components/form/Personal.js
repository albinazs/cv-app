import Section from "../utils/Section";
import Input from "../utils/Input";
import Textarea from "../utils/Textarea";

const Personal = ({ onChangePersonal, personalInfo }) => {
  return (
    <div>
      <Section title="Personal Information">
        <Input
          type="text"
          placeholder="First name"
          name="firstName"
          onChange={onChangePersonal}
          value={personalInfo.firstName}
        ></Input>
        <Input
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={onChangePersonal}
          value={personalInfo.lastName}
        ></Input>
        <Input
          type="text"
          placeholder="Position"
          name="position"
          onChange={onChangePersonal}
          value={personalInfo.position}
        ></Input>
        <Input
          type="tel"
          placeholder="Mobile phone"
          name="phone"
          onChange={onChangePersonal}
          value={personalInfo.phone}
        ></Input>
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={onChangePersonal}
          value={personalInfo.email}
        ></Input>
        <Input
          type="test"
          placeholder="Address"
          name="address"
          onChange={onChangePersonal}
          value={personalInfo.address}
        ></Input>
        <Textarea
          placeholder="Summary"
          name="summary"
          onChange={onChangePersonal}
          value={personalInfo.summary}
        />
      </Section>
    </div>
  );
};

export default Personal;
