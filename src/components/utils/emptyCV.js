import uniqid from "uniqid";

const emptyCV = {
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
};

export default emptyCV;
