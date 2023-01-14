import React, { useEffect, useRef } from "react";
import "./index.scss";
import { ReactComponent as LogoImage } from "../../../assets/Group 5.svg";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import gsap from "gsap-trial";

function Poster() {
  // const code = useRef();
  // const code2 = useRef();
  // const q = gsap.utils.selector(code);
  // const q2 = gsap.utils.selector(code2);

  useEffect(() => {
    // gsap.registerPlugin(DrawSVGPlugin);
    // gsap
    //   .timeline()
    //   .fromTo(
    //     q("path"),
    //     { drawSVG: "100%", scale: 0 },
    //     { duration: 20, scale: "100%" }
    //   );
    // .fromTo(
    //   q2("path"),
    //   { drawSVG: "100%", scale: 0 },
    //   { duration: 20, scale: "100%" }
    // );
  }, []);
  return (
    <div className="poster">
      <LogoImage />
    </div>
  );
}

export default Poster;
