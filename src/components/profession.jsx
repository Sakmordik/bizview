import React from "react";
import logo from "./icons/logo.svg";

class Profession extends React.Component {
  render() {
    const { deleteComponent, id } = this.props;
    return (
      <div className="input-group mt-2 mb-2">
        <input type="text" className="form-control" placeholder="Job Title" />
        <input type="text" className="form-control" placeholder="Company" />
        <input
          type="date"
          className="form-control"
          placeholder="Date"
          style={{ width: "1px" }}
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
          onClick={() => deleteComponent("Professions", id)}>
          <img src={logo} alt="" style={{ width: "100%", height: "100%" }} />
        </button>
      </div>
    );
  }
}

export default Profession;
