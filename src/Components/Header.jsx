import React from "react";
import "./Header.css";
//import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
function Header() {
  const handleGitLinkClick = () => {
    window.open("https://github.com/Jeganpetchimuthu", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open(" https://www.linkedin.com/in/jegan-p-4094ab293", "_blank");
  };

  return (
    <div className="Header-components">
      <Link to="/">
        <h3 className="Home">Home</h3>
      </Link>
      <Link to="/about">
        <h3 className="About">About</h3>
      </Link>
      <Link to="/skills">
        <h3 className="Skills">Skills</h3>
      </Link>
      <Link to="/projects">
        <h3 className="Project">Projects</h3>
      </Link>

      <img
        className="headerimg"
        onClick={handleGitLinkClick}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
        alt="headerimg"
      ></img>
      {/* <LinkedInIcon className="linkedinlogo" onClick={handleLinkedInClick} /> */}
      <img
        className="linkedinlogo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLKWzUwfVh1T6cGhVmdzwCphw3UsQxv_KTCIqZq8TDA&s"
        onClick={handleLinkedInClick}
      />
      <Link to="/contacts">
        <h3 className="contacts">Contact</h3>
      </Link>
    </div>
  );
}

export default Header;
