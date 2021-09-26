import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <div className="container p-1 m-4 border rounded row">
        <h2 className="title my-2 text-center">Contact Info</h2>
        <div className="col-md-6">
          <div className="input-group my-1">
            <input type="text" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group my-1">
            <select
              id=""
              className="form-select-md rounded dropdown-toggle input-group-text"
              size="1">
              <option value="44">UK (+44)</option>
              <option value="1">USA (+1)</option>
            </select>
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="input-group my-1 col-md">
          <input
            type="text"
            className="form-control"
            placeholder="LinkedIn URL(optional)"
          />
        </div>
        <div className="input-group my-1 col-md">
          <input
            type="text"
            className="form-control"
            placeholder="Instagram URL(optional)"
          />
        </div>
      </div>
    );
  }
}

export default ContactInfo;
