const Content = ({ personalInfo, children }) => {
  return (
    <div className="content">
      <p className="summary">{personalInfo.summary}</p>
      <div>{children}</div>
    </div>
  );
};

export default Content;
