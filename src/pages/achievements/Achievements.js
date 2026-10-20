import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { achievementsData } from "./achievementsData";
import "./Achievements.css";

class Achievements extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0, expandedCards: {} };
  }

  toggleCard = (id) => {
    this.setState((prev) => ({
      expandedCards: { ...prev.expandedCards, [id]: !prev.expandedCards[id] },
    }));
  };

  render() {
    const theme = this.props.theme;
    const { activeTab, expandedCards } = this.state;
    const data = achievementsData;
    const currentSection = data.sections[activeTab];

    return (
      <div className="ach-main">
        <Header theme={theme} />
        <div className="ach-content">
          {/* Hero */}
          <Fade bottom duration={800} distance="30px">
            <div className="ach-hero">
              <p
                className="ach-hero-label"
                style={{ color: theme.accentColor }}
              >
                {data.headline.name}
              </p>
              <h1 className="ach-hero-title" style={{ color: theme.text }}>
                {data.headline.subtitle}
              </h1>
            </div>
          </Fade>

          {/* Top Stats */}
          <Fade bottom duration={800} distance="20px">
            <div className="ach-stats-grid">
              {data.topStats.map((stat, i) => (
                <div
                  className="ach-stat-card"
                  key={i}
                  style={{
                    backgroundColor: theme.cardBg || theme.highlight,
                    borderColor: theme.cardBorder || "rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    className="ach-stat-value"
                    style={{ color: theme.accentColor }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="ach-stat-label"
                    style={{ color: theme.secondaryText }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Fade>

          {/* Career Progression */}
          <Fade bottom duration={800} distance="20px">
            <div className="ach-progression">
              <h2 className="ach-section-title" style={{ color: theme.text }}>
                Career Progression
              </h2>
              <div className="ach-prog-track">
                {data.progression.map((step, i) => (
                  <div className="ach-prog-step" key={i}>
                    <div
                      className="ach-prog-badge"
                      style={{
                        backgroundColor: theme.accentColor,
                        color: theme.dark || theme.body,
                      }}
                    >
                      {step.level}
                    </div>
                    <div className="ach-prog-info">
                      <span
                        className="ach-prog-title"
                        style={{ color: theme.text }}
                      >
                        {step.title}
                      </span>
                      <span
                        className="ach-prog-period"
                        style={{ color: theme.secondaryText }}
                      >
                        {step.period}
                      </span>
                      <span
                        className="ach-prog-count"
                        style={{ color: theme.accentColor }}
                      >
                        {step.count} Achievements
                      </span>
                    </div>
                    {i < data.progression.length - 1 && (
                      <div
                        className="ach-prog-connector"
                        style={{ backgroundColor: theme.accentColor }}
                      />
                    )}
                  </div>
                ))}
              </div>
              <p
                className="ach-prog-tagline"
                style={{ color: theme.secondaryText }}
              >
                {data.progressionTagline}
              </p>
            </div>
          </Fade>

          {/* Section Tabs */}
          <div className="ach-tabs">
            {data.sections.map((section, i) => (
              <button
                key={section.id}
                className={`ach-tab ${activeTab === i ? "ach-tab-active" : ""}`}
                onClick={() => this.setState({ activeTab: i })}
                style={{
                  color:
                    activeTab === i ? theme.accentColor : theme.secondaryText,
                  borderBottomColor:
                    activeTab === i ? theme.accentColor : "transparent",
                }}
              >
                <span className="ach-tab-level">{section.level}</span>
                <span className="ach-tab-title">{section.title}</span>
                <span className="ach-tab-count">{section.count}</span>
              </button>
            ))}
          </div>

          {/* Section Header */}
          <div className="ach-section-header">
            <h3 className="ach-section-subtitle" style={{ color: theme.text }}>
              {currentSection.title}
            </h3>
            <span
              className="ach-section-period"
              style={{ color: theme.secondaryText }}
            >
              {currentSection.period} · {currentSection.count} Achievements
            </span>
          </div>

          {/* Achievement Cards */}
          <div className="ach-cards">
            {currentSection.achievements.map((ach, i) => {
              const isExpanded = expandedCards[ach.id];
              const isLong = ach.description.length > 180;
              const displayDesc =
                isLong && !isExpanded
                  ? ach.description.slice(0, 180) + "..."
                  : ach.description;

              return (
                <Fade bottom duration={600} distance="15px" key={ach.id}>
                  <div
                    className="ach-card"
                    style={{
                      backgroundColor: theme.cardBg || theme.highlight,
                      borderColor: theme.cardBorder || "rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="ach-card-header">
                      <span
                        className="ach-card-id"
                        style={{
                          backgroundColor: theme.accentColor,
                          color: theme.dark || theme.body,
                        }}
                      >
                        {ach.id}
                      </span>
                      <h4
                        className="ach-card-title"
                        style={{ color: theme.text }}
                      >
                        {ach.title}
                      </h4>
                    </div>

                    <p
                      className="ach-card-desc"
                      style={{ color: theme.secondaryText }}
                    >
                      {displayDesc}
                    </p>
                    {isLong && (
                      <button
                        className="ach-card-toggle"
                        onClick={() => this.toggleCard(ach.id)}
                        style={{ color: theme.accentColor }}
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </button>
                    )}

                    {ach.techStack && ach.techStack.length > 0 && (
                      <div className="ach-card-tech">
                        {ach.techStack.map((tech, j) => (
                          <span
                            key={j}
                            className="ach-tech-tag"
                            style={{
                              color: theme.accentColor,
                              borderColor: `${theme.accentColor}44`,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {ach.metrics && ach.metrics.length > 0 && (
                      <div className="ach-card-metrics">
                        {ach.metrics.map((m, j) => (
                          <div className="ach-metric" key={j}>
                            <span
                              className="ach-metric-value"
                              style={{ color: theme.accentColor }}
                            >
                              {m.value}
                            </span>
                            <span
                              className="ach-metric-label"
                              style={{ color: theme.secondaryText }}
                            >
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Achievements;
