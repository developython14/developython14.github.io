import React, { Component } from "react";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    const { expanded } = this.state;
    const desc = experience["description"] || "";
    const isLong = desc.length > 200;
    const displayDesc = isLong && !expanded ? desc.slice(0, 200) + "..." : desc;

    return (
      <div className="exp-card-wrapper">
        <div
          className="exp-timeline-dot"
          style={{ backgroundColor: experience["color"] || theme.accentColor }}
        />
        <div
          className="exp-card"
          style={{
            backgroundColor: theme.cardBg || theme.highlight,
            borderColor: theme.cardBorder || "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="exp-card-accent"
            style={{
              backgroundColor: experience["color"] || theme.accentColor,
            }}
          />
          <div className="exp-card-inner">
            <div className="exp-card-top">
              <div className="exp-card-logo-wrap">
                <img
                  className="exp-card-logo"
                  src={require(`../../assests/images/${experience["logo_path"]}`)}
                  alt={experience["company"]}
                />
              </div>
              <div className="exp-card-info">
                <h3 className="exp-card-title" style={{ color: theme.text }}>
                  {experience["title"]}
                </h3>
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-card-company"
                  style={{ color: theme.accentColor || theme.imageHighlight }}
                >
                  {experience["company"]}
                </a>
              </div>
              <div className="exp-card-meta">
                <span
                  className="exp-card-duration"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["duration"]}
                </span>
                <span
                  className="exp-card-location"
                  style={{ color: theme.secondaryText }}
                >
                  <span role="img" aria-label="location">
                    📍
                  </span>{" "}
                  {experience["location"]}
                </span>
              </div>
            </div>

            <p className="exp-card-desc" style={{ color: theme.secondaryText }}>
              {displayDesc}
            </p>
            {isLong && (
              <button
                className="exp-card-toggle"
                onClick={() => this.setState({ expanded: !expanded })}
                style={{ color: theme.accentColor || theme.imageHighlight }}
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
