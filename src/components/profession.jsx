import React from "react";
import logo from "./icons/logo.svg";
import $ from "jquery";

class Profession extends React.Component {
  inputs = {
    job: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  };
  render() {
    const { deleteComponent, id } = this.props;
    return (
      <React.Fragment>
        <div className="my-2 mt-4 row">
          <div className="col-3">
            <input
              id={"jobInput" + id}
              type="text"
              className="form-control"
              placeholder="Job Title"
              onChange={(e) => {
                $("#" + e.target.id).removeClass("is-invalid");
              }}
            />
            <label htmlFor={"jobInput" + id} className="invalid-feedback">
              Please enter a job title!
            </label>
          </div>
          <div className="col-3">
            <input
              id={"companyInput" + id}
              type="text"
              className="form-control"
              placeholder="Company"
              onChange={(e) => {
                $("#" + e.target.id).removeClass("is-invalid");
              }}
            />
            <label htmlFor={"companyInput" + id} className="invalid-feedback">
              Please enter a company name!
            </label>
          </div>
          <div className="col">
            <div className="input-group">
              <span className="input-group-text">Start:</span>
              <input
                id={"startDateInput" + id}
                type="date"
                className="form-control rounded-end"
                onChange={(e) => {
                  $("#" + e.target.id).removeClass("is-invalid");
                  if (
                    $("#startDateInput" + id).val() &&
                    $("#endDateInput" + id).val()
                  ) {
                    if (
                      $("#startDateInput" + id).val() >
                      $("#endDateInput" + id).val()
                    ) {
                      $("#startDateInput" + id).addClass(" is-invalid");
                      $("#endDateInput" + id).addClass(" is-invalid");
                      $("#endDateInputLabel" + id).text("");
                      $("#startDateInputLabel" + id).text(
                        "Start date should be before end date!"
                      );
                    }
                  }
                }}
              />
              <label
                id={"startDateInputLabel" + id}
                htmlFor={"startDateInput" + id}
                className="invalid-feedback"></label>
            </div>
          </div>
          <div className="col">
            <div className="input-group">
              <span className="input-group-text">End:</span>
              <input
                id={"endDateInput" + id}
                type="date"
                className="form-control rounded-end"
                onChange={(e) => {
                  $("#" + e.target.id).removeClass("is-invalid");
                  if (
                    $("#startDateInput" + id).val() &&
                    $("#endDateInput" + id).val()
                  ) {
                    if (
                      $("#startDateInput" + id).val() >
                      $("#endDateInput" + id).val()
                    ) {
                      $("#startDateInput" + id).addClass(" is-invalid");
                      $("#endDateInput" + id).addClass(" is-invalid");
                      $("#endDateInputLabel" + id).text("");
                      $("#startDateInputLabel" + id).text(
                        "Start date should be before end date!"
                      );
                    } else {
                      $("#startDateInput" + id).removeClass("is-invalid");
                      $("#endDateInput" + id).removeClass("is-invalid");
                    }
                  }
                }}
              />
              <label
                id={"endDateInputLabel" + id}
                htmlFor={"endDateInput" + id}
                className="invalid-feedback"></label>
            </div>
          </div>
          <div className="col-auto">
            <div className="">
              <button
                className="btn btn-secondary input-group-btn"
                type="button"
                id="button-addon1"
                onClick={() => deleteComponent("Professions", id)}>
                <img
                  src={logo}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="my-2">
          <textarea
            id={"jobDescriptionInput" + id}
            placeholder="Job Description"
            cols="30"
            rows="5"
            className="form-control"
            onChange={(e) => {
              $("#" + e.target.id).removeClass("is-invalid");
            }}></textarea>
          <label
            htmlFor={"jobDescriptionInput" + id}
            className="invalid-feedback">
            Please enter a job description!
          </label>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    let today = new Date();

    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    document
      .getElementById("startDateInput" + this.props.id)
      .setAttribute("max", today);
    document
      .getElementById("endDateInput" + this.props.id)
      .setAttribute("max", today);
  }
}

export default Profession;
