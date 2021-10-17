import React from "react";
import logo from "./icons/logo.svg";

class Education extends React.Component {
  render() {
    const { deleteComponent, id } = this.props;
    return (
      <React.Fragment>
        <div className="input-group my-2">
          <select
            className="border rounded"
            id="inputGroupSelect01"
            style={{
              width: "10%",
              maxWidth: "230px",
              minWidth: "100px",
              textAlign: "center",
            }}>
            <option defaultValue>Choose type...</option>
            <option value="1">Bachelor's</option>
            <option value="2">Master's</option>
            <option value="3">Doctorate</option>
            <option value="4">Associate</option>
            <option value="4">Other</option>
          </select>
          <input type="text" className="form-control" placeholder="Degree" />
          <input
            type="text"
            className="form-control "
            placeholder="University/Institute"
          />
          <div className="input-group-append">
            <label
              id={"educationFileLabel" + id}
              htmlFor={"educationFileInput" + id}
              className="input-group-text">
              Choose Scanned Document
            </label>
          </div>
          <input
            type="file"
            id={"educationFileInput" + id}
            className=""
            style={{ visibility: "hidden", width: "0px", height: "0px" }}
            onChange={(event) => {
              document.getElementById("educationFileLabel" + id).innerHTML =
                event.target.files[0].name;
            }}
          />
          {/* <input id="file-upload" type="file" style={{display:"none"}}/>
                    <label htmlFor="file-upload" className="custom-file-upload">
                        File
                    </label>
                */}

          <button
            className="btn btn-secondary"
            type="button"
            id="button-addon1"
            onClick={() => deleteComponent("Educations", id)}>
            <img
              className="text-light"
              src={logo}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Education;
