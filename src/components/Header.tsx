import React from "react";
import { motion } from "framer-motion";

const Header = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    // <div>
    <div
      className={`flex items-start md:items-center bg-transparent justify-between p-6 px-5 md:px-10 fixed w-full top-0 z-10 text-[#262424] ${
        menuOpen ? "text-[#eee5da]" : ""
      } transition-colors duration-200`}
    >
      <h1 className="text-2xl h-12 md:h-24 flex items-center font-semibold">
        RR
      </h1>
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="basis-full"
        >
          <motion.ul className="flex justify-center items-center p-2 md:space-x-6 md:space-y-0 space-y-2.5 text-xl flex-col md:flex-row">
            <motion.li
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0, duration: 0.1 }}
            >
              Home
            </motion.li>
            <motion.li
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.1 }}
            >
              About
            </motion.li>
            <motion.li
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.1 }}
            >
              Projects
            </motion.li>
            <motion.li
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.1 }}
            >
              Contact
            </motion.li>
          </motion.ul>
        </motion.nav>
      )}
      <button
        className="cursor-none h-12 w-12 md:w-24 md:h-24 overflow-hidden flex items-center justify-center"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className={`ham hamRotate ham4 ${menuOpen ? "active" : ""}`}
          viewBox="0 0 100 100"
          width="80"
          // onClick="this.classList.toggle('active')"
        >
          <path
            className="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          {/* <path className="line middle" d="m 70,50 h -40" /> */}
          <path
            className="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </button>
    </div>
    // </div>
  );
};

export default Header;
