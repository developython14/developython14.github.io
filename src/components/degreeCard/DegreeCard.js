import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={1000} distance="20px">
        <div
          className="degree-card"
          style={{
            backgroundColor: theme.cardBg || theme.highlight,
            borderColor: theme.cardBorder || "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="degree-accent"
            style={{ backgroundColor: theme.accentColor }}
          />
          <div className="degree-card-header">
            {degree.logo_path && (
              <div className="degree-logo-wrap">
                <img
                  className="degree-logo"
                  src={require(`../../assests/images/${degree.logo_path}`)}
                  alt={degree.alt_name}
                />
              </div>
            )}
            <div className="degree-info">
              <h2 className="degree-title" style={{ color: theme.text }}>
                {degree.title}
              </h2>
              <h3
                className="degree-subtitle"
                style={{ color: theme.accentColor }}
              >
                {degree.subtitle}
              </h3>
              <span
                className="degree-duration"
                style={{ color: theme.secondaryText }}
              >
                {degree.duration}
              </span>
            </div>
          </div>
          <div className="degree-card-body">
            {degree.descriptions.map((sentence, i) => (
              <p
                className="degree-desc"
                style={{ color: theme.secondaryText }}
                key={i}
              >
                {sentence}
              </p>
            ))}
          </div>
          {degree.website_link && (
            <div className="degree-card-footer">
              <a
                href={degree.website_link}
                target="_blank"
                rel="noopener noreferrer"
                className="degree-visit-btn"
                style={{
                  color: theme.accentColor,
                  borderColor: theme.accentColor,
                }}
              >
                Visit Website →
              </a>
            </div>
          )}
        </div>
      </Fade>
    );
  }
}

export default DegreeCard;
