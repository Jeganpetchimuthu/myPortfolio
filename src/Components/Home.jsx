import React, { useEffect, useState } from "react";
import "./Home.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function Home() {
  const data = [
    "FrontEnd Developer",
    "BackEnd Developer",
    "FullStack Developer",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const word = data[currentWordIndex];
      if (currentCharIndex < word.length) {
        setTypedText((prevTypedText) => prevTypedText + word[currentCharIndex]);
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId); // Clear interval when word is typed
        setTimeout(() => {
          // Pause before resetting for better visibility
          setCurrentCharIndex(0);
          setTypedText("");
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % data.length); // Loop back to the beginning if reached the end
        }, 1000); // Adjust the delay before resetting (milliseconds)
      }
    }, 100);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [currentWordIndex, currentCharIndex, data]);

  const handleLinkClick = () => {
    window.open(
      "https://drive.google.com/file/d/1AdHAQN-a00-ZeEKQXjPvCixotd2_yRvf/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="aboutMe">
      <h2 className="about-container">Hey! There</h2>
      <h2 className="aboutmyself">This is Jegan P</h2>
      <h2 className="wrap">I am {typedText}</h2>
      <img
        className="aboutImage"
        src="https://t4.ftcdn.net/jpg/03/13/54/57/360_F_313545701_4pSbBZzBgdXqB0H4QrujyymPeUkLEa29.jpg"
      ></img>
      <h4 className="about-me">
        I'm a Full Stack Web Developer(MERN), adept in building highly
        responsive, and quality web applications. My skill set and dedication to
        continuous improvement make me a valuable asset in creating innovative
        and efficient web applications.
      </h4>
      <h3 className="resume" onClick={handleLinkClick}>
        My Resume
        <span>
          <ArrowCircleRightIcon className="arrowIcon" />
        </span>
      </h3>
    </div>
  );
}

export default Home;
