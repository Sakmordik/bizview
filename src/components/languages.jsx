import React, { Component } from "react";
import Language from "./language";

class Languages extends Component {
  render() {
    const { Languages, addComponent, deleteComponent } = this.props;
    return (
      <div className="container m-4 border rounded d-grid ">
        <h2 className="title text-center my-2">Languages</h2>
        {Languages.map((language) => (
          <Language
            key={language.id}
            deleteComponent={deleteComponent}
            id={language.id}
          />
        ))}
        <button
          className="btn btn-outline-secondary mb-2 btn-block"
          onClick={() => addComponent("Languages")}>
          +
        </button>
      </div>
    );
  }
}

export default Languages;
