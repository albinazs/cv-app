import uniqid from "uniqid";

const example = {
  personalInfo: {
    firstName: "Sophia",
    lastName: "Smith",
    position: "Senior Web Developer",
    phone: "123456789",
    email: "sophia@gmail.com",
    address: "California",
    summary:
      "Experienced web developer adept in all stages of advanced web development. Knowledgeable in user interface, testing, and debugging processes. Bringing forth expertise in design, installation, testing and maintenance of web systems. Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, including Java, ASP.NET, C#, IIS, Tomcat, and Microsoft SQL Server. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.",
  },
  experiences: [
    {
      id: uniqid(),
      company: "Allen Hamilton",
      position: "Senior Web Developer",
      from: "2019",
      to: "Present",
      description:
        "Planned, developed, tested, deployed, and maintained web applications. Provided effective troubleshooting and remediation for web applications.",
    },
    {
      id: uniqid(),
      company: "Millbank",
      position: "Middle Web Developer",
      from: "2016",
      to: "2019",
      description:
        "Managed front-end and back-end development in the company's Portfolio Analyst, Employee Track, and Account Management systems. Successfully identified, diagnosed, and fixed website problems, including broken links, typographical errors, and formatting issues. ",
    },
    {
      id: uniqid(),
      company: "Morrison",
      position: "Junior Web Developer",
      from: "2012",
      to: "2015",
      description:
        "Helped to achieve a consistent look and visual theme across the website by promoting uniform fonts, formatting, images, and layout. Worked to assess competing websites in regards to content, look, and feel. ",
    },
  ],
  educations: [
    {
      id: uniqid(),
      university: "University of California",
      program: "Computer Science",
      degree: "Master",
      from: "2012",
      to: "2010",
    },
    {
      id: uniqid(),
      university: "University of California",
      program: "Computer Science",
      degree: "Bachelor",
      from: "2010",
      to: "2006",
    },
  ],
};

export default example;
