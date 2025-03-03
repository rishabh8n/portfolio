import { useEffect, useRef, useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import { motion } from "framer-motion";
// import ParticlesBackground from "./components/ParticlesBackground";
// import SmoothScroll from "./components/SmoothScroll";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  // A reference to hold the value of the content
  const contentRef = useRef<HTMLDivElement>(null);

  // Reset the `contentHeight` value when the children change, or when the window resizes
  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setScreenWidth(contentRef.current.clientWidth);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);
  console.log(screenWidth);
  return (
    <>
      <div className="App select-none cursor-none overflow-hidden h-screen bg-[#262424]">
        <CustomCursor />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {/* <SmoothScroll> */}
        <motion.div
          className={`h-screen bg-[#262424]  scroll-smooth
              ${menuOpen ? "overflow-y-hidden" : "overflow-y-scroll "}
            `}
          ref={contentRef}
          animate={{
            scaleY: menuOpen && screenWidth > 650 ? 0.85 : 1,
            scaleX: menuOpen && screenWidth > 650 ? 0.9 : 1,
            y: menuOpen ? (screenWidth > 650 ? "15vh" : "30vh") : "0",
          }}
          onClick={() => setMenuOpen(false)}
          // transition={{
          //   duration: 0.5,
          // }}
        >
          {/* <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "Close" : "Open"} Menu
          </button> */}
          {/* <ParticlesBackground /> */}
          <div className="bg-[#eee5da]">
            <div className="p-5 md:p-10 h-[98vh] flex flex-col relative justify-center bg-[#eee5da]">
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold">
                Rishabh Raj
              </h1>
              <p className="text-5xl/snug md:text-8xl lg:text-9xl mt-4 font-bold">
                Full Stack Developer
              </p>
              <p className="absolute bottom-4 right-4 text-xl">
                rishabh8n@gmail.com
              </p>
            </div>
          </div>
          <div className="h-screen flex flex-col items-end bg-[#fdfffe]">
            <p className="p-5 md:p-10 md:mr-20 lg:mr-32 font-semibold text-xl md:text-4xl md:w-8/12 lg:w-7/12 mt-20">
              A Full Stack Developer with expertise in building dynamic and
              scalable web applications. With a strong command of both front-end
              and back-end technologies, I specialize in creating seamless user
              experiences and efficient server-side logic. My stack includes
              MERN (MongoDB, Express.js, React, Node.js).
            </p>
            <p className="lg:w-4/12 md:w-5/12 mt-3 md:mr-16 lg:mr-24">
              I am Rishabh Raj, a passionate and aspiring Full Stack Developer
              currently pursuing my Master's in Computer Applications (MCA).
              With a strong foundation in both front-end and back-end
              technologies, I specialize in building dynamic, user-friendly, and
              scalable web applications.
              <br />I have worked on projects that showcase my ability to create
              seamless digital experiences. I am eager to collaborate, learn,
              and contribute to innovative solutions, aiming to work with teams
              that share my passion for technology and creativity.
            </p>
          </div>
        </motion.div>
        {/* </SmoothScroll> */}
      </div>
    </>
  );
}

export default App;
