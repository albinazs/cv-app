const Experience = ({ experience }) => {
  return (
    <section className="experience">
      <div className="title">Experience</div>
      <div className="wrapper">
        <div className="period">
          {experience.from} - {experience.to}
        </div>
        <div className="description">
          <div className="company">{experience.company}</div>
          <div className="position">{experience.position}</div>
          <div>{experience.description}</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
