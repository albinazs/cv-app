import Header from "./preview/Header";
import Content from "./preview/Content";
import Experience from "./preview/Experience";
import Education from "./preview/Education";
import Contact from "./preview/Contact";
import "./../styles/Preview.scss";

const Preview = ({ userInput }) => {
  return (
    <section className="preview">
      <Header personalInfo={userInput.personalInfo} />
      <div className="main">
        <Content personalInfo={userInput.personalInfo}>
          <Experience userInput={userInput} />
          <Education userInput={userInput} />
        </Content>
        <Contact personalInfo={userInput.personalInfo} />
      </div>
    </section>
  );
};

export default Preview;
