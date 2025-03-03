import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [mouseState, setMouseState] = useState("out");
  const ref = useRef<HTMLDivElement>(null);
  const refOuterCircle = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX: x, clientY: y } = e;
      setCursorPos({ x, y });
      if (ref.current) {
        ref.current.style.left = `${x}px`;
        ref.current.style.top = `${y}px`;
      }
      if (refOuterCircle.current) {
        refOuterCircle.current?.animate(
          {
            left: `${x}px`,
            top: `${y}px`,
          },
          {
            duration: 200,
            fill: "forwards",
            easing: "ease-in-out",
          }
        );
      }
    });
    window.addEventListener("mousedown", () => {
      setMouseState("clicked");
    });
    window.addEventListener("mouseup", () => {
      setMouseState("default");
    });
    document.addEventListener("mouseover", (e) => {
      if (
        ["svg", "path", "BUTTON", "A"].includes(
          (e.target as HTMLElement).nodeName
        )
      ) {
        setMouseState("hover");
      } else {
        setMouseState("default");
      }
    });
    document.addEventListener("mouseout", () => {
      setMouseState("default");
    });
    document.addEventListener("mouseleave", () => {
      setMouseState("out");
    });
    document.addEventListener("mouseenter", () => {
      setMouseState("default");
    });

    return () => {
      document.removeEventListener("mousemove", () => {});
      window.removeEventListener("mousedown", () => {});
      window.removeEventListener("mouseup", () => {});
      window.removeEventListener("mouseleave", () => {});
      window.removeEventListener("mouseenter", () => {});
      window.removeEventListener("mouseover", () => {});
    };
  }, []);
  return (
    <>
      <div
        className={`z-999 pointer-events-none fixed w-8 h-8 border-2 border-[#edb672] translate-x-[-50%] translate-y-[-50%] rounded-full transition-transform duration-200 ${
          mouseState === "clicked" ? "scale-180" : ""
        } ${mouseState === "hover" ? "border-2 border-[#edb672] scale-150" : ""}
        ${mouseState === "out" ? "scale-0 opacity-0" : ""}
        ${mouseState === "hover" ? "scale-120" : ""}
        `}
        ref={refOuterCircle}
      ></div>
      <div
        className={`z-999 pointer-events-none fixed w-4 h-4 bg-[#edb672] translate-x-[-50%] translate-y-[-50%] rounded-full transition-transform
             duration-200 ${mouseState === "clicked" ? "scale-60" : ""}
         ${mouseState === "out" ? "scale-0 opacity-0" : ""}
         ${mouseState === "hover" ? "scale-80" : ""}
        `}
        ref={ref}
      ></div>
    </>
  );
};

export default CustomCursor;
