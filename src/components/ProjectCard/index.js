import React from 'react';
import redirect from "../../assets/redirect-1.png";
import "./index.scss";

function ProjectCard(props) {
    return (
        <div className='card'>
            <img src={props.img} alt="project" />
            <h2 className='title'>{props.title}</h2>
            <div className='buttons'>
                <button className='code' onClick={() => { window.location.href = props.code }}>{"</> "}<span>Code</span></button>
                <button className='demo' onClick={() => { window.location.href = props.demo }}>
                    <img src={redirect} alt="demo link" />
                    <span>Demo</span></button>
            </div>
        </div>
    )
}

export default ProjectCard;