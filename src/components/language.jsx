import React from "react";
import logo from "./icons/logo.svg";

class Language extends React.Component {
  render() {
    const { deleteComponent, id } = this.props;
    return (
      <div className="input-group my-2">
        <input type="text" className="form-control w-25" placeholder="Language" />

        <div className="input-group-append">
          <input type="file" className="form-control" />
        </div>
        {/* <input id="file-upload" type="file" style={{display:"none"}}/>
                    <label htmlFor="file-upload" className="custom-file-upload">
                        File
                    </label>
                */}

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
    );
  }
}

export default Language;
