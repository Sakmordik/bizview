import React from "react";
import logo from "./icons/logo.svg";
import $ from "jquery";

class Language extends React.Component {
  render() {
    const { deleteComponent, id } = this.props;
    return (
      <div className="my-2 row">
        <div className="col">
          <input
            id={"languageInput" + id}
            type="text"
            className="form-control"
            placeholder="Language"
            onChange={(e) => {
              $("#" + e.target.id).removeClass("is-invalid");
            }}
          />
          <label htmlFor={"languageInput" + id} className="invalid-feedback">
            Please provide a language!
          </label>
        </div>

        <div className="col-3">
          <label
            id={"languageFileLabel" + id}
            htmlFor={"languageFileInput" + id}
            className="input-group-text">
            Choose Scanned Document
          </label>
          <input
            type="file"
            id={"languageFileInput" + id}
            className="form-control"
            style={{ display: "none", width: "0px", height: "0px" }}
            onChange={(e) => {
              $("#" + e.target.id).removeClass("is-invalid");
              $("#languageFileLabel" + id).removeClass("border-danger");
              document.getElementById("languageFileLabel" + id).innerHTML =
                e.target.files[0].name;
            }}
          />
          <label
            htmlFor={"languageFileInput" + id}
            className="invalid-feedback">
            Please choose a file!
          </label>
        </div>
        {/* <input id="file-upload" type="file" style={{display:"none"}}/>
                    <label htmlFor="file-upload" className="custom-file-upload">
                        File
                    </label>
                */}
        <div className="col-auto">
          <button
            className="btn btn-secondary"
            type="button"
            id="button-addon1"
            onClick={() => deleteComponent("Languages", id)}>
            <img
              className="text-light"
              src={logo}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Language;
