import React from "react";
import AnimateLetters from "../AnimateLetters";
import ProjectCard from "../ProjectCard";
import rps from "../../assets/rps.PNG";
import userDash from "../../assets/user-dash.PNG";
import workboard from "../../assets/workboard.PNG";
import netflix from "../../assets/netflix.PNG";
import portfolio from "../../assets/portfolio.PNG";
import "./index.scss";

function Projects() {
  return <div className="container projects-page">
    <h1>
      <AnimateLetters
        strArr={["M", "y", " ", "P", "r", "o", "j", "e", "c", "t", "s"]}
        idx={15}
        letterClass={"text-animate-hover"}
      />
    </h1>
    <div className="project-container">
      <ProjectCard
        title="Portfolio"
        img={portfolio}
        code="https://github.com/rishabh8n/portfolio"
        demo="https://rishabh-chi.vercel.app"
      />
      <ProjectCard
        title="Netflix(Clone)"
        img={netflix}
        code="https://github.com/rishabh8n/netflix"
        demo="https://netflix-clone-nine-sepia.vercel.app"
      />
      <ProjectCard
        title="Workboard(ToDo App)"
        img={workboard}
        code="https://github.com/rishabh8n/workboard"
        demo="https://workboard.vercel.app"
      />
      <ProjectCard
        title="User Dashboard"
        img={userDash}
        code="https://github.com/rishabh8n/user-dashboard"
        demo="https://user-dashboard-liard-six.vercel.app"
      />
      <ProjectCard
        title="Rock Paper Scissor"
        img={rps}
        code="https://github.com/rishabh8n/rock-paper-scissor"
        demo="https://rock-paper-scissor-pearl.vercel.app"
      />
    </div>
  </div>;
}

export default Projects;
