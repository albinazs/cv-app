const Header = ({ personalInfo }) => {
  return (
    <div className="header">
      <div className="fullname">
        {personalInfo.firstName} {personalInfo.lastName}
      </div>
      <div>{personalInfo.position}</div>
    </div>
  );
};

export default Header;
