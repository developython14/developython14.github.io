import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites, certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="education-content">
          <Fade bottom duration={1000} distance="20px">
            <div className="education-hero">
              <span
                className="education-label"
                style={{ color: theme.accentColor }}
              >
                {"< education />"}
              </span>
              <h1 className="education-title" style={{ color: theme.text }}>
                Qualifications & Certifications
              </h1>
              <p
                className="education-subtitle"
                style={{ color: theme.secondaryText }}
              >
                Academic background and professional development
              </p>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          {certifications.certifications.length > 0 && (
            <Certifications theme={this.props.theme} />
          )}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
