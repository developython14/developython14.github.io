import React, { Component } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";

class TerminalLine extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", done: false };
    this.i = 0;
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.type();
    }, this.props.delay || 0);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    clearInterval(this.interval);
  }

  type() {
    const full = this.props.text;
    this.interval = setInterval(() => {
      if (this.i <= full.length) {
        this.setState({ text: full.slice(0, this.i) });
        this.i++;
      } else {
        clearInterval(this.interval);
        this.setState({ done: true });
        if (this.props.onDone) this.props.onDone();
      }
    }, this.props.speed || 30);
  }

  render() {
    const { prefix, color } = this.props;
    return (
      <div className="terminal-line">
        {prefix && <span className="terminal-prefix">{prefix}</span>}
        <span style={{ color }}>{this.state.text}</span>
        {!this.state.done && <span className="terminal-cursor">|</span>}
      </div>
    );
  }
}

export default function Greeting(props) {
  const theme = props.theme;

  const stats = [
    { value: "$16.8M+", label: "Impact" },
    { value: "2,250+", label: "Users" },
    { value: "65+", label: "Sites" },
    { value: "L3→L5", label: "Growth" },
  ];

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <p className="greeting-intro" style={{ color: theme.accentColor }}>
            Hi, my name is
          </p>
          <h1 className="greeting-text">{greeting.title}</h1>
          <h2 className="greeting-role" style={{ color: theme.secondaryText }}>
            Solution Development Manager @ Amazon
          </h2>
          <p className="greeting-desc" style={{ color: theme.secondaryText }}>
            {greeting.subTitle}
          </p>
          <SocialMedia theme={theme} />
          <div className="button-greeting-div">
            <Button
              text="See My Resume"
              newTab={true}
              href={greeting.resumeLink}
              theme={theme}
            />
            <Button
              text="GitHub"
              newTab={true}
              href={greeting.portfolio_repository}
              theme={theme}
            />
          </div>
        </div>

        <div className="greeting-terminal-div">
          <div
            className="terminal-window"
            style={{
              backgroundColor: theme.dark || "#020c1b",
              borderColor: theme.cardBorder,
            }}
          >
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: "#ff5f56" }} />
              <div className="terminal-dot" style={{ background: "#ffbd2e" }} />
              <div className="terminal-dot" style={{ background: "#27c93f" }} />
              <span
                className="terminal-title"
                style={{ color: theme.secondaryText }}
              >
                mustapha@amazon ~ portfolio
              </span>
            </div>
            <div className="terminal-body">
              <TerminalLine
                prefix="$ "
                text="whoami"
                color={theme.text}
                speed={60}
                delay={500}
              />
              <TerminalLine
                text="Mustapha Belkassam — Solution Development Manager"
                color={theme.accentColor}
                speed={25}
                delay={1200}
              />
              <TerminalLine
                prefix="$ "
                text="cat tech_stack.txt"
                color={theme.text}
                speed={50}
                delay={3000}
              />
              <TerminalLine
                text="Django · React · PostgreSQL · AWS · Python · Redis"
                color={theme.secondaryText}
                speed={20}
                delay={4200}
              />
              <TerminalLine
                prefix="$ "
                text="cat aws_services.txt"
                color={theme.text}
                speed={50}
                delay={5800}
              />
              <TerminalLine
                text="EC2 · ECS Fargate · Lambda · Redshift · QuickSight · S3"
                color={theme.secondaryText}
                speed={20}
                delay={7000}
              />
              <TerminalLine
                prefix="$ "
                text="echo $CAREER_LEVEL"
                color={theme.text}
                speed={50}
                delay={8800}
              />
              <TerminalLine
                text="L5 — promoted twice in under 12 months"
                color={theme.accentColor}
                speed={25}
                delay={9800}
              />
            </div>
          </div>

          <div className="stats-row">
            {stats.map((s, i) => (
              <div
                className="stat-card"
                key={i}
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: theme.cardBorder,
                }}
              >
                <span
                  className="stat-value"
                  style={{ color: theme.accentColor }}
                >
                  {s.value}
                </span>
                <span
                  className="stat-label"
                  style={{ color: theme.secondaryText }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
