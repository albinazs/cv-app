const Education = ({ userInput }) => {
  return (
    <section className="education">
      <div className="title">Education</div>
      {userInput.educations.map((education) => (
        <div className="wrapper" key={education.id}>
          <div className="period">
            <div>
              {education.from} - {education.to}
            </div>
          </div>
          <div className="description">
            <div className="university">{education.university}</div>
            <div>
              {education.program}, {education.degree}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
