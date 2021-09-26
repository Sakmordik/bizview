import React, { Component } from "react";
import Profession from "./profession";

class Professions extends Component {
  render() {
    const { Professions, addComponent, deleteComponent } = this.props;
    return (
      <div className="container m-4 border rounded col">
        <h2 className="title text-center my-3">
          Prior Professional Experience
        </h2>
        {Professions.map((profession) => (
          <Profession
            key={profession.id}
            deleteComponent={deleteComponent}
            id={profession.id}
          />
        ))}
        <button
          className="btn btn-outline-secondary mb-2 btn-block form-control"
          onClick={() => addComponent("Professions")}>
          +
        </button>
      </div>
    );
  }
}

export default Professions;
