import React, { Component } from "react";
import "./../styles/Header.scss";
import { FaFileAlt } from "react-icons/fa";

export class Header extends Component {
  render() {
    return (
      <header>
        <FaFileAlt className="icon" />
        <h1>CV APP</h1>
      </header>
    );
  }
}

export default Header;
