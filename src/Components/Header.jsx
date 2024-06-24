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
        <h2 className="Home">Home</h2>
      </Link>
      <Link to="/about">
        <h2 className="About">About</h2>
      </Link>
      <Link to="/skills">
        <h2 className="Skills">Skills</h2>
      </Link>
      <Link to="/projects">
        <h2 className="Project">Projects</h2>
      </Link>

      <img
        className="headgithubmg"
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
        <h2 className="contacts">Contact</h2>
      </Link>
    </div>
  );
}

export default Header;
