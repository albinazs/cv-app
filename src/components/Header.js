import { FaFileAlt } from "react-icons/fa";
import "./../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <FaFileAlt className="icon" />
      <h1>CV APP</h1>
    </header>
  );
};

export default Header;
