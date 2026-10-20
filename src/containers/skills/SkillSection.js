import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="skills-grid">
        {skills.data.map((skill, index) => (
          <Fade
            bottom
            duration={1000}
            distance="20px"
            delay={index * 150}
            key={index}
          >
            <div
              className="skill-card"
              style={{
                backgroundColor: theme.cardBg || theme.highlight,
                borderColor: theme.cardBorder || "rgba(255,255,255,0.05)",
              }}
            >
              <h2 className="skill-card-title" style={{ color: theme.text }}>
                {skill.title}
              </h2>
              <SoftwareSkill logos={skill.softwareSkills} />
              <div className="skill-card-bullets">
                {skill.skills.slice(0, 3).map((s, i) => (
                  <p
                    className="skill-card-text"
                    style={{ color: theme.secondaryText }}
                    key={i}
                  >
                    {s}
                  </p>
                ))}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    );
  }
}

export default SkillSection;
