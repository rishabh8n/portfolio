import React, { useEffect, useState } from "react";
import AnimateLetters from "../AnimateLetters";
import "./index.scss";
import Poster from "./Poster";

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["R", "i", "s", "h", "a", "b", "h"];
  const surNameArray = ["R", "a", "j"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text">
        <h2>
          Hello{" "}
          <AnimateLetters
            letterClass={letterClass}
            strArr={["W", "o", "r", "l", "d"]}
            idx={1}
          />
        </h2>
        <h1>
          I'm{" "}
          <span>
            <AnimateLetters
              letterClass={letterClass}
              strArr={nameArray}
              idx={6}
            />{" "}
            <AnimateLetters
              letterClass={letterClass}
              strArr={surNameArray}
              idx={13}
            />{" "}
          </span>
        </h1>
        <p>
          A{" "}
          <span>
            {" "}
            <AnimateLetters
              letterClass={letterClass}
              strArr={["F", "r", "o", "n", "t", "e", "n", "d"]}
              idx={16}
            />{" "}
            <AnimateLetters
              letterClass={letterClass}
              strArr={["D", "e", "v", "e", "l", "o", "p", "e", "r"]}
              idx={16}
            />
          </span>{" "}
          based in{" "}
          <span>
            <AnimateLetters
              letterClass={letterClass}
              strArr={["D", "e", "l", "h", "i", ",", "I", "n", "d", "i", "a"]}
              idx={16}
            />
          </span>{" "}
        </p>
      </div>
      <Poster />
    </div>
  );
}

export default Home;
