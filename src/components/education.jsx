import React from "react";
import logo from "./icons/logo.svg";
import $ from "jquery";

class Education extends React.Component {
  render() {
    const { deleteComponent, id } = this.props;
    return (
      <React.Fragment>
        <div className="mb-2 row">
          <div className="col-auto">
            <select
              id={"educationTypeSelect" + id}
              className="form-select"
              onChange={(e) => {
                $("#" + e.target.id).removeClass("is-invalid");
              }}>
              <option selected disabled value="">
                Choose type...
              </option>
              <option value="1">Bachelor's</option>
              <option value="2">Master's</option>
              <option value="3">Doctorate</option>
              <option value="4">Associate</option>
              <option value="4">Other</option>
            </select>
            <label
              htmlFor={"educationTypeSelect" + id}
              className="invalid-feedback">
              Please select a type!
            </label>
          </div>
          <div className="col">
            <input
              id={"degreeInput" + id}
              type="text"
              className="form-control"
              placeholder="Degree"
              onChange={(e) => {
                $("#" + e.target.id).removeClass("is-invalid");
              }}
            />
            <label htmlFor={"degreeInput" + id} className="invalid-feedback">
              Please provide your degree's name!
            </label>
          </div>
          <div className="col">
            <input
              id={"universityInput" + id}
              type="text"
              className="form-control "
              placeholder="University/Institute"
              onChange={(e) => {
                $("#" + e.target.id).removeClass("is-invalid");
              }}
            />
            <label
              htmlFor={"universityInput" + id}
              className="invalid-feedback">
              Please provide your University/Institute's name!
            </label>
          </div>
          <div className="col-3">
            <label
              id={"educationFileLabel" + id}
              htmlFor={"educationFileInput" + id}
              className="input-group-text">
              Choose Scanned Document
            </label>
            <input
              type="file"
              id={"educationFileInput" + id}
              className="form-control"
              style={{ display: "none", width: "0px", height: "0px" }}
              onChange={(e) => {
                $("#" + e.target.id).removeClass("is-invalid");
                $("#educationFileLabel" + id).removeClass("border-danger");
                document.getElementById("educationFileLabel" + id).innerHTML =
                  e.target.files[0].name;
              }}
            />
            <label
              htmlFor={"educationFileInput" + id}
              className="invalid-feedback">
              Please choose a file!
            </label>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-secondary input-group-btn"
              type="button"
              id="button-addon1"
              onClick={() => deleteComponent("Educations", id)}>
              <img
                src={logo}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Education;
