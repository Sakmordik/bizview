import React, { Component } from "react";
import Education from "./education";

class Educations extends Component {
  render() {
    const { Educations, addComponent, deleteComponent } = this.props;
    return (
      <div className="container m-4 border rounded d-grid ">
        <h2 className="title text-center my-3">Education</h2>
        {Educations.map((education) => (
          <Education
            key={education.id}
            deleteComponent={deleteComponent}
            id={education.id}
          />
        ))}
        <button
          className="btn btn-outline-secondary mb-2 btn-block"
          onClick={() => addComponent("Educations")}>
          +
        </button>
      </div>
    );
  }
}

export default Educations;
