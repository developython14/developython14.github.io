import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  render() {
    const theme = this.props.theme;
    const { activeTab } = this.state;
    const currentSection = experience.sections[activeTab];

    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="experience-content">
          <Fade bottom duration={1000} distance="30px">
            <div className="experience-header-section">
              <p
                className="experience-header-label"
                style={{ color: theme.accentColor || theme.imageHighlight }}
              >
                My Journey
              </p>
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {experience.title}
              </h1>
              <p
                className="experience-header-detail-text"
                style={{ color: theme.secondaryText }}
              >
                {experience["description"]}
              </p>
            </div>
          </Fade>

          <Fade bottom duration={1000} distance="20px">
            <div className="experience-tabs">
              {experience.sections.map((section, index) => (
                <button
                  key={section.title}
                  className={`experience-tab ${
                    activeTab === index ? "experience-tab-active" : ""
                  }`}
                  onClick={() => this.setState({ activeTab: index })}
                  style={{
                    color:
                      activeTab === index
                        ? theme.accentColor || theme.imageHighlight
                        : theme.secondaryText,
                    borderBottomColor:
                      activeTab === index
                        ? theme.accentColor || theme.imageHighlight
                        : "transparent",
                  }}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </Fade>

          <div className="experience-timeline">
            {currentSection.experiences.map((exp, index) => (
              <Fade bottom duration={800} distance="20px" key={index}>
                <ExperienceCard experience={exp} theme={theme} index={index} />
              </Fade>
            ))}
          </div>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
