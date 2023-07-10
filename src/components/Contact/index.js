import Loader from "react-loaders";
import { useState, useEffect } from "react";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambtitious
            or large projects. However, if you have other request or questions,
            don't hesitate to contact me using the below form either.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
