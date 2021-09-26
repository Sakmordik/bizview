import React from "react";
import logo from "./icons/logo.svg";

class Profession extends React.Component {
  render() {
    const { deleteComponent, id } = this.props;
    return (
      <React.Fragment className="">
        <div className="my-2 mt-4 row">
          <div className="input-group col-md my-1">
            <input
              type="text"
              className="form-control"
              placeholder="Job Title"
            />
            <input type="text" className="form-control" placeholder="Company" />
          </div>
          <div className="input-group col-md my-1">
            <span className="input-group-text">Start Date:</span>
            <input type="date" className="form-control" />
          </div>
          <div className="input-group col-md my-1">
            <span className="input-group-text">End Date:</span>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-auto my-1">
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
          {/* <span className="input-group-text">Month</span>
        <select className="border" id="inputGroupSelect01">
          <option defaultValue>01</option>
          <option value="1">02</option>
        </select>
        <span className="input-group-text">Year</span>
        <select className="border" id="inputGroupSelect01">
          <option defaultValue>2021</option>
          <option value="1">2020</option>
        </select> */}
          {/* <input id="file-upload" type="file" style={{display:"none"}}/>
                    <label htmlFor="file-upload" className="custom-file-upload">
                        File
                    </label>
                */}
        </div>
        <div className="input-group my-2">
          <textarea
            placeholder="Job Description"
            cols="30"
            rows="5"
            className="form-control"></textarea>
        </div>
        
      </React.Fragment>
    );
  }
}

export default Profession;
