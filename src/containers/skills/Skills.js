import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="skills-container" id="skills">
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-header-div">
          <span className="skills-label" style={{ color: theme.accentColor }}>
            {"< skills />"}
          </span>
          <h1 className="skills-header" style={{ color: theme.text }}>
            What I Do
          </h1>
        </div>
      </Fade>
      <SkillSection theme={theme} />
    </div>
  );
}
