import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { Mobileappdetaisls } from "../../components/projectlive/projectlive";
import {
  ML_Project_0,
  ML_Project_1,
  ML_Project_2,
} from "../../components/projectlive/data_science_projects";
import {
  Projectdetails_1,
  Projectdetails_2,
} from "../../components/projectlive/projectlive";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} key={repo.id} />;
          })}
        </div>

        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        <div className="projects-section-divider">
          <h2 className="projects-section-title" style={{ color: theme.text }}>
            Featured Projects
          </h2>
        </div>

        <div className="featured-projects-grid">
          <Projectdetails_1 />
          <Projectdetails_2 />
          <Mobileappdetaisls />
        </div>

        <div className="projects-section-divider">
          <h2 className="projects-section-title" style={{ color: theme.text }}>
            Data Science Projects
          </h2>
        </div>

        <div className="ds-projects-container">
          <ML_Project_0 />
          <ML_Project_1 />
          <ML_Project_2 />
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
