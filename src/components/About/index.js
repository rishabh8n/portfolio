import React from "react";
import "./index.scss";
import AnimateLetters from "../AnimateLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJsSquare,
  faGitAlt,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

function index() {
  return (
    <div className="container about-page">
      <div className="text-container">
        <h1>
          <AnimateLetters
            strArr={["A", "b", "o", "u", "t", " ", "M", "e"]}
            idx={15}
            letterClass={"text-animate-hover"}
          />
        </h1>
        <p>
          I'm a Front-End Developer located in India looking for a role in
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          Well-organised person, problem solver, consistently trying to add new
          technologies to my skillset.
        </p>
        <p>
          Interested in the entire frontend spectrum and working on ambitious
          projects with positive people.
        </p>
      </div>
      <div className="skill-cube-container">
        <input
          type="radio"
          defaultChecked
          id="radio-front"
          name="select-face"
        />
        <input type="radio" id="radio-left" name="select-face" />
        <input type="radio" id="radio-right" name="select-face" />
        <input type="radio" id="radio-top" name="select-face" />
        <input type="radio" id="radio-bottom" name="select-face" />
        <input type="radio" id="radio-back" name="select-face" />

        <div className="separator"></div>

        <div className="space3d">
          <div className="_3dbox">
            <div className="_3dface _3dface--front">
              <FontAwesomeIcon icon={faReact} color="#61DBFB" />
            </div>
            <div className="_3dface _3dface--top">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="_3dface _3dface--bottom">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="_3dface _3dface--left">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="_3dface _3dface--right">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="_3dface _3dface--back">
              <FontAwesomeIcon icon={faSass} color="#DD0031" />
            </div>
          </div>
        </div>

        <div className="separator"></div>
      </div>
      {/* <div className="skills-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#61DBFB" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faSass} color="#DD0031" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default index;
