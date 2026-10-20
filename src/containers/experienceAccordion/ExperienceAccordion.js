import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <Accordion>
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: theme.cardBg || theme.highlight,
                      border: `1px solid ${
                        theme.cardBorder || theme.headerColor
                      }`,
                      borderRadius: `12px`,
                      marginBottom: `8px`,
                      fontFamily: "Inter, Google Sans Regular, sans-serif",
                      color: theme.text,
                      fontSize: "16px",
                      fontWeight: "600",
                      padding: "16px 20px",
                      transition: "all 0.3s ease",
                      ":hover": {
                        color: theme.accentColor || theme.secondaryText,
                        borderColor: theme.accentColor || theme.secondaryText,
                      },
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: "transparent",
                      borderRadius: "12px",
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
