import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="educations-container" id="educations">
        <div className="educations-body-div">
          {degrees.degrees.map((degree, index) => (
            <DegreeCard degree={degree} theme={theme} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default Educations;
