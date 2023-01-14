import React from "react";
import "./index.scss";

function AnimateLetters({ letterClass, strArr, idx }) {
  return (
    <span>
      {strArr.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
}

export default AnimateLetters;
