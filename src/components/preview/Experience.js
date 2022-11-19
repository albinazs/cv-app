const Experience = ({ userInput }) => {
  return (
    <section className="experience">
      <div className="title">Experience</div>
      {userInput.experiences.map((experience) => (
        <div className="wrapper" key={experience.id}>
          <div className="period">
            {experience.from} - {experience.to}
          </div>
          <div className="description">
            <div className="company">{experience.company}</div>
            <div className="position">{experience.position}</div>
            <div>{experience.description}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
