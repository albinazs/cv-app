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
      <div className="wrapper" key={userInput.experience.id}>
        <div className="period">
          {userInput.experience.from} - {userInput.experience.to}
        </div>
        <div className="description">
          <div className="company">{userInput.experience.company}</div>
          <div className="position">{userInput.experience.position}</div>
          <div>{userInput.experience.description}</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
